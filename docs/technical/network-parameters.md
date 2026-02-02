---
sidebar_position: 6
title: Network Parameters
description: Complete reference of Bitmark network parameters
---

# Network Parameters

Complete reference of Bitmark's network and consensus parameters.

## Network Configuration

### Ports

| Parameter | Mainnet | Testnet | Regtest |
|-----------|---------|---------|---------|
| P2P Port | 9265 | 19265 | 18444 |
| RPC Port | 9266 | 19266 | 18332 |

### Network Magic

| Network | Magic Bytes | Hex |
|---------|-------------|-----|
| Mainnet | `ù¾´Ù` | `0xf9beb4d9` |
| Testnet | `·` | `0x0b110907` |
| Regtest | `úûñÝ` | `0xfabfb5da` |

### Address Prefixes

| Type | Mainnet | Testnet |
|------|---------|---------|
| P2PKH | 85 (`b`) | 130 (`u`) |
| P2SH | 5 | 196 |
| Secret Key | 213 | 239 |
| BIP32 Public | `0x0488B21E` | `0x043587CF` |
| BIP32 Private | `0x0488ADE4` | `0x04358394` |

## Genesis Block

### Mainnet Genesis

| Parameter | Value |
|-----------|-------|
| Timestamp | 1405274442 (July 13, 2014 12:00:42 UTC) |
| Message | "13/July/2014, with memory of the past, we look to the future. TDR" |
| Hash | `0xc1fb746e87e89ae75bdec2ef0639a1f6786744639ce3d0ece1dcf979b79137cb` |
| Merkle Root | `0xd4715adf41222fae3d4bf41af30c675bc27228233d0f3cfd4ae0ae1d3e760ba8` |
| nBits | `0x1d00ffff` |
| nNonce | 14385103 |
| Subsidy | 20 MARKS |

### Genesis Block (Hex)

```
01000000
0000000000000000000000000000000000000000000000000000000000000000
d4715adf41222fae3d4bf41af30c675bc27228233d0f3cfd4ae0ae1d3e760ba8
ea594c53
ffff001d
af0fb300
```

## Consensus Parameters

### Block Timing

| Parameter | Value | Description |
|-----------|-------|-------------|
| Target Block Time | 120 sec | 2 minutes |
| Per-Algo Target | 960 sec | 16 minutes |
| DGW Window | 25 blocks | Per algorithm |
| Max Time Future | 7200 sec | 2 hours |

### Proof of Work

| Parameter | Value |
|-----------|-------|
| PoW Limit (mainnet) | 2^224 - 1 |
| PoW Limit (testnet) | 2^248 - 1 |
| Algorithm Count | 8 |

### Block Size

| Parameter | Value |
|-----------|-------|
| Max Block Size | 1,000,000 bytes |
| Max Block Weight | 4,000,000 |
| Max Sigops | 80,000 |

### Transaction

| Parameter | Value |
|-----------|-------|
| Max Tx Size | 100,000 bytes |
| Min Relay Fee | 1,000 satoshis/kB |
| Dust Threshold | 546 satoshis |

## Fork Parameters

### mPoW Fork (Block 450,947)

| Parameter | Value |
|-----------|-------|
| Activation Block | 450,947 |
| Activation Method | 75% supermajority |
| Minimum Version | 4 |

### Block Version Flags

| Flag | Bit | Value |
|------|-----|-------|
| AUXPOW | 8 | `0x100` |
| ALGO (mask) | 9-11 | `0xE00` |
| UPDATE_SSF | 12 | `0x1000` |
| VARIANT | 13 | `0x2000` |
| VARIANT2 | 14 | `0x4000` |
| CHAIN_ID | 16+ | `0x10000+` |

### Chain ID

| Parameter | Value |
|-----------|-------|
| Bitmark Chain ID | 91 (`0x5B`) |
| Strict Chain ID | true |

## Algorithm Weights

| ID | Algorithm | Weight |
|----|-----------|--------|
| 0 | SCRYPT | 8,000 |
| 1 | SHA256D | 1 |
| 2 | YESCRYPT | 800,000 |
| 3 | ARGON2D | 4,000,000 |
| 4 | X17 | 8,000 |
| 5 | LYRA2REv2 | 8,000 |
| 6 | EQUIHASH | 8,000,000 |
| 7 | CRYPTONIGHT | 8,000,000 |

## Monetary Parameters

### Supply

| Parameter | Value |
|-----------|-------|
| Maximum Supply | 27,579,894.73108 MARKS |
| Satoshis | 2,757,989,473,108,000 |
| Decimals | 8 |

### Emission

| Parameter | Value |
|-----------|-------|
| Initial Reward | 20 MARKS |
| Per-Algo Reward | 2.5 MARKS |
| First Halving | 788,000 blocks |
| First Quartering | 394,000 blocks |

## Difficulty Parameters

### DGWv3

| Parameter | Value |
|-----------|-------|
| Timespan | 960 seconds |
| Window | 25 blocks |
| Min Adjustment | 1/3 |
| Max Adjustment | 3x |

### Surge Protector

| Parameter | Value |
|-----------|-------|
| Trigger | 9 consecutive blocks |
| Action | Divide by 3 |

### Resurrector

| Parameter | Value |
|-----------|-------|
| Trigger | 9,600 seconds (160 min) |
| Action | Proportional reduction |

## Script Parameters

### Standard Scripts

| Type | Supported |
|------|-----------|
| P2PKH | Yes |
| P2SH | Yes |
| P2WPKH | No (legacy) |
| P2WSH | No (legacy) |
| OP_RETURN | Yes |

### OP_RETURN

| Parameter | Value |
|-----------|-------|
| Max Size | 80 bytes |
| MRK Size | 37 bytes |

## Network Seeds

### DNS Seeds (Mainnet)

```
seed.bitmark.co
dnsseed.bitmark.io
```

### Hardcoded Nodes

See `chainparams.cpp` for current list of bootstrap nodes.

## Protocol Messages

### Message Header

| Field | Size | Description |
|-------|------|-------------|
| Magic | 4 bytes | Network identifier |
| Command | 12 bytes | Message type |
| Length | 4 bytes | Payload size |
| Checksum | 4 bytes | First 4 bytes of SHA256d(payload) |

### Message Types

| Command | Description |
|---------|-------------|
| `version` | Version exchange |
| `verack` | Version acknowledged |
| `addr` | Address announcement |
| `inv` | Inventory |
| `getdata` | Request data |
| `block` | Block data |
| `tx` | Transaction data |
| `getblocks` | Request block locator |
| `getheaders` | Request headers |
| `headers` | Block headers |
| `ping` | Keep-alive |
| `pong` | Keep-alive response |

## Equihash Parameters

| Parameter | Value |
|-----------|-------|
| N | 200 |
| K | 9 |
| Solution Size | ~1344 bytes |
| Nonce Size | 32 bytes |

## Configuration File

Default locations:
- **Linux**: `~/.bitmark/bitmark.conf`
- **macOS**: `~/Library/Application Support/Bitmark/bitmark.conf`
- **Windows**: `%APPDATA%\Bitmark\bitmark.conf`

### Required Settings

```ini
rpcuser=<username>
rpcpassword=<password>
```

### Common Settings

```ini
# Network
listen=1
server=1
daemon=1
port=9265

# RPC
rpcport=9266
rpcallowip=127.0.0.1

# Testnet
testnet=0

# Mining
gen=0

# Index
txindex=1
```

## Data Directory Structure

```
~/.bitmark/
├── bitmark.conf
├── blocks/
│   ├── blk00000.dat
│   ├── blk00001.dat
│   └── rev00000.dat
├── chainstate/
├── database/
├── debug.log
├── peers.dat
├── wallet.dat
└── .lock
```

## See Also

- [Technical Overview](/technical/overview) - Architecture overview
- [Installation Guide](/getting-started/installation) - Setup instructions
- [RPC API Reference](/reference/rpc-api) - RPC documentation
