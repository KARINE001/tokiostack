import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';

const features = [
  {
    title: "🔐 VPS Security Guide",
    description: "How to secure your VPS before hosting blockchain nodes.",
    link: "/docs/VPS-and-Security-Guides/VPS-Guide-Securing-a-Server-to-Host-a-Node",
  },
  {
    title: "🔗 Install Pipe Network Node",
    description: "Step-by-step guide to setting up a Pipe Network Cache Node.",
    link: "/docs/Node-installation-guides/pipe-network-cache-node",
  },
  {
    title: "🔄 Automate Node Updates",
    description: "Use Watchtower to keep your nodes updated automatically.",
    link: "/docs/Optimization-and-Maintenance/Automating-node-updates-with-watchtower",
  },
];

function Feature({ title, description, link }) {
  return (
    <Link to={link} className="card">
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="heroBanner">
        <div className="container">
          <h1 className="heroTitle">TokioStack Docs 🚀</h1>
          <p className="heroSubtitle">Mastering Node Ops</p>
          <p className="description">
            Your go-to resource for installing, managing, and optimizing blockchain nodes.
          </p>
        </div>
      </header>

      {/* Feature Grid Section */}
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <div key={idx} className="col col--4">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
