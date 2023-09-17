import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function HomepageBackgroundWithTitle() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.background}>
      <img className={styles.backgroundImg} src='img/img-background.jpg'></img>
      <div className={styles.titleOnImg}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro">
          Get started
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Hello"
      description="">
      <HomepageBackgroundWithTitle />
    </Layout>
  );
}
