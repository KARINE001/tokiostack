import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="heroBanner">
        <div className="container">
          <h1 className="heroTitle">
            TokioStack Docs
            <img src="img/docusaurus.png" alt="TokioStack Logo" />
          </h1>
          <p className="heroSubtitle">
            Mastering Node Ops: Blockchain Nodes, VPS Security, and Automation.
          </p>
          <div className="buttons">
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
            <Link className="button button--secondary button--lg" to="/docs">
              View All Guides
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
