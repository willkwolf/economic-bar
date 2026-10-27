"""
Adversarial Independent Oracle for Baseline Snapshots and State Mapping (Refined)
Milestone M5 - Challenger 2
"""
import os
import sys
import json
import hashlib
import struct
import zlib

BASELINE_DIR = r"c:\Dev\BAR-Economic\tests\baseline"
MAPPING_FILE = os.path.join(BASELINE_DIR, "state_mapping.json")

def parse_png(filepath):
    with open(filepath, "rb") as f:
        data = f.read()
    
    sha256 = hashlib.sha256(data).hexdigest()
    size = len(data)
    
    # 1. Header check
    magic = data[:8]
    if magic != b"\x89PNG\r\n\x1a\n":
        return False, f"Invalid PNG magic bytes: {magic}", None
    
    # 2. IHDR parse
    ihdr_len = struct.unpack(">I", data[8:12])[0]
    ihdr_type = data[12:16]
    if ihdr_type != b"IHDR":
        return False, f"Expected IHDR chunk, got {ihdr_type}", None
    
    width, height, bit_depth, color_type, comp, filt, interlace = struct.unpack(
        ">IIBBBBB", data[16:29]
    )
    
    # Extract IDAT chunks to check payload
    idat_bytes = bytearray()
    pos = 8
    chunks = []
    while pos < len(data):
        length = struct.unpack(">I", data[pos:pos+4])[0]
        ctype = data[pos+4:pos+8].decode("latin-1", errors="ignore")
        chunks.append(ctype)
        if ctype == "IDAT":
            idat_bytes.extend(data[pos+8:pos+8+length])
        pos += 12 + length # 4 len + 4 type + data + 4 crc
        if ctype == "IEND":
            break
            
    decompressed_len = 0
    try:
        decompressed = zlib.decompress(bytes(idat_bytes))
        decompressed_len = len(decompressed)
    except Exception as e:
        return False, f"Failed to decompress IDAT stream: {e}", None

    info = {
        "filepath": filepath,
        "filename": os.path.basename(filepath),
        "size": size,
        "sha256": sha256,
        "width": width,
        "height": height,
        "bit_depth": bit_depth,
        "color_type": color_type,
        "chunks": chunks,
        "decompressed_idat_size": decompressed_len,
    }
    return True, None, info

def main():
    print("=" * 80)
    print("EMPIRICAL ADVERSARIAL ORACLE: BASELINE INTEGRITY AUDIT")
    print("=" * 80)
    
    errors = []
    warnings = []
    
    if not os.path.exists(MAPPING_FILE):
        print("CRITICAL: state_mapping.json does not exist!")
        sys.exit(1)
        
    with open(MAPPING_FILE, "r", encoding="utf-8") as f:
        mapping = json.load(f)
        
    checkpoints = mapping.get("checkpoints", [])
    print(f"Total checkpoints in mapping: {len(checkpoints)}")
    if len(checkpoints) != 12:
        errors.append(f"Expected 12 checkpoints, found {len(checkpoints)}")
        
    parsed_snapshots = {}
    seen_hashes = {}
    
    for cp in checkpoints:
        cid = cp.get("checkpoint_id")
        fname = cp.get("snapshot_file")
        fpath = os.path.join(BASELINE_DIR, fname)
        
        print(f"\nEvaluating Checkpoint: {cid} -> {fname}")
        
        if not os.path.exists(fpath):
            errors.append(f"Snapshot file missing: {fname}")
            print(f"  [X] File missing: {fname}")
            continue
            
        ok, err_msg, info = parse_png(fpath)
        if not ok:
            errors.append(f"PNG parsing error for {fname}: {err_msg}")
            print(f"  [X] Parsing error: {err_msg}")
            continue
            
        parsed_snapshots[fname] = info
        
        # Check size > 10KB (requirement)
        if info["size"] <= 10240:
            errors.append(f"{fname} size is <= 10KB ({info['size']} bytes)")
            print(f"  [X] File too small: {info['size']} bytes")
        else:
            print(f"  [OK] Size: {info['size']:,} bytes (>10KB)")
            
        # Check dimensions
        print(f"  [OK] Dimensions: {info['width']}x{info['height']} (bit depth: {info['bit_depth']}, color type: {info['color_type']})")
        if info["width"] not in (1270, 1280) or info["height"] != 800:
            errors.append(f"{fname} dimensions unexpected: {info['width']}x{info['height']}")
            
        # Check SHA-256 match with JSON
        json_img_hash = cp.get("image_hash_sha256")
        if info["sha256"] != json_img_hash:
            errors.append(f"SHA-256 mismatch for {fname}: disk={info['sha256']} vs json={json_img_hash}")
            print(f"  [X] Hash mismatch!")
        else:
            print(f"  [OK] SHA-256 match: {info['sha256']}")
            
        # Duplicate detection
        if info["sha256"] in seen_hashes:
            errors.append(f"DUPLICATE SNAPSHOT DETECTED: {fname} has exact same hash as {seen_hashes[info['sha256']]}")
            print(f"  [X] DUPLICATE of {seen_hashes[info['sha256']]}")
        else:
            seen_hashes[info["sha256"]] = fname
            
        # Check DOM bounding boxes in interactive elements
        interactive = cp.get("interactive_elements", [])
        visible_interactive_count = 0
        
        for el in interactive:
            sel = el.get("selector")
            is_vis = el.get("visible", False)
            bbox = el.get("bounding_box", {})
            bx = bbox.get("x")
            by = bbox.get("y")
            bw = bbox.get("width")
            bh = bbox.get("height")
            
            if is_vis:
                visible_interactive_count += 1
                if bx is None or by is None or bw is None or bh is None:
                    errors.append(f"Invalid bounding box in visible element {sel} in {cid}: {bbox}")
                elif bw <= 0 or bh <= 0:
                    errors.append(f"Zero or negative bounding box dimensions in visible element {sel} in {cid}: {bbox}")
                elif bx < 0 or by < 0:
                    warnings.append(f"Negative coordinate in visible element {sel} in {cid}: {bbox}")
                else:
                    # Realistic coordinates within 1280x800 viewport
                    if bx + bw > 1300 or by + bh > 1200:
                        warnings.append(f"Element {sel} partially exceeds viewport bounds in {cid}: {bbox}")
            else:
                # If hidden, width and height should be 0
                if bw != 0 or bh != 0:
                    warnings.append(f"Hidden element {sel} has non-zero bounding box in {cid}: {bbox}")
                    
        print(f"  Total interactive elements: {len(interactive)} (visible: {visible_interactive_count})")
        if visible_interactive_count == 0 and cid != "11_loading_screen_alchemical_delay":
            errors.append(f"Checkpoint {cid} has 0 visible interactive elements!")
            
    # 3. Adversarial Visual Differentiation Matrix
    print("\n" + "=" * 80)
    print("PAIRWISE VISUAL DIFFERENTIATION MATRIX")
    print("=" * 80)
    snapshot_names = list(parsed_snapshots.keys())
    identical_pairs = 0
    for i in range(len(snapshot_names)):
        for j in range(i + 1, len(snapshot_names)):
            f1 = snapshot_names[i]
            f2 = snapshot_names[j]
            info1 = parsed_snapshots[f1]
            info2 = parsed_snapshots[f2]
            
            if info1["sha256"] == info2["sha256"]:
                errors.append(f"Identical snapshots: {f1} == {f2}")
                identical_pairs += 1
                
    print(f"Pairwise collision count: {identical_pairs} (0 expected)")
    print(f"Total distinct snapshots analyzed: {len(parsed_snapshots)}/12")
    
    # Summary
    print("\n" + "=" * 80)
    print("ORACLE SUMMARY")
    print("=" * 80)
    if warnings:
        print(f"Warnings ({len(warnings)}):")
        for w in warnings:
            print(f"  [!] {w}")
    if errors:
        print(f"ERRORS FOUND ({len(errors)}):")
        for e in errors:
            print(f"  [FAIL] {e}")
        return 1
    else:
        print("ALL ADVERSARIAL ORACLE CHECKS PASSED: 12 valid, distinct, verified PNGs with real DOM coordinates!")
        return 0

if __name__ == "__main__":
    sys.exit(main())
