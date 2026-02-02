---
sidebar_position: 3
title: Installation
description: Detailed installation instructions for Bitmark software
---

# Installation Guide

This guide covers installing Bitmark Core from source or pre-built binaries.

## Prerequisites

### Required Dependencies

#### Ubuntu/Debian

```bash
sudo apt-get update
sudo apt-get install -y \
  build-essential \
  libtool \
  autotools-dev \
  automake \
  pkg-config \
  libssl-dev \
  libevent-dev \
  bsdmainutils \
  python3 \
  libboost-all-dev \
  libsodium-dev
```

#### libsodium (Required for v0.9.7+)

The multi-algorithm PoW version requires libsodium:

```bash
# Ubuntu 16+ can use apt
sudo apt-get install libsodium-dev

# Or compile from source
git clone git://github.com/jedisct1/libsodium.git
cd libsodium
./autogen.sh
./configure && make check
sudo make install
sudo ldconfig
```

## Installing from Pre-built Binaries

### Download

Get the latest release from [GitHub](https://github.com/project-bitmark/bitmark/releases).

```bash
# Linux 64-bit
wget https://github.com/project-bitmark/bitmark/releases/latest/download/bitmark-linux64.tar.gz
tar -xzf bitmark-linux64.tar.gz
```

### Install

```bash
# System-wide installation
sudo install -m 0755 bitmarkd /usr/local/bin/
sudo install -m 0755 bitmark-cli /usr/local/bin/
sudo install -m 0755 bitmark-qt /usr/local/bin/

# Or use from local directory
./bitmarkd
```

## Building from Source

### Clone Repository

```bash
git clone https://github.com/project-bitmark/bitmark.git
cd bitmark
```

### Build (Linux/Unix)

```bash
./autogen.sh
./configure
make -j$(nproc)
```

### Build Options

```bash
# Without GUI (daemon only)
./configure --without-gui

# With specific optimizations
./configure CXXFLAGS="-O2"

# Debug build
./configure --enable-debug
```

### Install

```bash
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
# RPC Settings
rpcuser=bitmarkrpc
rpcpassword=YourSecretPassword

# Network
listen=1
server=1

# Optional: Run in background
daemon=1

# Optional: Specify data directory
# datadir=/path/to/data

# Optional: Testnet mode
# testnet=1
```

### Important Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `rpcuser` | RPC username | (required) |
| `rpcpassword` | RPC password | (required) |
| `listen` | Accept connections | 1 |
| `server` | Enable RPC server | 1 |
| `daemon` | Run in background | 0 |
| `testnet` | Use testnet | 0 |
| `rpcport` | RPC port | 9266 (19266 testnet) |
| `port` | P2P port | 9265 (19265 testnet) |

## Running Bitmark

### Start Daemon

```bash
# Foreground
bitmarkd

# Background
bitmarkd -daemon

# Or if daemon=1 in config
bitmarkd
```

### Check Status

```bash
# Get blockchain info
bitmark-cli getblockchaininfo

# Get network info
bitmark-cli getnetworkinfo

# Get wallet info
bitmark-cli getwalletinfo
```

### Stop Daemon

```bash
bitmark-cli stop
```

## GUI Wallet

### Start Qt Wallet

```bash
bitmark-qt
```

The Qt wallet includes a graphical interface for:
- Sending and receiving
- Transaction history
- Address book
- Console for RPC commands

## Verifying Installation

### Check Version

```bash
bitmarkd --version
# Bitmark Core Daemon version v0.9.7.x
```

### Check Sync Progress

```bash
bitmark-cli getblockchaininfo | grep -E "blocks|headers|verificationprogress"
```

### Check Connections

```bash
bitmark-cli getconnectioncount
```

## Troubleshooting

### Common Issues

**"Cannot find libsodium"**
```bash
sudo ldconfig
# Or specify path
export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH
```

**"RPC connection refused"**
- Check that `rpcuser` and `rpcpassword` are set in config
- Ensure daemon is running: `bitmark-cli getinfo`

**"Block database corrupted"**
```bash
bitmarkd -reindex
```

### Log Files

Check logs at `~/.bitmark/debug.log`:

```bash
tail -f ~/.bitmark/debug.log
```

## Next Steps

- [Configure for Mining](/ecosystem/mining)
- [Set up API Access](/ecosystem/api)
- [Run on Testnet](/guides/running-node#testnet)
