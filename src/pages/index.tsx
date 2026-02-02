import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <img
            src="/docs/img/logo.png"
            alt="Bitmark Logo"
            className={styles.heroLogo}
          />
          <Heading as="h1" className={styles.heroTitle}>
            Bitmark
          </Heading>
          <p className={styles.heroSubtitle}>
            <span className={styles.highlight}>Spendable Karma</span> on the Blockchain
          </p>
          <p className={styles.heroTagline}>
            What if your likes were worth something? Marks are likes that carry real value.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>Fair Launch 2014</span>
            <span className={styles.badge}>No ICO</span>
            <span className={styles.badge}>No Premine</span>
            <span className={styles.badge}>Community Driven</span>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.heroButton)}
              to="/getting-started/introduction">
              Get Started
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.heroButton)}
              to="/marking/vision">
              The Vision
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Spendable Karma',
    icon: '✨',
    description: 'Marks are likes that transfer real value. When you mark content, you pay the creator. Your reputation grows. Their reputation grows. Value flows where it belongs.',
  },
  {
    title: 'Fair Since 2014',
    icon: '⚖️',
    description: 'No ICO. No premine. No VC funding. Just proof-of-work mining from day one. A decade of fair distribution and community governance.',
  },
  {
    title: '8 Mining Algorithms',
    icon: '⛏️',
    description: 'CPU, GPU, or ASIC - everyone can participate. Scrypt, SHA256D, Yescrypt, Argon2d, X17, Lyra2REv2, Equihash, and CryptoNight.',
  },
  {
    title: 'Self-Sustaining Ecosystem',
    icon: '🔄',
    description: 'Infrastructure pays for itself through marking. Explorers, storage, relays - all funded by the value flowing through the network.',
  },
  {
    title: 'Spam-Proof by Design',
    icon: '🛡️',
    description: 'Quality content is profitable. Spam is expensive. No moderators needed. The economics self-regulate.',
  },
  {
    title: 'The Missing Web Layer',
    icon: '🌐',
    description: 'HTTP 402 "Payment Required" - finally realized. Micropayments that feel like likes but build careers.',
  },
];

function FeatureCard({title, icon, description}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why Bitmark?
        </Heading>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className="container">
        <blockquote className={styles.quote}>
          <p>
            "Consider marks to be spendable karma - an amusing post on a social network could pay for your coffee,
            marking a video of a crisis could pay for aid on the ground, marking an article about a mistreated
            animal could pay for its shelter."
          </p>
        </blockquote>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2014</span>
            <span className={styles.statLabel}>Genesis Block</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>8</span>
            <span className={styles.statLabel}>PoW Algorithms</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2 min</span>
            <span className={styles.statLabel}>Block Time</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>~27.58M</span>
            <span className={styles.statLabel}>Max Supply</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Join the Movement
        </Heading>
        <p className={styles.ctaText}>
          The web is broken. Creators starve while platforms profit.
          Marking fixes this. One click. Real value. Earned reputation.
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/quick-start">
            Start Building
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://github.com/project-bitmark">
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Spendable Karma on the Blockchain"
      description="Bitmark - A fair cryptocurrency since 2014 with Marking: likes that carry real value. No ICO, no premine, community driven.">
      <HeroSection />
      <main>
        <StatsSection />
        <FeaturesSection />
        <QuoteSection />
        <CTASection />
      </main>
    </Layout>
  );
}
