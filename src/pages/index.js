import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">TokioStack Docs 🚀</h1>
          <p className="hero__subtitle">Mastering Node Ops</p>
          <p className={styles.description}>
            Your go-to resource for installing, managing, and optimizing blockchain nodes.
          </p>
          <div className={styles.buttonContainer}>
            <Link className="button button--primary" to="/docs/node-installation-guides/pipe-network-cache-node">
              Install Pipe Network Node
            </Link>
            <Link className="button button--secondary" to="/docs/ssh-tools-comparison">
              SSH Tools Comparison
            </Link>
            <Link className="button button--primary" to="/docs/vps-security-management/quick-vps-security-setup">
              Quick VPS Security Setup
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.centerLogo}>
        <img src={useBaseUrl('img/docusaurus.png')} alt="Docusaurus Logo" className={styles.logo} />
      </div>
    </Layout>
  );
}
