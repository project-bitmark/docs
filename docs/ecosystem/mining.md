---
sidebar_position: 3
title: Mining
description: Guide to mining Bitmark with various algorithms and hardware
---

# Mining Bitmark

Bitmark can be mined using eight different algorithms, accommodating various types of hardware.

## Overview

| Algorithm | Best Hardware | Difficulty |
|-----------|---------------|------------|
| SCRYPT | ASIC/GPU | Moderate |
| SHA256D | ASIC | High |
| YESCRYPT | CPU/GPU | Low |
| ARGON2D | CPU | Low |
| X17 | GPU | Moderate |
| LYRA2REv2 | GPU | Moderate |
| EQUIHASH | GPU/ASIC | Moderate |
| CRYPTONIGHT | CPU/GPU | Low |

## Getting Started

### 1. Set Up Bitmark Node

```bash
# Install bitmarkd
# See installation guide for full instructions

# Configure for mining
cat >> ~/.bitmark/bitmark.conf << EOF
server=1
rpcuser=bitmarkrpc
rpcpassword=YourSecretPassword
EOF

# Start node
bitmarkd -daemon
```

### 2. Choose Mining Method

**Option A**: Built-in miner (easiest)
```bash
bitmark-cli setgenerate true 4  # 4 CPU threads
```

**Option B**: External miner (more efficient)
```bash
cpuminer -a <algo> -o http://localhost:9266 -u bitmarkrpc -p YourSecretPassword
```

## Built-in Mining

### Start Mining

```bash
# Set algorithm (0-7)
bitmark-cli setminingalgo 3  # 3 = Argon2d

# Start mining
bitmark-cli setgenerate true <threads>

# Check status
bitmark-cli getmininginfo
```

### Algorithm Numbers

| Number | Algorithm |
|--------|-----------|
| 0 | SCRYPT |
| 1 | SHA256D |
| 2 | YESCRYPT |
| 3 | ARGON2D |
| 4 | X17 |
| 5 | LYRA2REv2 |
| 6 | EQUIHASH |
| 7 | CRYPTONIGHT |

### Stop Mining

```bash
bitmark-cli setgenerate false
```

## CPU Mining

CPU-friendly algorithms: **YESCRYPT**, **ARGON2D**, **CRYPTONIGHT**

### cpuminer-multi

```bash
# Clone and build
git clone https://github.com/piratelinux/cpuminer-multi.git
cd cpuminer-multi
./autogen.sh
./configure
make

# Mine Argon2d
./cpuminer -a ar2 -o http://localhost:9266 -u bitmarkrpc -p password

# Mine Yescrypt
./cpuminer -a yescrypt -o http://localhost:9266 -u bitmarkrpc -p password

# Mine CryptoNight
./cpuminer -a cryptonight -o http://localhost:9266 -u bitmarkrpc -p password
```

### CPU Mining Tips

1. Start with fewer threads than CPU cores (leave 1-2 for system)
2. Monitor temperature
3. Argon2d and Yescrypt are most CPU-efficient
4. CryptoNight uses more memory

## GPU Mining

GPU-friendly algorithms: **SCRYPT**, **X17**, **LYRA2REv2**, **EQUIHASH**

### For NVIDIA (CCMiner)

```bash
# Scrypt
ccminer -a scrypt -o http://localhost:9266 -u user -p pass

# X17
ccminer -a x17 -o http://localhost:9266 -u user -p pass

# Lyra2REv2
ccminer -a lyra2v2 -o http://localhost:9266 -u user -p pass

# Equihash
ccminer -a equihash -o http://localhost:9266 -u user -p pass
```

### For AMD (SGMiner)

```bash
# Scrypt
sgminer -k scrypt -o http://localhost:9266 -u user -p pass

# Equihash
sgminer -k equihash -o http://localhost:9266 -u user -p pass
```

### GPU Mining Tips

1. Keep GPU temperature below 80°C
2. Start with stock clocks, then tune
3. Monitor for rejected shares
4. Use proper cooling

## ASIC Mining

ASIC-compatible algorithms: **SCRYPT**, **SHA256D**

### Scrypt ASICs

Compatible miners:
- Antminer L3/L3+
- Innosilicon A4/A6
- Various older Scrypt ASICs

### SHA256D ASICs

Compatible miners:
- Any Bitcoin ASIC (Antminer S series, etc.)
- Can merge-mine with Bitcoin

### Configuration

Most ASICs use stratum protocol. Point to a pool that supports Bitmark, or use stratum proxy for solo mining.

## Pool Mining

### Finding Pools

Check community channels for current active pools.

### Pool Configuration

```
stratum+tcp://pool.example.com:3333
Username: <your_address>
Password: x or c=BTM
```

### Pool Payouts

- **PPS**: Pay Per Share (immediate, fixed rate)
- **PPLNS**: Pay Per Last N Shares (variance, better long-term)
- **PROP**: Proportional (simple, per-round)

## Solo Mining

Mining directly to your own wallet.

### Advantages

- Full block reward when you find a block
- No pool fees
- Privacy

### Disadvantages

- High variance (irregular payouts)
- May wait long time between blocks
- Requires running full node

### Setup

```bash
# bitmark.conf
server=1
rpcuser=bitmarkrpc
rpcpassword=yourpassword

# Mining address
bitmark-cli getnewaddress "mining"
# Use this address in your miner
```

## Merge Mining

Mine Bitmark simultaneously with other compatible chains.

### How It Works

1. Mine on parent chain (Bitcoin, Litecoin, etc.)
2. Include Bitmark block commitment in coinbase
3. Submit valid proof to both chains
4. Earn rewards from both

### Requirements

- Pool that supports Bitmark merge mining
- Or run merge mining software yourself

### Compatible Chains

| Parent Chain | Bitmark Algorithm |
|--------------|-------------------|
| Bitcoin | SHA256D |
| Litecoin | SCRYPT |
| Vertcoin | LYRA2REv2 |
| Zcash | EQUIHASH |

## Profitability

### Factors

1. **Hardware**: Cost and efficiency
2. **Electricity**: $/kWh in your area
3. **Difficulty**: Current network difficulty
4. **BTM Price**: Market value
5. **Algorithm**: Different difficulties per algo

### Calculation

```
Daily Revenue = (Your Hashrate / Network Hashrate) × Daily Block Rewards
Daily Profit = Daily Revenue × BTM Price - Electricity Cost
```

### Tips

1. Start with CPU mining (no extra cost)
2. Compare algorithm profitability
3. Consider merge mining for extra revenue
4. Join pools for consistent income

## Monitoring

### Node Status

```bash
# Mining info
bitmark-cli getmininginfo

# Network hashrate
bitmark-cli getnetworkhashps

# Difficulty
bitmark-cli getdifficulty
```

### Common Issues

**"Method not found"**
- Ensure server=1 in config
- Check RPC credentials

**Low hashrate**
- Verify algorithm selection
- Check for thermal throttling
- Try different algorithms

**No blocks found**
- Normal for solo mining
- Check connection to node
- Verify correct algorithm

## See Also

- [Multi-Algorithm PoW](/technical/multi-algo) - Algorithm details
- [Difficulty Adjustment](/technical/difficulty-adjustment) - How difficulty works
- [Merge Mining](/technical/merge-mining) - Advanced mining
