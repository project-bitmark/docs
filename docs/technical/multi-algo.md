---
sidebar_position: 2
title: Multi-Algorithm Proof of Work
description: Deep dive into Bitmark's eight mining algorithms
---

# Multi-Algorithm Proof of Work

Bitmark supports eight distinct proof-of-work algorithms, enabling diverse hardware participation and increased security.

## Overview

The multi-algorithm PoW system was activated at block **450,947** via a supermajority consensus hard fork.

### Why Multiple Algorithms?

1. **Decentralization**: Different hardware types (CPU, GPU, ASIC) can participate
2. **Security**: 51% attack requires controlling majority of ALL algorithms
3. **Accessibility**: Anyone with a computer can mine with at least one algorithm
4. **Resilience**: If one algorithm is compromised, seven others continue

## The Eight Algorithms

### Algorithm Summary

| ID | Name | Type | Weight | Hardware | Notes |
|----|------|------|--------|----------|-------|
| 0 | Scrypt | Memory-hard | 8,000 | ASIC/GPU | Litecoin-compatible |
| 1 | SHA256D | CPU-bound | 1 | ASIC | Bitcoin-compatible |
| 2 | Yescrypt | Memory-hard | 800,000 | CPU/GPU | Password hash derivative |
| 3 | Argon2d | Memory-hard | 4,000,000 | CPU | PHC winner |
| 4 | X17 | Chained | 8,000 | GPU | 17 algorithms chained |
| 5 | Lyra2REv2 | Memory-hard | 8,000 | GPU | Vertcoin algorithm |
| 6 | Equihash | Memory-hard | 8,000,000 | GPU/ASIC | Zcash algorithm |
| 7 | CryptoNight | Memory-hard | 8,000,000 | CPU/GPU | Monero family |

### Algorithm Weights

Weights normalize hash rates across algorithms for fair difficulty comparison:

```cpp
unsigned int GetAlgoWeight(int algo) {
    switch (algo) {
        case ALGO_SHA256D:     return 1;
        case ALGO_SCRYPT:      return 8000;
        case ALGO_YESCRYPT:    return 800000;
        case ALGO_ARGON2:      return 4000000;
        case ALGO_X17:         return 8000;
        case ALGO_LYRA2REv2:   return 8000;
        case ALGO_EQUIHASH:    return 8000000;
        case ALGO_CRYPTONIGHT: return 8000000;
    }
}
```

## Algorithm Details

### Scrypt (ID: 0)

**Parameters**: N=1024, r=1, p=1

Originally from Litecoin, Scrypt is memory-hard but efficient enough for ASICs.

```cpp
// Implementation in src/scrypt.cpp
void scrypt_hash(const char* input, char* output) {
    scrypt_1024_1_1_256(input, output);
}
```

**Mining**: ASIC and GPU competitive, CPU possible but slow.

### SHA256D (ID: 1)

Double SHA256, same as Bitcoin.

```cpp
// Implementation in src/hash.cpp
uint256 Hash(const void* data, size_t len) {
    return SHA256(SHA256(data, len));
}
```

**Mining**: ASIC-dominated due to Bitcoin's massive investment.

### Yescrypt (ID: 2)

Password hashing function derivative, very memory-intensive.

```cpp
// Implementation in src/yescrypt/yescrypt.c
void yescrypt_hash(const char* input, char* output) {
    yescrypt_kdf(NULL, input, 80, ...);
}
```

**Mining**: CPU and GPU competitive, ASIC-resistant.

### Argon2d (ID: 3)

Winner of the Password Hashing Competition. Uses data-dependent memory access.

```cpp
// Implementation in src/ar2/argon2.c
void argon2d_hash(void* out, const void* in) {
    argon2_hash(1, 16000, 1, in, 80, ...);
}
```

**Mining**: CPU-optimized, GPU possible, ASIC-resistant.

### X17 (ID: 4)

17 hash functions chained together:
1. BLAKE
2. BMW
3. Groestl
4. JH
5. Keccak
6. Skein
7. Luffa
8. Cubehash
9. Shavite
10. SIMD
11. ECHO
12. Hamsi
13. Fugue
14. Shabal
15. Whirlpool
16. SHA512
17. Haval

```cpp
// Implementation uses sph_* functions
void x17_hash(const char* input, char* output) {
    // Chain of 17 different hash functions
    sph_blake512(&ctx_blake, input, 80);
    sph_bmw512(&ctx_bmw, hash, 64);
    // ... 15 more algorithms
}
```

**Mining**: GPU-optimized due to parallel nature.

### Lyra2REv2 (ID: 5)

Memory-hard algorithm from Vertcoin.

```cpp
// Implementation in src/Lyra2RE/Lyra2RE.c
void lyra2re2_hash(const char* input, char* output) {
    blake256_hash(input, hash);
    keccak256_hash(hash, hash);
    Lyra2(hash, hash, ...);
    // ...
}
```

**Mining**: GPU-optimized, ASIC-resistant.

### Equihash (ID: 6)

**Parameters**: N=200, K=9

Memory-hard algorithm from Zcash based on the generalized birthday problem.

```cpp
// Implementation in src/equihash.cpp
bool VerifyEquihash(const CBlockHeader& header) {
    return IsValidSolution(header.nNonce256, header.nSolution);
}
```

**Special Header**: Uses 256-bit nonce and variable-length solution (~1344 bytes).

**Mining**: GPU and specialized ASICs available.

### CryptoNight (ID: 7)

Memory-hard algorithm from the Monero family.

```cpp
// Implementation in src/cryptonight/crypto/
void cryptonight_hash(const void* input, void* output) {
    cn_slow_hash(input, 80, output);
}
```

**Mining**: CPU and GPU competitive, designed for ASIC resistance.

## Block Version Encoding

The algorithm is encoded in the block version field:

```
nVersion bits:
┌────────────────────────────────────────────────────────────┐
│ Bit 31-16 │ 14 │ 13 │ 12 │ 11-9 │ 8 │ 7-0                 │
│ Chain ID  │ V2 │ V1 │SSF │ ALGO │AUX│ Version             │
└────────────────────────────────────────────────────────────┘
```

**Algorithm selector (bits 9-11)**:
| Value | Algorithm |
|-------|-----------|
| 0 | Scrypt |
| 1 | SHA256D |
| 2 | Yescrypt |
| 3 | Argon2d |
| 4 | X17 |
| 5 | Lyra2REv2 |
| 6 | Equihash |
| 7 | CryptoNight |

**Version constants**:
```cpp
#define BLOCK_VERSION_ALGO      (7 << 9)   // 0x0E00
#define BLOCK_VERSION_SCRYPT    (0 << 9)   // 0x0000
#define BLOCK_VERSION_SHA256D   (1 << 9)   // 0x0200
#define BLOCK_VERSION_YESCRYPT  (2 << 9)   // 0x0400
#define BLOCK_VERSION_ARGON2    (3 << 9)   // 0x0600
#define BLOCK_VERSION_X17       (4 << 9)   // 0x0800
#define BLOCK_VERSION_LYRA2REv2 (5 << 9)   // 0x0A00
#define BLOCK_VERSION_EQUIHASH  (6 << 9)   // 0x0C00
#define BLOCK_VERSION_CRYPTONIGHT (7 << 9) // 0x0E00
```

## Algorithm Validation

Each algorithm validates differently:

```cpp
bool CheckProofOfWork(const CBlockHeader& block) {
    int algo = block.GetAlgo();
    uint256 hash;

    switch (algo) {
        case ALGO_SCRYPT:
            scrypt_hash(block.GetPoWHash(), hash);
            break;
        case ALGO_EQUIHASH:
            // Verify solution, then hash
            if (!VerifyEquihashSolution(block)) return false;
            hash = block.GetHash();
            break;
        // ... other algorithms
    }

    return hash <= block.GetTarget();
}
```

## Timing and Distribution

Each algorithm targets **16-minute** block intervals:

```
8 algorithms × 16 minutes ÷ 8 = 2 minutes average
```

This maintains the 2-minute overall block time while giving each algorithm equal opportunity.

### Subsidy Distribution

Each algorithm receives **1/8** of the block reward:

```cpp
CAmount GetBlockSubsidy(int algo) {
    CAmount baseSubsidy = GetBaseSubsidy(height);
    return baseSubsidy / 8;  // Per algorithm
}
```

## Security Considerations

### 51% Attack Resistance

An attacker must control majority hash power across multiple algorithms:

```
Attack Cost = Sum(Majority_Hash_Power × Cost_Per_Hash × Time)
            for each algorithm
```

This significantly increases attack costs compared to single-algorithm chains.

### Algorithm Compromise

If one algorithm is compromised:
- 7 other algorithms continue securing the chain
- Community can respond (e.g., emergency fork to remove algorithm)
- Transactions are still confirmed by other algorithms

### Rental Attack Mitigation

Renting hash power is more difficult because:
- Must rent from multiple markets
- Different hardware requirements
- Coordinating timing across algorithms is complex

## Mining Configuration

### Select Algorithm

In `bitmark.conf`:
```ini
# No specific config needed - all algorithms accepted
# Miner chooses which algorithm to use
```

### RPC Mining

```bash
# Set mining algorithm (0-7)
bitmark-cli setminingalgo 3  # Argon2d

# Start mining
bitmark-cli setgenerate true 4  # 4 threads, current algorithm

# Check current algorithm
bitmark-cli getmininginfo
```

### External Miners

Using cpuminer-multi:
```bash
# Mine specific algorithm
cpuminer -a scrypt -o http://localhost:9266 -u user -p pass
cpuminer -a sha256d -o http://localhost:9266 -u user -p pass
cpuminer -a ar2 -o http://localhost:9266 -u user -p pass  # Argon2d
cpuminer -a x17 -o http://localhost:9266 -u user -p pass
cpuminer -a lyra2rev2 -o http://localhost:9266 -u user -p pass
cpuminer -a equihash -o http://localhost:9266 -u user -p pass
cpuminer -a cryptonight -o http://localhost:9266 -u user -p pass
```

## Implementation Files

| Algorithm | Source Files |
|-----------|--------------|
| Scrypt | `src/scrypt.cpp` |
| SHA256D | `src/hash.cpp` |
| Yescrypt | `src/yescrypt/*.c` |
| Argon2d | `src/ar2/*.c` |
| X17 | `src/sph_*.c` (multiple) |
| Lyra2REv2 | `src/Lyra2RE/*.c` |
| Equihash | `src/equihash.cpp`, `src/pow.cpp` |
| CryptoNight | `src/cryptonight/crypto/*.c` |

## See Also

- [Difficulty Adjustment](/technical/difficulty-adjustment) - Per-algorithm DGWv3
- [Merge Mining](/technical/merge-mining) - Multi-algorithm AuxPow
- [Mining Guide](/ecosystem/mining) - Getting started mining
