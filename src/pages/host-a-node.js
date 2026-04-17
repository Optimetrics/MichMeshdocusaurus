import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './host-a-node.module.css';

// TODO: Replace placeholder with real contact email
const CONTACT_EMAIL = 'hello@michmesh.com';
const DISCORD_URL = 'https://discord.gg/skgWyPuft8';
const SIGNAL_URL =
  'https://signal.group/#CjQKIG5-o6UUXvto66c1wN4fbinuguy614cJtRPmMxUA6JWyEhBKp6Q70OkA2MpcjsBYU1r9';

function HeroBanner() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOverlay}>
        <div className="container">
          <div className={styles.heroContent}>
            <Heading as="h1" className={styles.heroTitle}>
              Host a node. Extend the network.
            </Heading>
            <p className={styles.heroTagline}>
              A small solar-powered relay on a barn, silo, rooftop, or tower can
              connect families across miles. We provide the hardware. You
              provide the view.
            </p>
            <div className={styles.heroButtons}>
              <a
                className={clsx('button button--lg', styles.btnPrimary)}
                href="#contact">
                Get in touch
              </a>
              <a
                className={clsx('button button--lg', styles.btnSecondary)}
                href="#spec-sheet">
                Read the spec sheet
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function IfYouHaveARoof() {
  const roles = [
    {
      title: 'A home or small building',
      body: "Even a regular rooftop can host a node that covers a neighborhood. If you have a clear sightline and a spot for a small solar panel, you're a candidate.",
    },
    {
      title: 'A barn, silo, or farm structure',
      body: 'These are gold. Tall, well-placed farm structures along rural corridors can extend the mesh for miles and fill gaps where cell service disappears.',
    },
    {
      title: 'A tower, water tank, or tall commercial building',
      body: 'The backbone of the network. A single well-placed tall-structure node can serve hundreds of families. We prioritize strategic commercial and municipal sites for free hardware and installation.',
    },
    {
      title: 'No structure, but you want to help',
      body: "Join a group buy, host a meetup, or sponsor a node elsewhere. The community funds and builds nodes together — there's room for everyone.",
    },
  ];

  return (
    <section className={styles.roles}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.centered)}>
          If you have a roof, you have a role
        </Heading>
        <p className={styles.sectionIntro}>
          The network grows one rooftop at a time. Different properties serve
          the network differently — here's where you fit.
        </p>
        <div className={styles.rolesGrid}>
          {roles.map((r) => (
            <div key={r.title} className={styles.roleCard}>
              <Heading as="h3" className={styles.roleTitle}>
                {r.title}
              </Heading>
              <p className={styles.roleBody}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYoureHosting() {
  return (
    <section className={styles.whatHosting}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          What you're actually hosting
        </Heading>
        <div className={styles.proseBlock}>
          <p>
            A MichMesh node is a small weatherproof box — about the size of a
            birdhouse — mounted somewhere with a clear view of the sky. Inside
            is a low-power radio and a small solar panel with a battery. It
            doesn't connect to your internet. It doesn't plug into your
            electrical. It doesn't have a camera or microphone. It can't see
            your network traffic or store any personal data.
          </p>
          <p>
            All it does is listen for short text messages on a license-free
            radio frequency and pass them along to the next node. Think of it as
            a volunteer post office for radio signals — if a message comes in,
            it hands it off to whichever node is closest to the destination.
          </p>
          <p>
            Most hosts forget the node is even there within a month. We check in
            once a year, replace a battery every five to seven years, and
            otherwise leave you alone.
          </p>
        </div>
      </div>
    </section>
  );
}

function ForPropertyOwners() {
  return (
    <section className={styles.forAudience}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          For property owners
        </Heading>
        <p className={styles.sectionIntroLeft}>
          If you own a barn, silo, windmill, tower, or tall rooftop, your
          property might be exactly what the network needs. Strategic locations
          — especially along the lakeshore, through rural counties, and in cell
          dead zones — get priority for free hardware and installation.
        </p>
        <div className={styles.listSection}>
          <div className={styles.listColumn}>
            <h3 className={styles.listTitle}>What we provide</h3>
            <ul className={styles.cleanList}>
              <li>The node hardware, fully assembled</li>
              <li>Solar panel and battery — no grid power needed</li>
              <li>Weatherproof enclosure rated for Michigan winters</li>
              <li>Professional installation at no cost for strategic sites</li>
              <li>Annual check-ins and long-term maintenance</li>
            </ul>
          </div>
          <div className={styles.listColumn}>
            <h3 className={styles.listTitle}>What we ask from you</h3>
            <ul className={styles.cleanList}>
              <li>Permission to mount the node on an existing structure</li>
              <li>Roughly 30 minutes of your time during install</li>
              <li>A way to reach you once a year for a wellness check</li>
            </ul>
          </div>
          <div className={styles.listColumn}>
            <h3 className={styles.listTitle}>What hosting does not involve</h3>
            <ul className={styles.cleanList}>
              <li>No monthly bills, no subscriptions, no ongoing costs</li>
              <li>No internet connection required</li>
              <li>No power draw from your property</li>
              <li>No access to your Wi-Fi, network, or devices</li>
              <li>No cameras, microphones, or recording equipment</li>
            </ul>
          </div>
        </div>
        <p className={styles.ctaPrompt}>
          <em>Ready to talk?</em>{' '}
          <a className="button button--primary" href="#contact">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}

function ForOrganizations() {
  return (
    <section className={clsx(styles.forAudience, styles.forAudienceAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          For organizations
        </Heading>
        <p className={styles.sectionIntroLeft}>
          Parks departments, churches, townships, schools, and businesses make
          some of our best host partners. A node on your water tower, steeple,
          or rooftop serves hundreds of families in your service area at zero
          cost and zero liability.
        </p>
        <div className={styles.listSection}>
          <div className={styles.listColumn}>
            <h3 className={styles.listTitle}>What your organization gets</h3>
            <ul className={styles.cleanList}>
              <li>A tangible community-resilience asset at no cost</li>
              <li>A visible commitment to emergency preparedness</li>
              <li>Recognition as a host partner on our coverage map</li>
              <li>A simple one-page MOU we provide — no legal complexity</li>
            </ul>
          </div>
          <div className={styles.listColumn}>
            <h3 className={styles.listTitle}>What we handle</h3>
            <ul className={styles.cleanList}>
              <li>All hardware, installation, and permits if required</li>
              <li>General liability coverage during installation</li>
              <li>Annual inspection and long-term maintenance</li>
              <li>A point of contact for any questions from staff or the public</li>
            </ul>
          </div>
          <div className={styles.listColumn}>
            <h3 className={styles.listTitle}>What hosting is not</h3>
            <ul className={styles.cleanList}>
              <li>Not a data collection point — nodes don't see message content</li>
              <li>Not a public Wi-Fi or internet service</li>
              <li>Not a staffed operation — once installed, it runs itself</li>
              <li>Not a zoning or permit burden in almost all jurisdictions</li>
            </ul>
          </div>
        </div>
        <p className={styles.ctaPrompt}>
          <em>We're happy to present to a board or committee — just ask.</em>{' '}
          <a className="button button--primary" href="#contact">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}

function CommunityPartners() {
  return (
    <section className={styles.partners}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.centered)}>
          Community partners
        </Heading>
        <p className={styles.sectionIntro}>
          MichMesh is built with the support of Michigan organizations who
          believe in community-driven resilience.
        </p>
        {/* TODO: Partner logos go here as we sign them. Start with 3-column logo grid.
            When empty, show placeholder text below. */}
        <div className={styles.partnersFallback}>
          <p>
            We're actively building partnerships with parks departments,
            emergency management offices, and community organizations across
            Michigan. Want to be our first featured partner?{' '}
            <a href="#contact">Get in touch</a> and we'll tell your story.
          </p>
        </div>
      </div>
    </section>
  );
}

function SpecSheet() {
  const specs = [
    ['Size', 'Roughly 8" × 6" × 3", similar to a small birdhouse'],
    ['Weight', 'Under 2 lbs assembled'],
    ['Power', 'Solar panel with lithium battery, fully off-grid'],
    ['Frequency', '902–928 MHz ISM band, FCC Part 15 compliant'],
    ['Transmit power', 'Under 1 watt, well below any licensing threshold'],
    [
      'Data handled',
      'Short encrypted text messages only — no audio, video, or network traffic',
    ],
    ['Internet required', 'None'],
    [
      'Mounting',
      'Non-penetrating roof mounts, mast clamps, or existing structure attachment',
    ],
    ['Maintenance', 'Annual visual check, battery replacement every 5–7 years'],
    ['Weather rating', 'IP65 enclosure, rated for –40°F to 140°F'],
    [
      'Regulatory',
      'Operates on license-free ISM band — no FCC license, no permits required',
    ],
  ];

  return (
    <section id="spec-sheet" className={styles.specSheet}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          The technical details
        </Heading>
        <p className={styles.sectionIntroLeft}>
          <em>
            For the engineers, facilities managers, and IT people who want the
            real answers.
          </em>
        </p>
        <div className={styles.specTableWrap}>
          <table className={styles.specTable}>
            <thead>
              <tr>
                <th>Spec</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {specs.map(([k, v]) => (
                <tr key={k}>
                  <td className={styles.specKey}>{k}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.specFootnote}>
          <em>
            Need something more specific for your facility team? Ask and we'll
            send detailed documentation.
          </em>
        </p>
      </div>
    </section>
  );
}

function CommonQuestions() {
  const faqs = [
    {
      q: 'Is this legal?',
      a: 'Yes. MichMesh operates on FCC-approved license-free ISM band frequencies. No license, no permit, no paperwork required from you or us.',
    },
    {
      q: 'Can the node see my Wi-Fi or internet traffic?',
      a: "No. The node has no connection to your network. It's a standalone radio that doesn't touch anything else on your property.",
    },
    {
      q: 'What if something goes wrong with it?',
      a: 'We handle it. If a node fails, we come out and fix or replace it at no cost to you.',
    },
    {
      q: 'Will it interfere with other electronics?',
      a: 'No. The transmit power is under 1 watt on frequencies shared safely with baby monitors, garage door openers, and cordless phones.',
    },
    {
      q: 'What does the node look like?',
      a: 'A small weatherproof box with a solar panel. Most hosts choose a discreet mounting location and the node blends into the existing structure.',
    },
    {
      q: 'Can I take it down if I change my mind?',
      a: "Yes. Hosting is voluntary and there's no commitment. If you need it removed, we'll come get it — no hard feelings.",
    },
    {
      q: "Who's liable if something happens?",
      a: 'We carry general liability coverage during installation. Once installed, the node is passive hardware — no moving parts, no heat, no emissions.',
    },
    {
      q: "Who actually runs MichMesh?",
      a: "We're a volunteer collective of Michigan residents building this because it matters. No company, no paid staff, no ads. Just neighbors.",
    },
  ];

  return (
    <section className={styles.faq}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.centered)}>
          Common questions
        </Heading>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{f.q}</summary>
              <p className={styles.faqAnswer}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <Heading as="h2" className={clsx(styles.sectionTitle, styles.centered)}>
          Get in touch
        </Heading>
        <p className={styles.sectionIntro}>
          Three ways to reach us. Pick whichever is easiest.
        </p>
        <div className={styles.contactGrid}>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={styles.contactCard}>
            <span className={styles.contactIcon}>✉️</span>
            <div>
              <strong>Email us</strong>
              <p>
                Best for organizations, boards, and detailed conversations.
              </p>
              <span className={styles.contactValue}>{CONTACT_EMAIL}</span>
            </div>
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}>
            <span className={styles.contactIcon}>💬</span>
            <div>
              <strong>Join Discord</strong>
              <p>
                Fastest way to talk to an actual human. Ask in{' '}
                <code>#host-a-node</code>.
              </p>
            </div>
          </a>
          <a
            href={SIGNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactCard}>
            <span className={styles.contactIcon}>🔒</span>
            <div>
              <strong>Signal group</strong>
              <p>For folks who prefer Signal.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.ctaBand}>
      <div className="container">
        <p className={styles.ctaBandText}>
          Your barn, silo, or rooftop could be the reason a message gets
          through when it matters.
        </p>
        <div className={styles.ctaBandButtons}>
          <a
            className={clsx('button button--lg', styles.btnPrimary)}
            href="#contact">
            Get in touch
          </a>
          <Link
            className={clsx('button button--lg', styles.btnSecondary)}
            to="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HostANode() {
  return (
    <Layout
      title="Host a Node"
      description="Host a MichMesh node on your barn, silo, rooftop, or tower. Free hardware, no internet required, no ongoing cost. A volunteer Michigan mesh network.">
      <HeroBanner />
      <main>
        <IfYouHaveARoof />
        <WhatYoureHosting />
        <ForPropertyOwners />
        <ForOrganizations />
        <CommunityPartners />
        <SpecSheet />
        <CommonQuestions />
        <ContactSection />
        <FinalCta />
      </main>
    </Layout>
  );
}
