import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
        </div>
      </header>

      <div className="featuresContainer">
  {features.map((feature, index) => (
    <Link to={feature.link} className="featureCard" key={index}>
      <h3 className="text-lg font-bold">{feature.title}</h3>
      <p className="mt-2">{feature.description}</p>
    </Link>
  ))}
</div>
    </Layout>
  );
}
