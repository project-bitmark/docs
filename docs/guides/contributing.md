---
sidebar_position: 4
title: Contributing
description: How to contribute to Bitmark development
---

# Contributing to Bitmark

Thank you for your interest in contributing to Bitmark!

## Ways to Contribute

### Code

- Fix bugs
- Implement features
- Improve performance
- Write tests

### Documentation

- Fix typos
- Improve explanations
- Add examples
- Translate content

### Community

- Answer questions
- Report bugs
- Suggest features
- Spread the word

## Getting Started

### 1. Set Up Development Environment

```bash
# Clone the repository
git clone https://github.com/project-bitmark/bitmark.git
cd bitmark

# Install dependencies (Ubuntu)
sudo apt-get install -y \
  build-essential \
  libtool \
  autotools-dev \
  automake \
  pkg-config \
  libssl-dev \
  libevent-dev \
  bsdmainutils \
  libboost-all-dev \
  libsodium-dev

# Build
./autogen.sh
./configure
make -j$(nproc)

# Run tests
make check
```

### 2. Find Something to Work On

- Browse [open issues](https://github.com/project-bitmark/bitmark/issues)
- Look for `good first issue` labels
- Check the project roadmap
- Ask in community channels

### 3. Make Your Changes

```bash
# Create a branch
git checkout -b feature/my-improvement

# Make changes
# ...

# Run tests
make check

# Commit
git add .
git commit -m "Add feature X"
```

## Coding Guidelines

### C++ Style

Follow Bitcoin Core style:

```cpp
// Good
class MyClass
{
public:
    void DoSomething();

private:
    int m_value;
};

void MyClass::DoSomething()
{
    if (m_value > 0) {
        // Code here
    }
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Classes | PascalCase | `BlockHeader` |
| Functions | PascalCase | `GetBlockHash()` |
| Variables | camelCase | `blockHeight` |
| Members | m_ prefix | `m_nVersion` |
| Constants | ALL_CAPS | `MAX_BLOCK_SIZE` |

### Comments

```cpp
// Single line comments for brief explanations

/**
 * Multi-line comments for functions.
 *
 * @param[in] param Description of input parameter
 * @param[out] result Description of output
 * @return Description of return value
 */
```

## Pull Request Process

### 1. Before Submitting

- [ ] Code compiles without warnings
- [ ] All tests pass
- [ ] New code has tests
- [ ] Documentation updated
- [ ] Commit messages are clear

### 2. Create Pull Request

1. Push your branch:
   ```bash
   git push origin feature/my-improvement
   ```

2. Open PR on GitHub
3. Fill in the template:
   - Description of changes
   - Related issues
   - Testing performed

### 3. Review Process

- Maintainers review your code
- Address feedback promptly
- Be open to suggestions
- Squash commits if requested

### 4. After Merge

- Delete your branch
- Update local main:
  ```bash
  git checkout main
  git pull origin main
  ```

## Commit Messages

Format:
```
component: Short description (50 chars max)

Longer description if needed. Wrap at 72 characters.
Explain what and why, not how.

Fixes #123
```

Examples:
```
consensus: Add Surge Protector difficulty adjustment

Prevents single algorithm from dominating chain by
reducing difficulty after 9 consecutive same-algo blocks.

Fixes #456
```

```
wallet: Fix balance calculation for unconfirmed tx

Previously unconfirmed change was counted twice.
```

## Testing

### Running Tests

```bash
# All tests
make check

# Specific test
./src/test/test_bitmark --run_test=block_tests

# Fork tests
cd src/test/fork_tests
./run_tests.sh
```

### Writing Tests

```cpp
BOOST_AUTO_TEST_CASE(my_test)
{
    // Setup
    CBlock block;

    // Exercise
    bool result = block.IsValid();

    // Verify
    BOOST_CHECK(result == true);
}
```

## Documentation Contributions

### This Documentation Site

```bash
# Clone docs repo
git clone https://github.com/project-bitmark/docs.git
cd docs

# Install dependencies
npm install

# Run locally
npm start

# Make changes to docs/ folder
# Submit PR
```

### Wiki

Edit directly on GitHub:
1. Go to [wiki page](https://github.com/project-bitmark/bitmark/wiki)
2. Click Edit
3. Make changes
4. Save

## Reporting Issues

### Bug Reports

Include:
1. Bitmark version
2. Operating system
3. Steps to reproduce
4. Expected behavior
5. Actual behavior
6. Log output (`~/.bitmark/debug.log`)

### Feature Requests

Include:
1. Problem description
2. Proposed solution
3. Alternatives considered
4. Impact assessment

## Security Issues

**Do not open public issues for security vulnerabilities!**

Email security concerns to the maintainers privately. See SECURITY.md in the repository.

## Community

### Channels

- [GitHub Discussions](https://github.com/project-bitmark/bitmark/discussions)
- [Reddit r/Bitmark](https://reddit.com/r/Bitmark)
- [BitcoinTalk](https://bitcointalk.org/index.php?topic=660544.0)

### Code of Conduct

- Be respectful
- Be constructive
- Be patient
- Focus on the project

## Recognition

Contributors are recognized in:
- Release notes
- Contributors file
- Community acknowledgments

## License

Contributions are licensed under MIT License. By contributing, you agree to this licensing.

## Need Help?

- Ask in GitHub Discussions
- Join community channels
- Read existing documentation
- Check closed issues for similar questions
