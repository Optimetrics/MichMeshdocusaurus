import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import MeshAnimation from '@site/src/components/MeshAnimation';
import styles from './index.module.css';

const DISCORD_URL = 'https://discord.gg/skgWyPuft8';
const SIGNAL_URL =
  'https://signal.group/#CjQKIG5-o6UUXvto66c1wN4fbinuguy614cJtRPmMxUA6JWyEhBKp6Q70OkA2MpcjsBYU1r9';

function HeroBanner() {
  return (
    <header className={styles.heroBanner}>
      <MeshAnimation />
      <div className={styles.heroOverlay}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroMeshtasticBadge}>
              MESHTASTIC · MESHCORE · RETICULUM
            </div>
            <Heading as="h1" className={styles.heroTitle}>
              A volunteer-built radio network across Michigan.
            </Heading>
            <p className={styles.heroTagline}>
              Works when the power's out, the cell tower's down, and you're
              miles from the nearest road. No monthly fees. No license required.
            </p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx('button button--lg', styles.btnPrimary)}
                to="/docs/getting-started">
                Get Started
              </Link>
              <a
                className={clsx('button button--lg', styles.btnSecondary)}
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer">
                Join the Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ThreeDoor() {
  const doors = [
    {
      title: 'I want to join the network',
      description:
        'For anyone who wants to send messages, track hikes, or have a radio that works when nothing else does.',
      meta: 'Starts around $35.',
      cta: 'Get Started',
      to: '/docs/getting-started',
      external: false,
    },
    {
      title: 'I have a tall structure',
      description:
        'Barn, silo, rooftop, tower — property in the right spot can extend the network for miles. Free node, no internet needed, no data access.',
      meta: null,
      cta: 'Host a Node',
      to: '/host-a-node',
      external: false,
    },
    {
      title: "I'm here to learn more",
      description:
        "Township officials, press, emergency managers, or curious neighbors — here\u2019s what this is, why it matters, and who runs it.",
      meta: null,
      cta: 'About MichMesh',
      to: '/about',
      external: false,
    },
  ];

  return (
    <section className={styles.threeDoor}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.centered)}>
          Where do you fit?
        </Heading>
        <div className={styles.doorGrid}>
          {doors.map((d) => (
            <div key={d.title} className={styles.doorCard}>
              <Heading as="h3" className={styles.doorCardTitle}>
                {d.title}
              </Heading>
              <p className={styles.doorCardDesc}>{d.description}</p>
              {d.meta && <p className={styles.doorCardMeta}>{d.meta}</p>}
              <div className={styles.doorCardBtn}>
                <Link
                  className={clsx('button button--outline button--primary', styles.doorBtn)}
                  to={d.to}>
                  {d.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMichigan() {
  return (
    <section className={styles.whyMichigan}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why Michigan needs this
        </Heading>
        <div className={styles.whyContent}>
          <p>
            Michigan has real communication gaps. Ice storms knock power out for
            days at a time. Cell coverage disappears along the lakeshore, through
            the national forests, and across most of the UP. When tornados hit or
            the grid fails, the tools we rely on every day stop working.
          </p>
          <p>
            MichMesh is a volunteer-run radio network that keeps working anyway.
            Small low-power nodes relay messages from device to device — no cell
            towers, no internet, no power grid. A node on a barn in Allegan
            County can move a message to a hiker in the Manistee National Forest.
            A relay on a silo outside Coopersville can reach a family in Muskegon
            during a storm.
          </p>
          <p>
            We're neighbors building this for our neighbors. It's free to use,
            open-source, and runs on FCC-approved license-free frequencies —
            anyone can join.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: '1',
      title: 'Get a radio',
      desc: 'Small LoRa device, starts around $35. Works with your phone over Bluetooth.',
    },
    {
      n: '2',
      title: 'Join the mesh',
      desc: "Flash firmware, open the app, you\u2019re on the network. No account, no SIM, no subscription.",
    },
    {
      n: '3',
      title: 'Send messages anywhere nodes reach',
      desc: 'Text, GPS, group channels. Every radio is also a relay that helps the network grow.',
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.centered)}>
          How it works
        </Heading>
        <div className={styles.stepGrid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.stepCard}>
              <div className={styles.stepNumber}>{s.n}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p className={styles.stepCta}>
          Want the full walkthrough?{' '}
          <Link className="button button--primary" to="/docs/getting-started">
            Get Started
          </Link>
        </p>
      </div>
    </section>
  );
}

{/* TODO: Coverage map section goes here. Will show active nodes across Michigan with caption and link to full map page. */}

function CommunityResources() {
  return (
    <section className={styles.resources}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.centered)}>
          Community &amp; Resources
        </Heading>
        <div className={styles.resourceLinks}>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceCard}>
            <span className={styles.resourceIcon}>💬</span>
            <div>
              <strong>Join the Discord</strong>
              <p>
                Active community, setup help, group buys, meetup announcements.
              </p>
            </div>
          </a>
          <Link to="/docs/intro" className={styles.resourceCard}>
            <span className={styles.resourceIcon}>📖</span>
            <div>
              <strong>MichMesh Docs</strong>
              <p>
                Protocol guides, node builds, line-of-sight tools,
                Michigan-specific help.
              </p>
            </div>
          </Link>
          <a
            href={SIGNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resourceCard}>
            <span className={styles.resourceIcon}>🔒</span>
            <div>
              <strong>Signal group</strong>
              <p>For folks who prefer Signal over Discord.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className={styles.ctaBand}>
      <div className="container">
        <p className={styles.ctaBandText}>
          Michigan runs on small towns, big lakes, and neighbors who show up.
          MichMesh is built the same way.
        </p>
        <div className={styles.ctaBandButtons}>
          <Link
            className={clsx('button button--lg', styles.btnPrimary)}
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className={clsx('button button--lg', styles.btnSecondary)}
            to="/host-a-node">
            Host a Node
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Michigan Mesh Network"
      description="A volunteer-built radio network across Michigan. Works without cell towers, internet, or power grid. Free to use, no license required.">
      <HeroBanner />
      <main>
        <ThreeDoor />
        <WhyMichigan />
        <HowItWorks />
        <CommunityResources />
        <CtaBand />
      </main>
    </Layout>
  );
}
