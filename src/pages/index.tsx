import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" >
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        

      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="IFC 2026 conference - Cannes - France">
      <HomepageHeader />
      <main>
        <div className={styles.markdown} style={{ margin: '20px' }}>
          <h2>Welcome to the IFC 2026 Conference</h2>
          <p>
            We are excited to announce the International FAUST Conference 2026,
            taking place in Cannes, France on May 28-29. Join us for a two-day
            event filled with insightful talks, workshops, and networking
            opportunities.
            <p></p>
            The International Faust Conference (IFC) takes place every two years. It aims at gathering developers and users of the Faust programming language to present current projects and discuss future directions for Faust and its community.

            Participants share their work through paper presentations. A series of round tables on various topics serve as a platform to brainstorm on Faust's features, semantics, tools, applications, etc. to determine future directions for this language. Open spaces for demos and workshops are usually available for participants to openly share their ongoing projects with the rest of the community.
          </p>
        </div>
      </main>
    </Layout>
  );
}
