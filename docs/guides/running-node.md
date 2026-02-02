---
sidebar_position: 1
title: Running a Node
description: Complete guide to running a Bitmark full node
---

# Running a Bitmark Node

This guide covers setting up and operating a Bitmark full node.

## Why Run a Node?

- **Verify transactions yourself** - Don't trust, verify
- **Support the network** - More nodes = more decentralization
- **Enable mining** - Required for solo mining
- **Run services** - APIs, explorers, wallets need nodes
- **Privacy** - No third-party sees your transactions

## Requirements

### Hardware

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 2 cores | 4+ cores |
| RAM | 2 GB | 4+ GB |
| Storage | 10 GB | 20+ GB SSD |
| Network | 1 Mbps | 10+ Mbps |

### Software

- Linux (Ubuntu 18.04+), Windows 10+, or macOS 10.14+
- libsodium library (required for v0.9.7+)

## Installation

### Ubuntu/Debian

```bash
# Install dependencies
sudo apt-get update
sudo apt-get install -y libsodium-dev libboost-all-dev

# Download latest release
wget https://github.com/project-bitmark/bitmark/releases/latest/download/bitmark-linux64.tar.gz
tar -xzf bitmark-linux64.tar.gz

# Install binaries
sudo install -m 0755 bitmarkd /usr/local/bin/
sudo install -m 0755 bitmark-cli /usr/local/bin/
```

### From Source

```bash
git clone https://github.com/project-bitmark/bitmark.git
cd bitmark
./autogen.sh
./configure
make -j$(nproc)
sudo make install
```

## Configuration

### Create Data Directory

```bash
mkdir -p ~/.bitmark
```

### Configuration File

Create `~/.bitmark/bitmark.conf`:

```ini
# Essential settings
rpcuser=bitmarkrpc
rpcpassword=CHANGE_THIS_TO_RANDOM_STRING

# Network
listen=1
server=1
maxconnections=125

# Optional: Run in background
daemon=1

# Optional: Full transaction index (for APIs)
txindex=1

# Optional: Reindex on start (first time only)
# reindex=1
```

### Generate Random Password

```bash
openssl rand -hex 32
```

## Running the Node

### Start

```bash
# Foreground (see logs)
bitmarkd

# Background (daemon mode)
bitmarkd -daemon
```

### Check Status

```bash
# Is it running?
bitmark-cli getblockchaininfo

# How many peers?
bitmark-cli getconnectioncount

# Sync progress
bitmark-cli getblockchaininfo | grep verificationprogress
```

### Stop

```bash
bitmark-cli stop
```

## Systemd Service (Linux)

Create `/etc/systemd/system/bitmarkd.service`:

```ini
[Unit]
Description=Bitmark Daemon
After=network.target

[Service]
Type=forking
User=bitmark
Group=bitmark
ExecStart=/usr/local/bin/bitmarkd -daemon -pid=/run/bitmarkd/bitmarkd.pid
ExecStop=/usr/local/bin/bitmark-cli stop
PIDFile=/run/bitmarkd/bitmarkd.pid
Restart=on-failure
TimeoutStopSec=60

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl enable bitmarkd
sudo systemctl start bitmarkd
sudo systemctl status bitmarkd
```

## Initial Sync

### What to Expect

- **Full sync**: Several hours to a day (depending on connection)
- **Disk usage**: ~5-10 GB
- **CPU usage**: High during verification

### Monitor Progress

```bash
# Watch sync progress
watch -n 10 'bitmark-cli getblockchaininfo | grep -E "blocks|headers|progress"'
```

### Speed Up Sync

```bash
# Use more connections
maxconnections=256

# Add known good peers
addnode=seed.bitmark.co
```

## Testnet

### Configuration

```ini
# In bitmark.conf
testnet=1
```

Or run with flag:

```bash
bitmarkd -testnet
```

### Data Location

- **Mainnet**: `~/.bitmark/`
- **Testnet**: `~/.bitmark/testnet3/`

## Maintenance

### Backup Wallet

```bash
bitmark-cli backupwallet /path/to/backup.dat
```

### Check Logs

```bash
tail -f ~/.bitmark/debug.log
```

### Update Software

```bash
bitmark-cli stop
# Download and install new version
bitmarkd
```

### Rescan Blockchain

```bash
bitmarkd -rescan
```

### Reindex (Rebuild Index)

```bash
bitmarkd -reindex
```

## Troubleshooting

### "Cannot obtain a lock"

Another instance is running:
```bash
pkill bitmarkd
rm ~/.bitmark/.lock
```

### "Connection refused"

Node not running or RPC misconfigured:
```bash
# Check if running
pgrep bitmarkd

# Verify config
cat ~/.bitmark/bitmark.conf
```

### "Sync stuck"

```bash
# Add more peers
bitmark-cli addnode "seed.bitmark.co" "onetry"

# Check peer count
bitmark-cli getconnectioncount
```

### "Out of memory"

Add to config:
```ini
dbcache=100
maxmempool=50
```

## Advanced Configuration

### Open Ports (Firewall)

```bash
# Allow P2P
sudo ufw allow 9265/tcp

# Allow RPC (local only recommended)
sudo ufw allow from 127.0.0.1 to any port 9266
```

### Tor Support

```ini
# In bitmark.conf
proxy=127.0.0.1:9050
listen=1
bind=127.0.0.1
onlynet=onion
```

### Pruning (Save Space)

```ini
# Keep only last 1000 blocks
prune=1000
```

:::warning
Pruning disables some RPC commands and prevents serving historical blocks to other nodes.
:::

## Monitoring

### Basic Stats

```bash
#!/bin/bash
echo "=== Bitmark Node Status ==="
echo "Blocks: $(bitmark-cli getblockcount)"
echo "Connections: $(bitmark-cli getconnectioncount)"
echo "Difficulty: $(bitmark-cli getdifficulty)"
```

### Memory Usage

```bash
ps aux | grep bitmarkd
```

### Disk Usage

```bash
du -sh ~/.bitmark/
```

## See Also

- [Installation Guide](/getting-started/installation) - Detailed installation
- [Mining Guide](/ecosystem/mining) - Set up mining
- [API Guide](/ecosystem/api) - Run API services
