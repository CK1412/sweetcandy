import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageBackgroundWithTitle() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <div className={styles.background}>
      <img className={styles.backgroundImg} src='img/img-background.jpg'></img>
      <div className={styles.titleOnImg}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro">
          <Translate>Get started</Translate>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.tagline}
      description="">

      <main>
        <section>
          <HomepageBackgroundWithTitle />
        </section>
      </main>

    </Layout>
  );
}
