---
sidebar_position: 2
title: Wallet Setup
description: Complete guide to setting up Bitmark wallets
---

# Wallet Setup Guide

Detailed guide for setting up and securing Bitmark wallets.

## Choosing a Wallet

| Wallet | Best For | Security | Convenience |
|--------|----------|----------|-------------|
| Bitmark Core | Full validation, mining | High | Medium |
| Electrum-Bitmark | Daily use, hardware wallets | High | High |
| Brain Wallet | Quick access, small amounts | Medium | High |
| Paper Wallet | Cold storage | Very High | Low |

## Bitmark Core Wallet

### Installation

1. Download from [GitHub Releases](https://github.com/project-bitmark/bitmark/releases)
2. Extract the archive
3. Run `bitmark-qt` (GUI) or `bitmarkd` (daemon)

### First Run

1. Wallet creates automatically on first start
2. Wait for blockchain sync (can take hours)
3. Your wallet is ready when sync completes

### Encrypting Your Wallet

**GUI**: Settings → Encrypt Wallet

**CLI**:
```bash
bitmark-cli encryptwallet "your-strong-passphrase"
```

:::warning
Write down your passphrase! If lost, your funds are **permanently inaccessible**.
:::

### Backup

**GUI**: File → Backup Wallet

**CLI**:
```bash
bitmark-cli backupwallet "/path/to/backup/wallet.dat"
```

**Best practices**:
- Backup after creating new addresses
- Store copies in multiple secure locations
- Test restoration before depositing large amounts

### Receiving Coins

1. Go to "Receive" tab
2. Click "Request payment" (creates new address)
3. Share the address with sender

### Sending Coins

1. Go to "Send" tab
2. Enter recipient address
3. Enter amount
4. Unlock wallet if encrypted:
   ```bash
   bitmark-cli walletpassphrase "passphrase" 60
   ```
5. Click Send

## Electrum-Bitmark Wallet

### Installation

1. Download from [GitHub](https://github.com/project-bitmark/electrum-bitmark/releases)
2. Verify the signature (recommended)
3. Install and run

### Creating New Wallet

1. Launch Electrum-Bitmark
2. Choose "Create new wallet"
3. Select "Standard wallet"
4. Choose "Create new seed"
5. **Write down the 12-word seed phrase**
6. Verify seed by re-entering
7. Set optional password

### Seed Phrase Security

Your 12-word seed phrase can restore your entire wallet:

```
word1 word2 word3 word4 word5 word6
word7 word8 word9 word10 word11 word12
```

**DO**:
- Write it on paper (not digital)
- Store in multiple secure locations
- Consider a fireproof safe
- Use a metal backup for fire/water resistance

**DON'T**:
- Store in cloud services
- Take photos of it
- Email it to yourself
- Share with anyone

### Restoring from Seed

1. Launch Electrum-Bitmark
2. Choose "Restore wallet"
3. Enter your 12 words
4. Wallet recreates all addresses and history

### Hardware Wallet Setup

Electrum-Bitmark supports Trezor and Ledger:

1. Connect hardware wallet
2. Create new wallet in Electrum
3. Select "Hardware wallet"
4. Follow device prompts
5. Never enter seed on computer

## Brain Wallet

### When to Use

- Small amounts only
- Temporary storage
- When you need quick access

### Setup

1. Visit [Brain Wallet](https://project-bitmark.github.io/brain/)
2. Enter a **very strong** passphrase
3. Wallet generates address and private key
4. Save or memorize your passphrase

### Passphrase Requirements

**Minimum**:
- 20+ characters
- Mix of letters, numbers, symbols
- Not based on dictionary words

**Better**:
- Use a passphrase generator
- 6+ random words (diceware)
- Example: `correct-horse-battery-staple-xylophone-pyramid`

### Risks

- Weak passphrases can be cracked
- Passphrase = access (no second factor)
- If forgotten, funds are lost forever

## Paper Wallet

### When to Use

- Long-term cold storage
- Large amounts
- Inheritance planning

### Generation

1. Download paper wallet generator
2. **Disconnect from internet**
3. Generate wallet offline
4. Print on a non-networked printer
5. Delete all files when done

### Security Features

- BIP38 encryption (optional)
- Tamper-evident design
- Multiple copies in different locations

### Spending from Paper Wallet

1. Import private key into software wallet
2. Send desired amount
3. **Send remaining balance to new address**
4. Paper wallet is now "spent" - don't reuse

## Security Best Practices

### General

- [ ] Use unique, strong passwords
- [ ] Enable encryption on all wallets
- [ ] Keep software updated
- [ ] Backup regularly
- [ ] Test backups periodically

### Operational Security

- [ ] Verify addresses before sending
- [ ] Start with small test transactions
- [ ] Use new addresses for each receive
- [ ] Don't share exact balances publicly

### Cold Storage (Large Amounts)

- [ ] Generate keys offline
- [ ] Use hardware wallet or paper wallet
- [ ] Store backups in multiple locations
- [ ] Consider multi-signature setup

### Hot Wallet (Daily Use)

- [ ] Keep minimal balance
- [ ] Encrypt wallet file
- [ ] Regular backups
- [ ] Use phone 2FA if available

## Recovery Scenarios

### Lost Password (Encrypted Wallet)

- **With backup seed**: Restore from seed
- **Without seed**: Funds are lost (try password recovery tools)

### Lost Wallet File

- **With seed**: Create new wallet, restore from seed
- **With wallet.dat backup**: Restore the file
- **Neither**: Funds are lost

### Corrupted Blockchain

```bash
bitmarkd -reindex
# Or restore from clean bootstrap
```

### Hardware Failure

- Restore from backup seed or wallet.dat
- This is why backups are critical

## See Also

- [Wallets Overview](/ecosystem/wallets) - All wallet options
- [Security Guide](/guides/security) - Advanced security
- [Quick Start](/getting-started/quick-start) - Getting started
