import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h1 className={styles.title}>TokioStack Docs</h1>
          <h2 className={styles.subtitle}>Mastering Node Ops</h2>
          <p className={styles.description}>Getting Started with Node Installation</p>

          <div className={styles.buttonContainer}>
            <Link className={`${styles.button} ${styles.green}`} to={useBaseUrl('/docs/node-installation-guides/pipe-network-cache-node')}>
              Install Pipe Network Node
            </Link>
            <Link className={`${styles.button} ${styles.grey}`} to={useBaseUrl('/docs/ssh-tools-comparison')}>
              SSH Tools Comparison
            </Link>
            <Link className={`${styles.button} ${styles.green}`} to={useBaseUrl('/docs/vps-security-management/quick-vps-security-setup')}>
              Quick VPS Security Setup
            </Link>
          </div>
        </div>
        <div className={styles.centerContent}>
          <img src={useBaseUrl('img/docusaurus.png')} alt="Docusaurus Logo" className={styles.logo} />
        </div>
      </div>
    </Layout>
  );
}

