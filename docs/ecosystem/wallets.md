---
sidebar_position: 1
title: Wallets
description: Bitmark wallet options and setup guides
---

# Wallets

Multiple wallet options are available for storing and managing Bitmark.

## Wallet Comparison

| Wallet | Type | Platforms | Features |
|--------|------|-----------|----------|
| Bitmark Core | Full Node | Windows, Linux, macOS | Full validation, mining |
| Electrum-Bitmark | Light | Windows, Linux, macOS | Fast sync, hardware wallet |
| Brain Wallet | Web | Browser | Quick access, portable |

## Bitmark Core (Desktop)

The official full-node wallet that downloads and validates the entire blockchain.

### Features

- Full blockchain validation
- Built-in mining support
- RPC interface for developers
- Qt GUI and command-line interfaces
- Coin control features
- Address book

### Download

Get the latest release from [GitHub](https://github.com/project-bitmark/bitmark/releases).

**Current version**: v0.9.7.4

### System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Storage | 5 GB | 10 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 cores | 4 cores |
| Network | Broadband | Broadband |

### Quick Start

```bash
# Download (Linux 64-bit example)
wget https://github.com/project-bitmark/bitmark/releases/latest/download/bitmark-linux64.tar.gz
tar -xzf bitmark-linux64.tar.gz

# Configure
mkdir -p ~/.bitmark
cat > ~/.bitmark/bitmark.conf << EOF
rpcuser=bitmarkrpc
rpcpassword=$(openssl rand -hex 32)
EOF

# Start GUI
./bitmark-qt

# Or start daemon
./bitmarkd -daemon
```

### Command Line

```bash
# Check balance
bitmark-cli getbalance

# Get new address
bitmark-cli getnewaddress

# Send coins
bitmark-cli sendtoaddress <address> <amount>

# List transactions
bitmark-cli listtransactions
```

## Electrum-Bitmark (Light Wallet)

A lightweight wallet that doesn't require downloading the full blockchain.

### Features

- Fast synchronization (seconds, not hours)
- Hardware wallet support (Trezor, Ledger)
- Multi-signature support
- Cold storage
- Portable (no blockchain download)
- Watch-only wallets

### Download

Get the latest release from [GitHub](https://github.com/project-bitmark/electrum-bitmark/releases).

### Quick Start

1. Download and install
2. Create a new wallet or restore from seed
3. Wallet syncs automatically via ElectrumX servers

### Security Features

- **Seed phrase**: 12-word recovery phrase
- **Encryption**: Password-protected wallet files
- **Two-factor**: Hardware wallet integration
- **Verification**: SPV verification of transactions

### Connecting to Servers

Default servers are configured. To add custom servers:

```
Tools → Network → Server
```

## Brain Wallet (Web)

A web-based wallet for quick access without installation.

**URL**: [project-bitmark.github.io/brain](https://project-bitmark.github.io/brain/)

### Features

- No installation required
- Generate addresses from passphrases
- Offline capable (save the page)
- Transaction signing
- QR code generation

### Security Warning

:::warning
Brain wallets require you to remember a strong passphrase. Weak passphrases can be cracked! Use only for small amounts or with very strong, unique passphrases.
:::

### Best Practices

1. Use a long, unique passphrase (20+ characters)
2. Include numbers and special characters
3. Never use dictionary words or common phrases
4. Store the passphrase securely (password manager)
5. Test recovery before depositing funds

## Paper Wallet

Generate offline paper wallets for cold storage.

**Repository**: [project-bitmark/paper-wallet](https://github.com/project-bitmark/paper-wallet)

### Features

- Generate offline
- Print and store securely
- BIP38 encryption option
- Tamper-evident design

### Best Practices

1. Generate on an air-gapped computer
2. Print on a non-networked printer
3. Store in multiple secure locations
4. Consider BIP38 encryption
5. Laminate to protect from damage

## Wallet Backup

### Core Wallet

```bash
# Backup wallet file
cp ~/.bitmark/wallet.dat ~/backup/wallet.dat.backup

# Or via RPC
bitmark-cli backupwallet /path/to/backup.dat
```

### Electrum Wallet

1. **Seed phrase**: Write down and store securely
2. **Wallet file**: `~/.electrum-bitmark/wallets/`

### Recovery

**From seed phrase**:
- Electrum: File → New/Restore → Standard wallet → I have a seed

**From wallet.dat**:
- Replace `~/.bitmark/wallet.dat` with backup
- Restart wallet

## Address Types

| Type | Prefix | Example |
|------|--------|---------|
| Mainnet P2PKH | `b` | `bKxE7vRhRPMs...` |
| Testnet P2PKH | `u` | `uJk3FpRmNxQs...` |

## Security Tips

1. **Backup regularly**: Before major transactions
2. **Encrypt wallet**: Use strong passwords
3. **Verify addresses**: Double-check before sending
4. **Test small amounts**: Before large transfers
5. **Keep software updated**: Security patches
6. **Use cold storage**: For long-term holdings

## Troubleshooting

### "Wallet locked"

```bash
# Unlock for sending
bitmark-cli walletpassphrase <passphrase> 60
```

### "Not enough funds"

Check:
- Confirmed balance vs. total balance
- Transaction fees included
- Unconfirmed inputs

### Sync issues

```bash
# Rescan blockchain
bitmark-cli rescanblockchain

# Or restart with -rescan
bitmarkd -rescan
```

## See Also

- [Quick Start Guide](/getting-started/quick-start)
- [Wallet Setup Guide](/guides/wallet-setup)
- [Security Best Practices](/guides/security)
