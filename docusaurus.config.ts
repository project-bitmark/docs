import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Bitmark Docs',
  tagline: 'A stable cryptocurrency network with a reputation system called Marking',
  favicon: 'img/favicon.ico',

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  url: 'https://project-bitmark.github.io',
  baseUrl: '/docs/',
  organizationName: 'project-bitmark',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/project-bitmark/docs/tree/gh-pages/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    metadata: [
      {name: 'keywords', content: 'bitmark, cryptocurrency, marking, reputation, blockchain, multi-algorithm, proof-of-work, spendable karma, fair launch, no ico, no premine'},
      {name: 'description', content: 'Bitmark - Spendable karma on the blockchain. A fair cryptocurrency since 2014 with no ICO, no premine. Marks are likes that carry real value.'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Bitmark - Spendable Karma on the Blockchain'},
      {property: 'og:description', content: 'A fair cryptocurrency since 2014. No ICO, no premine, community driven. Marks are likes that transfer real value to creators.'},
      {property: 'og:image', content: 'https://project-bitmark.github.io/docs/img/social-card.png'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Bitmark - Spendable Karma on the Blockchain'},
      {name: 'twitter:description', content: 'A fair cryptocurrency since 2014. Marks are likes that carry real value.'},
    ],

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    announcementBar: {
      id: 'contribute',
      content: 'Help improve these docs! <a href="https://github.com/project-bitmark/docs">Contribute on GitHub</a>',
      backgroundColor: '#7c3aed',
      textColor: '#fff',
      isCloseable: true,
    },

    navbar: {
      title: 'Bitmark Docs',
      logo: {
        alt: 'Bitmark Logo',
        src: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: '/getting-started/introduction',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: '/marking/vision',
          label: 'Marking',
          position: 'left',
        },
        {
          to: '/technical/overview',
          label: 'Technical',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Ecosystem',
          position: 'left',
          items: [
            {label: 'Wallets', to: '/ecosystem/wallets'},
            {label: 'Explorers', to: '/ecosystem/explorers'},
            {label: 'Mining', to: '/ecosystem/mining'},
            {type: 'html', value: '<hr style="margin: 0.5rem 0;">'},
            {label: 'GitHub', href: 'https://github.com/project-bitmark'},
            {label: 'Community', href: 'https://reddit.com/r/Bitmark'},
          ],
        },
        {
          type: 'dropdown',
          label: 'BIPs',
          position: 'left',
          items: [
            {label: 'BIP Index', to: '/bips/index'},
            {label: 'BIP-100: Original Design', to: '/bips/bip-100'},
            {label: 'BIP-101: Multi-PoW', to: '/bips/bip-101'},
            {label: 'BIP-102: Emission Model', to: '/bips/bip-102'},
          ],
        },
        {
          href: 'https://github.com/project-bitmark',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Introduction', to: '/getting-started/introduction'},
            {label: 'Quick Start', to: '/getting-started/quick-start'},
            {label: 'The Marking Vision', to: '/marking/vision'},
          ],
        },
        {
          title: 'Technical',
          items: [
            {label: 'Overview', to: '/technical/overview'},
            {label: 'Multi-Algorithm PoW', to: '/technical/multi-algo'},
            {label: 'MRK Protocol', to: '/marking/mrk-protocol'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/project-bitmark'},
            {label: 'Reddit', href: 'https://reddit.com/r/Bitmark'},
            {label: 'BitcoinTalk', href: 'https://bitcointalk.org/index.php?topic=660544.0'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Block Explorer', href: 'https://chainz.cryptoid.info/marks/'},
            {label: 'Releases', href: 'https://github.com/project-bitmark/bitmark/releases'},
            {label: 'bitmark.rocks', href: 'https://bitmark.rocks/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Project Bitmark. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'cpp', 'javascript'],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
      options: {
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
