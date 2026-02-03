---
sidebar_position: 2
title: Quick Start
description: Get up and running with Bitmark in minutes
---

# Quick Start Guide

Get started with Bitmark in just a few steps.

## Option 1: Desktop Wallet (Recommended)

For full network participation, run the core Bitmark wallet.

### Download

Get the latest release from [GitHub Releases](https://github.com/project-bitmark/bitmark/releases).

Current version: **v0.9.7.4** (compatible with Ubuntu 18-22 and newer TLS/SSL libraries)

### Quick Setup

```bash
# Download and extract (Linux example)
wget https://github.com/project-bitmark/bitmark/releases/download/v0.9.7.4/bitmark-0.9.7.4-linux64.tar.gz
tar -xzf bitmark-0.9.7.4-linux64.tar.gz
cd bitmark-0.9.7.4

# Create config file
mkdir -p ~/.bitmark
cat > ~/.bitmark/bitmark.conf << EOF
rpcuser=bitmarkrpc
rpcpassword=$(openssl rand -hex 32)
listen=1
EOF

# Start the daemon
./bitmarkd
```

### Verify Installation

```bash
# Check if node is running
./bitmark-cli getinfo

# Check synchronization status
./bitmark-cli getblockchaininfo
```

## Option 2: Light Wallet (Coming Soon)

:::info Work in Progress
The Electrum-Bitmark light wallet is currently under development. Check [GitHub](https://github.com/project-bitmark/electrum-bitmark) for progress and updates.
:::

Once released, this will be the easiest way to use Bitmark without downloading the full blockchain.

## Option 3: Web Wallet

For quick access without installation, use the [Brain Wallet](https://project-bitmark.github.io/brain/).

:::warning
Brain wallets require you to remember your passphrase. Use a strong, unique passphrase and consider using a hardware-generated wallet for significant funds.
:::

## Receiving Bitmark

1. Open your wallet
2. Go to the "Receive" tab or section
3. Copy your address (starts with `b` on mainnet)
4. Share this address to receive MARKS

Bitmark addresses look like: `bKxE7vRhRPMsdafasdfasdfMk9sdKk`

## Sending Bitmark

1. Open your wallet
2. Go to the "Send" tab
3. Enter the recipient's address
4. Enter the amount in MARKS
5. Confirm the transaction

Transaction fees are typically very low (around 0.001 MARKS).

## Block Explorers

View transactions and blocks:

- [Chainz Explorer](https://chainz.cryptoid.info/marks/)

## What's Next?

Now that you have a wallet set up:

- [Learn about Core Concepts](/getting-started/core-concepts)
- [Explore the Marking System](/marking/vision)
- [Set up Mining](/ecosystem/mining)
- [Use the API](/ecosystem/api)

## Need Help?

- Check the [FAQ](/reference/faq)
- Visit [Reddit r/Bitmark](https://reddit.com/r/Bitmark)
- Browse [GitHub Issues](https://github.com/project-bitmark/bitmark/issues)
