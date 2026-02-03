---
sidebar_position: 1
title: Wallets
description: Bitmark wallet options and setup guides
---

# Wallets

Multiple wallet options are available for storing and managing Bitmark.

```mermaid
flowchart TB
    subgraph wallets["💼 BITMARK WALLET OPTIONS"]
        direction LR
        A["🖥️ **Bitmark Core**<br/>Full Node Wallet<br/><small>✅ Recommended</small>"]
        B["⚡ **Electrum**<br/>Light Wallet<br/><small>🚧 Coming Soon</small>"]
        C["🔑 **Brain Wallet**<br/>Key Generator<br/><small>⚠️ Advanced</small>"]
    end

    style wallets fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style A fill:#dcfce7,stroke:#22c55e,stroke-width:2px
    style B fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style C fill:#fee2e2,stroke:#ef4444,stroke-width:2px
```

## Wallet Comparison

| Wallet | Type | Status | Features |
|--------|------|--------|----------|
| Bitmark Core | Full Node | ✅ **Recommended** | Full validation, mining, sending/receiving |
| Electrum-Bitmark | Light Wallet | 🚧 **Coming Soon** | Fast sync, hardware wallet (WIP) |
| Brain Wallet | Key Generator | ⚠️ **Advanced Only** | Address generation only, no sending |

## Bitmark Core (Desktop)

:::tip Recommended
This is the recommended wallet for full network participation. It validates all transactions and supports mining.
:::

The official full-node wallet that downloads and validates the entire blockchain.

```mermaid
flowchart TB
    subgraph core["🖥️ BITMARK CORE FEATURES"]
        direction TB
        subgraph row1[" "]
            direction LR
            F1["⛓️ **Full Validation**<br/>Verify all transactions"]
            F2["⛏️ **Mining Support**<br/>Built-in miner"]
            F3["🔌 **RPC Interface**<br/>Developer API"]
        end
        subgraph row2[" "]
            direction LR
            F4["🖼️ **Qt GUI**<br/>Desktop interface"]
            F5["🎛️ **Coin Control**<br/>UTXO management"]
            F6["📖 **Address Book**<br/>Contact management"]
        end
    end

    style core fill:#dcfce7,stroke:#22c55e,stroke-width:2px
    style row1 fill:transparent,stroke:none
    style row2 fill:transparent,stroke:none
    style F1 fill:#f0fdf4,stroke:#22c55e
    style F2 fill:#f0fdf4,stroke:#22c55e
    style F3 fill:#f0fdf4,stroke:#22c55e
    style F4 fill:#f0fdf4,stroke:#22c55e
    style F5 fill:#f0fdf4,stroke:#22c55e
    style F6 fill:#f0fdf4,stroke:#22c55e
```

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

:::info Work in Progress
The Electrum-Bitmark light wallet is currently under development. Check [GitHub](https://github.com/project-bitmark/electrum-bitmark) for progress and updates.
:::

A lightweight wallet that won't require downloading the full blockchain.

```mermaid
flowchart LR
    subgraph status["🚧 DEVELOPMENT STATUS"]
        direction TB
        S1["📦 Core Port"] --> S2["🔌 ElectrumX Server"]
        S2 --> S3["🧪 Testing"]
        S3 --> S4["🚀 Release"]
    end

    style status fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style S1 fill:#dcfce7,stroke:#22c55e
    style S2 fill:#fef3c7,stroke:#f59e0b
    style S3 fill:#fee2e2,stroke:#ef4444
    style S4 fill:#fee2e2,stroke:#ef4444
```

### Planned Features

- Fast synchronization (seconds, not hours)
- Hardware wallet support (Trezor, Ledger)
- Multi-signature support
- Cold storage
- Portable (no blockchain download)
- Watch-only wallets

### Repository

Follow development: [GitHub](https://github.com/project-bitmark/electrum-bitmark)

## Brain Wallet (Key Generation Tool)

:::caution Not a Full Wallet
This is a **key/address generation utility only**. It cannot send transactions, check balances, or interact with the blockchain. Use the Desktop Wallet for full functionality.
:::

A web-based tool for generating Bitmark addresses and private keys from a passphrase.

**URL**: [project-bitmark.github.io/brain](https://project-bitmark.github.io/brain/)

```mermaid
flowchart LR
    subgraph brain["🔑 BRAIN WALLET CAPABILITIES"]
        direction TB
        subgraph can["✅ CAN DO"]
            C1["Generate addresses"]
            C2["Derive private keys"]
            C3["Create QR codes"]
            C4["Work offline"]
        end
        subgraph cannot["❌ CANNOT DO"]
            N1["Send transactions"]
            N2["Check balances"]
            N3["Receive notifications"]
            N4["Sign transactions"]
        end
    end

    style brain fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style can fill:#dcfce7,stroke:#22c55e
    style cannot fill:#fee2e2,stroke:#ef4444
    style C1 fill:#f0fdf4,stroke:#22c55e
    style C2 fill:#f0fdf4,stroke:#22c55e
    style C3 fill:#f0fdf4,stroke:#22c55e
    style C4 fill:#f0fdf4,stroke:#22c55e
    style N1 fill:#fef2f2,stroke:#ef4444
    style N2 fill:#fef2f2,stroke:#ef4444
    style N3 fill:#fef2f2,stroke:#ef4444
    style N4 fill:#fef2f2,stroke:#ef4444
```

### Use Cases

This tool is useful for:
- Generating receive addresses offline
- Deriving keys from a memorable passphrase
- Creating paper wallet addresses
- Advanced users who manage keys separately

### Security Warning

:::warning Strong Passphrase Required
Brain wallets derive keys from your passphrase. Weak passphrases can be cracked! Use only with very strong, unique passphrases (20+ characters with numbers and symbols).
:::

### Best Practices

1. Use a long, unique passphrase (20+ characters)
2. Include numbers and special characters
3. Never use dictionary words or common phrases
4. Store the passphrase securely (password manager)
5. Test recovery before depositing funds
6. **Use Desktop Wallet to actually send/receive funds**

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

```mermaid
flowchart LR
    subgraph security["🛡️ SECURITY BEST PRACTICES"]
        direction TB
        subgraph row1[" "]
            direction LR
            S1["💾 **Backup**<br/>Before transactions"]
            S2["🔐 **Encrypt**<br/>Strong passwords"]
            S3["✅ **Verify**<br/>Double-check addresses"]
        end
        subgraph row2[" "]
            direction LR
            S4["🧪 **Test**<br/>Small amounts first"]
            S5["🔄 **Update**<br/>Security patches"]
            S6["❄️ **Cold Storage**<br/>Long-term holdings"]
        end
    end

    style security fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style row1 fill:transparent,stroke:none
    style row2 fill:transparent,stroke:none
    style S1 fill:#ede9fe,stroke:#8b5cf6
    style S2 fill:#ede9fe,stroke:#8b5cf6
    style S3 fill:#ede9fe,stroke:#8b5cf6
    style S4 fill:#ede9fe,stroke:#8b5cf6
    style S5 fill:#ede9fe,stroke:#8b5cf6
    style S6 fill:#ede9fe,stroke:#8b5cf6
```

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
