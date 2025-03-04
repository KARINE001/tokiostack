import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="heroBanner text-center">
        <div className="container">
          <h1 className="heroTitle">TokioStack Docs 🚀</h1>
          <p className="heroSubtitle">Mastering Node Ops</p>
          <p className="description">
            Your go-to resource for installing, managing, and optimizing blockchain nodes.
          </p>

          {/* Feature Cards Section */}
          <div className={styles.cardContainer}>
            <Link to="/docs/Securing-a-Server/" className={styles.card}>
              <h3>🔒 Secure Your VPS</h3>
              <p>Learn how to harden your VPS security.</p>
            </Link>

            <Link to="/docs/Node-installation-guides/pipe-network-cache-node" className={styles.card}>
              <h3>🚀 Install Pipe Network Node</h3>
              <p>Step-by-step guide for setting up Pipe Network.</p>
            </Link>

            <Link to="/docs/Optimization-and-Maintenance/Automating-node-updates-with-watchtower" className={styles.card}>
              <h3>🔄 Automate Node Updates</h3>
              <p>Use Watchtower to keep your nodes up to date.</p>
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
