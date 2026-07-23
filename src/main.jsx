import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Mic2,
  Newspaper,
  Mail,
} from 'lucide-react'
import './styles.css'

const projects = [
  {
    slug: 'clinbook',
    name: 'Clinbook',
    eyebrow: 'Founder-built company · Healthcare technology',
    summary: 'A platform designed to make clinical study startup faster and more informed.',
    role: 'Founder & CEO',
    status: 'Active',
    year: '2023–present',
    url: 'https://clinbook.co',
    accent: 'coral',
    overview:
      'Clinbook brings fragmented investigator and research-site information into a more useful decision-making experience for clinical research teams.',
    work: [
      'Company concept, strategy, and product direction',
      'Data strategy and investigator/site intelligence model',
      'Go-to-market positioning and commercial development',
      'Product design, partnerships, and company building',
    ],
  },

  {
    slug: 'sweatvida',
    name: 'SweatVida',
    eyebrow: 'Founder-built company · Digital fitness',
    summary: 'A search-led directory that made high-quality, free at-home workouts easier to discover.',
    role: 'Founder & CEO',
    status: 'Archived company',
    year: 'Apr 2020–May 2023',
    url: 'https://sweatvida.com',
    accent: 'sweatvida',
    logo: '/ventures/sweatvida/sweatvida-logo.png',
    overview:
      'SweatVida organized the internet’s best free at-home workouts into a searchable experience built around category, duration, instructor, and channel.',
    work: [
      'Company concept, positioning, brand, and product direction',
      'Search taxonomy and discovery experience',
      'Long-tail SEO and editorial content strategy',
      'Instructor, brand, sponsor, and media relationships',
    ],
  },
  {
    slug: 'uncluttered-soul',
    name: 'Uncluttered Soul',
    eyebrow: 'Founder-built brand · Personal growth',
    summary: 'A founder-led platform exploring clarity, mindfulness, and intentional living.',
    role: 'Founder',
    status: 'Selected work',
    year: '2023–present',
    url: '#',
    accent: 'teal',
    overview:
      'A space for ideas and offerings centered on living with greater clarity and intention. This page can hold the brand story, imagery, products, and milestones.',
    work: [
      'Brand strategy and positioning',
      'Editorial and product direction',
      'Audience and community development',
      'Creative concept and visual identity',
    ],
  },
  {
    slug: 'yumyummy',
    name: 'YumYummy',
    eyebrow: 'Founder-built product venture · Infant feeding',
    summary: 'An Amazon-first baby-feeding concept built around silicone pouch tops, paused after testing and commercialization review.',
    role: 'Founder',
    status: 'Paused before launch',
    year: '2024',
    url: '#',
    accent: 'yumyummy',
    overview:
      'YumYummy explored safer, softer, universal silicone pouch tops for baby and toddler food pouches, alongside packaging built for a fast consumer-product launch.',
    work: [
      'Consumer product concept, positioning, and product-market framing',
      'Product design, prototyping, packaging, and Amazon-ready merchandising',
      'Testing, compliance evaluation, and commercialization diligence',
      'Founder decision-making around safety, liability, and launch tradeoffs',
    ],
  },
  {
    slug: 'pixi-cycling',
    name: 'Pixi Cycling',
    eyebrow: 'Founder-built company · Technical apparel',
    summary: 'Women’s cycling apparel designed to move seamlessly from bike to brunch.',
    role: 'Founder & CEO',
    status: 'Archived company',
    year: 'Mar 2016–Feb 2022',
    url: '#',
    accent: 'pixi',
    overview:
      'Pixi Cycling combined technical cycling apparel with the versatility of athleisure through a patented detachable chamois liner.',
    work: [
      'Product innovation, technical design, and intellectual property',
      'Brand, positioning, and go-to-market strategy',
      'E-commerce, crowdfunding, pop-ups, and selective retail',
      'Ambassador, influencer, wellness-brand, and media community',
    ],
  },
]

const investments = [
  {
    name: 'Guava Health',
    logo: '/logos/guava-health-investment.png',
    logoShape: 'square',
    sector: 'Consumer health technology',
    round: 'Seed round',
    note: 'Participated in the company’s seed round.',
    url: 'https://guavahealth.com',
  },
  {
    name: 'Rogo',
    logo: '/logos/rogo-logo.jpg',
    logoShape: 'wide',
    logoClass: 'rogo-logo',
    sector: 'Enterprise AI for finance',
    round: 'Seed round',
    note: 'Participated through an SPV with ScOp VC in a round led by Khosla Ventures.',
    url: 'https://rogo.ai',
  },
]

const advisoryClients = [
  {
    name: 'Paradise Found',
    work: 'Founder strategy & business growth',
    url: 'https://www.paradisefoundsb.com/',
    logo: '/logos/paradise-found.webp',
    logoShape: 'wide',
    tags: ['Retail', 'Lifestyle'],
  },
  {
    name: 'Casitas Rowing',
    work: 'Organizational strategy & growth',
    url: 'https://casitasrowing.org',
    logo: '/logos/casitas-rowing.webp',
    logoShape: 'wide',
    tags: ['Community', 'Sports'],
  },
  {
    name: 'The Refill Shoppe',
    work: 'Customer insight & e-commerce marketing',
    url: 'https://therefillshoppe.com',
    logo: '/logos/refill-shoppe.png',
    logoShape: 'square',
    tags: ['Retail', 'Sustainability'],
  },
  {
    name: 'Simi Valley Birth Center',
    work: 'Growth strategy, operations & profitability',
    url: 'https://simivalleybirthcenter.com',
    logo: '/logos/simi-valley-birth-center.png',
    logoShape: 'wide',
    tags: ['Healthcare', "Women's Health"],
  },
  {
    name: 'Hayley Bridges Design',
    work: 'Hiring, founder planning & work-life design',
    url: 'https://hayleybridgesdesign.com',
    logo: '/logos/hayley-bridges.webp',
    logoShape: 'square',
    tags: ['Creative', 'Services'],
  },
  {
    name: 'Charley Gel',
    work: 'Organic customer growth & marketing',
    url: 'https://charleygel.com/',
    logo: '/logos/charley-gel.png',
    logoShape: 'wide',
    tags: ['Consumer', 'Beauty', 'Retail'],
  },
  {
    name: 'Rêves de Sabine',
    work: 'Positioning, market connection & confidence',
    url: 'https://revesdesabine.com',
    logo: '/logos/reves-de-sabine.png',
    logoShape: 'square',
    tags: ['Consumer', 'Artisan', 'Retail'],
  },
  {
    name: 'Anacapa Clinical',
    work: 'Commercial strategy & business development',
    url: 'https://anacapaclinical.com',
    logo: '/logos/anacapa-clinical.jpeg',
    logoShape: 'square',
    tags: ['Healthcare', 'Life Sciences'],
  },
  {
    name: 'Guava Health',
    work: 'Competitive landscape, differentiation & partnership-channel strategy',
    url: 'https://guavahealth.com',
    logo: '/logos/guava-health.png',
    logoShape: 'square',
    tags: ['Healthcare', 'Technology'],
  },
  {
    name: 'DOTS Technology Corp',
    work: 'Pitch deck strategy and development supporting a $10M NEA financing',
    url: 'https://www.nea.com/portfolio/dots-technology-corp',
    logo: '/logos/dots-technology.png',
    logoShape: 'wide',
    logoClass: 'dots-logo',
    tags: ['Healthcare', 'Technology', 'Life Sciences'],
  },
  {
    name: 'Tinkle Belle',
    work: 'Business growth & positioning',
    url: 'https://tinklebellediaperservice.com',
    logo: '/logos/tinkle-belle.jpeg',
    logoShape: 'square',
    tags: ['Consumer', 'Services', 'Sustainability'],
  },
  {
    name: 'Sway',
    work: 'Founder advisory & go-to-market',
    url: 'https://lovemysway.com',
    logoText: 'SWAY',
    logoShape: 'wordmark',
    tags: ['Consumer', 'Wellness'],
  },
]

const advisoryTestimonials = [
  {
    name: 'Rachel Marriott, LM, CPM',
    title: 'Owner & Director, Simi Valley Birth Center',
    quote: 'The accountability was essential for getting many of the “this would be a great idea when I have time” items that had been languishing on my to-do list for ages.',
    result: 'Navigated growth, expanded the team, built savings, and achieved national accreditation.',
    logo: '/logos/simi-valley-birth-center.png',
    logoShape: 'wide',
    tone: 'indigo',
    featured: true,
  },
  {
    name: 'Hayley Bridges',
    title: 'Owner & Principal, Hayley Bridges Design',
    quote: 'Emily gives actionable advice while also creating space for answers to come from your own desires. I always left our sessions feeling inspired.',
    result: 'Hired an employee, moved out of limbo, and created a more sustainable balance.',
    logo: '/logos/hayley-bridges.webp',
    logoShape: 'square',
    tone: 'ochre',
  },
  {
    name: 'Sabine Dodane',
    title: 'Artisan & Owner, Rêves de Sabine',
    quote: 'She is super smart and kind at the same time, which meant I could respect her guidance and share my vulnerabilities without fearing judgment.',
    result: 'Strengthened her positioning, market connection, and confidence as a business owner.',
    logo: '/logos/reves-de-sabine.png',
    logoShape: 'square',
    tone: 'sand',
  },
  {
    name: 'Jody Pesapane',
    title: 'CEO, Mindful Mixtures / Charley Gel',
    quote: 'Emily is smart and has great ideas on how to grow a business. She made us get out of our comfort zone and put ourselves out there — and it worked.',
    result: 'Developed practical tactics to grow customers and convert one-time buyers into subscribers.',
    logo: '/logos/charley-gel.png',
    logoShape: 'wide',
    tone: 'red',
  },
  {
    name: 'Michelle Stevens',
    title: 'Founder & CEO, The Refill Shoppe',
    quote: 'Emily jumped right in and helped me gain important customer insights that further defined my four ideal customer profiles. I always felt uplifted after our sessions.',
    result: 'Clarified customer segments and strengthened the e-commerce marketing approach.',
    logo: '/logos/refill-shoppe.png',
    logoShape: 'square',
    tone: 'ivory',
  },
]

const advisoryFilters = ['All', 'Healthcare', 'Technology', 'Life Sciences', 'Consumer', 'Retail', 'Creative', 'Community', 'Sustainability']

const mediaItems = [
  {
    type: 'Podcast',
    icon: Mic2,
    title: 'Protecting Your Peach with PIXI',
    outlet: 'Electric Runway Podcast',
    date: 'September 2017',
    url: 'https://open.spotify.com/episode/1aPHrpWkvl3K8C0m8VPjb6?si=696f64ae343549d1',
    description: 'A conversation about Pixi Cycling, product innovation, and designing more functional apparel for women.',
  },
  {
    type: 'Video',
    icon: Mic2,
    title: 'Marketing Analytics with Christina Inge',
    outlet: 'Video conversation',
    date: 'May 2017',
    url: 'https://www.youtube.com/watch?v=jn4mG-yH3Vw',
    description: 'A discussion about marketing analytics, measurement, and using data to make better business decisions.',
  },
  {
    type: 'Press',
    icon: Newspaper,
    title: 'How Emily Welsch Is Using Fashion and Chemistry to Close the Gender Gap in Cycling with Pixi',
    outlet: 'Future-Forward Fashion Founders',
    date: 'April 2017',
    url: 'https://www.linkedin.com/pulse/how-emily-welsch-using-fashion-chemistry-close-gender-josh-walovitch/',
  },
  {
    type: 'Press',
    icon: Newspaper,
    title: 'Fashion-Meets-Butt-Tech Apparel for Cycling and Beyond',
    outlet: 'City Girl Rides',
    date: 'March 2017',
    url: 'https://citygirlrides.com/fashion-meets-butt-tech-apparel-for-cycling-and-beyond/',
  },
  {
    type: 'Press',
    icon: Newspaper,
    title: 'Bike Commuting in Style and Comfort Just Got a Lot Easier',
    outlet: 'Bike Pretty',
    date: 'March 2017',
    url: 'https://bikepretty.com/blogs/blog/bike-commuting-in-style-and-comfort-just-got-a-lot-easier',
  },
  {
    type: 'Press',
    icon: Newspaper,
    title: 'Meet the Pixi Go Anywhere Pant',
    outlet: 'Where the Blue Boots Go',
    date: 'March 2017',
    url: 'https://bluebootsgo.com/2017/03/15/meet-the-pixi-go-anywhere-pant-the-new-pant-you-must-know-about/',
  },
  {
    type: 'Press',
    icon: Newspaper,
    title: 'A BU Grad Is Launching a Cycling Apparel Line for Women',
    outlet: 'Boston Magazine',
    date: 'November 2015',
    url: 'https://www.bostonmagazine.com/health/2015/11/12/pixi-cycling/',
  },
  {
    type: 'Press',
    icon: Newspaper,
    title: 'Boston Entrepreneur to Launch New Cycling Apparel Startup Aimed at Women',
    outlet: 'Boston Business Journal',
    date: 'November 2015',
    url: 'https://www.bizjournals.com/boston/blog/startups/2015/11/boston-entrepreneur-to-launch-new-cycling-apparel.html',
  },
]

const nav = [
  ['/ventures', 'Ventures'],
  ['/advisory', 'Advisory'],
  ['/media', 'Media'],
  ['/contact', 'Contact'],
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [pathname])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  return (
    <header className="site-header">
      <Link className="wordmark" to="/">Emily Welsch</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([href, label]) => (
          <NavLink key={href} to={href} end={href === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            {label}
          </NavLink>
        ))}
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {nav.map(([href, label]) => <Link key={href} to={href}>{label}</Link>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>
}

function ArrowLink({ to, children, external = false }) {
  const content = <>{children}<ArrowRight size={17} /></>
  return external
    ? <a className="arrow-link" href={to} target="_blank" rel="noreferrer">{content}</a>
    : <Link className="arrow-link" to={to}>{content}</Link>
}

function Home() {
  return (
    <PageTransition>
      <section className="home-hero">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}><Eyebrow>Founder · Angel Investor · Advisor</Eyebrow></motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            I build, back, and advise ambitious businesses.
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            I’m Emily Welsch, an operator and entrepreneur working across healthcare, technology, and consumer ventures.
          </motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            <Link className="button button-dark" to="/ventures">Explore my ventures <ArrowRight size={18} /></Link>
            <Link className="button button-light" to="/advisory">Advisory services</Link>
          </motion.div>
        </motion.div>
        <motion.div className="hero-image-wrap" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <img src="/images/hero.jpg" alt="Emily Welsch seated in a bright interior" />
          <div className="image-caption">Santa Barbara, California</div>
        </motion.div>
      </section>

      <section className="statement-band">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .5 }}>
          Founder perspective. Investor curiosity. Operator-level execution.
        </motion.p>
      </section>

      <section className="home-intro section-shell">
        <div className="section-heading sticky-heading">
          <Eyebrow>Built and backed</Eyebrow>
          <h2>One body of work, two distinct perspectives.</h2>
        </div>
        <div className="intro-grid">
          <motion.article className="feature-card coral" whileHover={{ y: -8 }} transition={{ duration: .25 }}>
            <span>01</span>
            <h3>Companies Built</h3>
            <p>Companies and creative ventures I have built, led, or developed from the ground up.</p>
            <ArrowLink to="/ventures?view=built">View companies</ArrowLink>
          </motion.article>
          <motion.article className="feature-card teal" whileHover={{ y: -8 }} transition={{ duration: .25 }}>
            <span>02</span>
            <h3>Angel Investments</h3>
            <p>Early-stage companies and founders I have chosen to support as an investor.</p>
            <ArrowLink to="/ventures?view=backed">View investments</ArrowLink>
          </motion.article>
        </div>
      </section>

      <section className="portrait-story section-shell">
        <motion.div className="portrait-frame" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }}>
          <img src="/images/053.jpg" alt="Emily Welsch in a patterned interior" />
        </motion.div>
        <motion.div className="portrait-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }}>
          <Eyebrow>How I work</Eyebrow>
          <h2>Clear thinking, creative pattern recognition, and pragmatic execution.</h2>
          <p>I enjoy working at the intersection of strategy and building: finding the strongest opportunity, shaping the story, and turning it into a plan people can execute.</p>
          <ArrowLink to="/advisory">Explore advisory services</ArrowLink>
        </motion.div>
      </section>
    </PageTransition>
  )
}

function Ventures() {
  const params = new URLSearchParams(useLocation().search)
  const requested = params.get('view')
  const [view, setView] = useState(requested === 'backed' ? 'backed' : requested === 'built' ? 'built' : 'all')
  useEffect(() => {
    if (requested === 'built' || requested === 'backed') setView(requested)
  }, [requested])

  return (
    <PageTransition>
      <section className="page-hero section-shell">
        <Eyebrow>Ventures</Eyebrow>
        <h1>Companies I’ve built and backed.</h1>
        <p>This page brings together the companies I’ve built and the early-stage teams I’ve backed as an angel investor.</p>
      </section>

      <section className="venture-directory section-shell">
        <div className="filter-row" role="tablist" aria-label="Venture filters">
          {['all', 'built', 'backed'].map(item => (
            <button key={item} onClick={() => setView(item)} className={view === item ? 'filter active' : 'filter'}>
              {item === 'all' ? 'All' : item === 'built' ? 'Built' : 'Backed'}
            </button>
          ))}
        </div>

        {(view === 'all' || view === 'built') && (
          <div className="directory-section">
            <div className="directory-title">
              <div><Eyebrow>Built</Eyebrow><h2>Companies I’ve Built</h2></div>
              <p>Each company opens into a dedicated case study with its story, the work I led, imagery, and links.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, i) => (
                <motion.article
                  className={`project-card ${project.accent}`}
                  key={project.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: .2 }}
                  transition={{ delay: i * .05 }}
                >
                  <Link to={`/ventures/${project.slug}`}>
                    <div className="project-number">0{i + 1}</div>
                    <div>
                      <div className="card-meta">{project.eyebrow}</div>
                      <h3>{project.name}</h3>
                      <p>{project.summary}</p>
                    </div>
                    <div className="card-arrow"><ArrowRight /></div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {(view === 'all' || view === 'backed') && (
          <div className="directory-section investment-section">
            <div className="directory-title">
              <div><Eyebrow>Backed</Eyebrow><h2>Angel Investments</h2></div>
              <p>I focus on post-revenue software and technology companies. I invest in early growth teams building products with clear market traction.</p>
            </div>
            <div className="investment-grid">
              {investments.map((company, i) => (
                <motion.a
                  href={company.url}
                  target="_blank"
                  rel="noreferrer"
                  className="investment-card"
                  key={company.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, amount: .2 }}
                  transition={{ delay: i * .035 }}
                >
                  <div className={`investment-logo ${company.logo ? 'image' : 'wordmark'} ${company.logoShape || ''} ${company.logoClass || ''}`}>
                    {company.logo ? <img src={company.logo} alt={`${company.name} logo`} /> : <span>{company.logoText}</span>}
                  </div>
                  <div className="investment-card-copy">
                    <div className="investment-round">{company.round}</div>
                    <h3>{company.name}</h3>
                    <p>{company.sector}</p>
                    <div className="investment-note">{company.note}</div>
                  </div>
                  <ExternalLink size={17} />
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </section>
    </PageTransition>
  )
}


function SweatVidaCaseStudy({ project }) {
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <PageTransition>
      <section className="sweatvida-hero">
        <div className="section-shell sweatvida-hero-grid">
          <motion.div
            className="sweatvida-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
          >
            <Link className="back-link" to="/ventures">← All ventures</Link>
            <Eyebrow>Company case study · Digital fitness</Eyebrow>
            <img className="sweatvida-wordmark" src={project.logo} alt="SweatVida" />
            <h1>A search-led directory for the best free at-home workouts.</h1>
            <p>
              Founded during the shift to home fitness, SweatVida curated high-quality workouts
              and made them discoverable by workout type, duration, instructor, and channel.
            </p>
            <ArrowLink to={project.url} external>Visit SweatVida</ArrowLink>
          </motion.div>

          <motion.aside
            className="sweatvida-facts"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .55, delay: .08 }}
          >
            <div><span>Role</span><strong>Founder & CEO</strong></div>
            <div><span>Timeline</span><strong>Apr 2020–May 2023</strong></div>
            <div><span>Model</span><strong>Non-monetized digital product</strong></div>
            <div><span>Growth</span><strong>Organic search</strong></div>
          </motion.aside>
        </div>
      </section>

      <section className="sweatvida-product section-shell">
        <motion.div
          className="browser-frame"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .18 }}
        >
          <div className="browser-bar">
            <span></span><span></span><span></span>
            <div>sweatvida.com</div>
          </div>
          <img src="/ventures/sweatvida/sweatvida-home.jpg" alt="SweatVida workout search experience" />
        </motion.div>
      </section>

      <section className="sweatvida-story section-shell">
        <div className="sweatvida-story-heading">
          <Eyebrow>The opportunity</Eyebrow>
          <h2>The internet had plenty of workouts. Discovery was the problem.</h2>
        </div>
        <div className="sweatvida-story-copy">
          <p>
            Free workout content was abundant, but fragmented across instructors, channels,
            formats, and platforms. Finding the right class often required knowing exactly
            where to look.
          </p>
          <p>
            SweatVida turned that fragmented supply into a structured discovery experience.
            Visitors could browse and filter across yoga, HIIT, Pilates, barre, cardio dance,
            indoor cycling, meditation, and prenatal and postpartum fitness.
          </p>
          <p>
            The company’s role was not to create another workout subscription. It was to make
            the best existing free content easier to find and to introduce audiences to new
            instructors and formats.
          </p>
        </div>
      </section>

      <section className="sweatvida-build">
        <div className="section-shell">
          <div className="sweatvida-section-heading">
            <div>
              <Eyebrow>What I built</Eyebrow>
              <h2>A real digital product, brand, and distribution engine.</h2>
            </div>
            <p>
              I led the full company experience from concept and positioning through information
              architecture, content operations, partnerships, and organic acquisition.
            </p>
          </div>

          <div className="sweatvida-build-grid">
            {[
              ['01', 'Product & taxonomy', 'Designed a directory structured around category, duration, instructor, and channel so visitors could quickly narrow a large content universe.'],
              ['02', 'SEO & content strategy', 'Built pages around high-intent, long-tail searches tied to popular instructors, workout formats, durations, and audience needs.'],
              ['03', 'Brand & experience', 'Created an inclusive digital athletics brand focused on accessible movement, discovery, and supportive community.'],
              ['04', 'Partnership ecosystem', 'Developed relationships with instructors, brands, sponsors, and media partners around the platform and its audience.'],
            ].map(([number, title, copy]) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
              >
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="sweatvida-seo section-shell">
        <div>
          <Eyebrow>Core learning</Eyebrow>
          <h2>SEO became the distribution strategy.</h2>
        </div>
        <div>
          <blockquote>
            Long-tail search allowed SweatVida to reach specific audiences already looking for
            workouts from the instructors and formats they loved.
          </blockquote>
          <p>
            Rather than competing only for broad terms such as “home workouts,” the content
            architecture created highly specific entry points. Instructor names, workout type,
            duration, intensity, and audience need became a compounding organic acquisition system.
          </p>
          <div className="sweatvida-keywords">
            <span>Instructor-led search</span>
            <span>Workout type</span>
            <span>Duration</span>
            <span>Audience need</span>
            <span>Organic discovery</span>
          </div>
        </div>
      </section>

      <section className="sweatvida-visuals sweatvida-visuals-full section-shell">
        <motion.figure
          className="sweatvida-filter-figure sweatvida-filter-20"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .18 }}
        >
          <img src="/ventures/sweatvida/sweatvida-20min-filter.png" alt="SweatVida filtered view showing 20-minute workouts" />
          <figcaption>
            <span>Discovery architecture</span>
            An example filtered view focused on 20-minute workouts across category, instructor, and channel.
          </figcaption>
        </motion.figure>
      </section>

      <section className="sweatvida-outcomes">
        <div className="section-shell">
          <div className="sweatvida-section-heading">
            <div>
              <Eyebrow>Outcome & reflection</Eyebrow>
              <h2>Serious company-building lessons without forcing monetization.</h2>
            </div>
            <p>
              SweatVida remained a non-monetized product, but it was operated as a real company:
              with an audience, differentiated experience, editorial engine, partnerships, and
              a repeatable acquisition strategy.
            </p>
          </div>

          <div className="sweatvida-outcome-grid">
            <div><strong>2020–2023</strong><span>Company timeline</span></div>
            <div><strong>8</strong><span>Core workout categories</span></div>
            <div><strong>4</strong><span>Primary filter dimensions</span></div>
            <div><strong>Organic-first</strong><span>Growth strategy</span></div>
          </div>

          <div className="sweatvida-reflection">
            <p>
              The most durable takeaway was that distribution can be designed into the product.
              SweatVida showed me how a thoughtful taxonomy and long-tail keyword strategy could
              generate substantial traffic from precise, high-intent audiences.
            </p>
          </div>
        </div>
      </section>

      <section className="next-project section-shell">
        <p>Next company</p>
        <Link to={`/ventures/${nextProject.slug}`}>
          {nextProject.name}<ArrowRight />
        </Link>
      </section>
    </PageTransition>
  )
}



function YumYummyCaseStudy({ project }) {
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <PageTransition>
      <section className="yumyummy-hero">
        <div className="section-shell yumyummy-hero-grid">
          <motion.div
            className="yumyummy-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
          >
            <Link className="back-link" to="/ventures">← All ventures</Link>
            <Eyebrow>Company case study · Infant feeding product</Eyebrow>
            <img className="yumyummy-logo" src="/ventures/yumyummy/yumyummy-logo.png" alt="YumYummy" />
            <h1>Safer, softer pouch tops for babies and toddlers.</h1>
            <p>
              YumYummy was a 2024 consumer-product venture built around universal silicone pouch tops
              designed to make food pouches easier for little hands to hold and gentler on little mouths.
            </p>
            <p>
              The concept was developed for a fast Amazon launch, but I ultimately chose not to
              commercialize it after testing, safety review, and a deeper look at the liability profile
              of baby products.
            </p>
          </motion.div>

          <motion.div
            className="yumyummy-hero-visual"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .55, delay: .08 }}
          >
            <img className="yumyummy-hero-photo" src="/ventures/yumyummy/hero-main.png" alt="YumYummy product packaging lineup" />
          </motion.div>
        </div>

        <div className="section-shell yumyummy-facts">
          <div><strong>Founder</strong><span>Role</span></div>
          <div><strong>2024</strong><span>Timeline</span></div>
          <div><strong>Amazon-first</strong><span>Launch thesis</span></div>
          <div><strong>Paused before launch</strong><span>Outcome</span></div>
        </div>
      </section>

      <section className="yumyummy-opportunity section-shell">
        <div className="yumyummy-opportunity-copy">
          <Eyebrow>The opportunity</Eyebrow>
          <h2>Food pouches were convenient, but the user experience for babies was not thoughtfully designed.</h2>
          <p>
            Many baby and toddler pouches rely on hard plastic spouts. I saw an opportunity to create a
            softer silicone attachment that improved comfort, encouraged self-feeding, and worked across
            the pouch brands parents already bought.
          </p>
          <p>
            The resulting concept focused on universal compatibility, safety-minded materials, and a design
            simple enough to merchandise clearly in an Amazon-first consumer launch.
          </p>
        </div>
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .18 }}
        >
          <img src="/ventures/yumyummy/child-happybaby.jpg" alt="Young child using a YumYummy pouch top on a baby food pouch" />
          <figcaption>Real-world use with young children helped validate comfort, grip, and usability.</figcaption>
        </motion.figure>
      </section>

      <section className="yumyummy-solution">
        <div className="section-shell">
          <div className="yumyummy-section-heading">
            <div>
              <Eyebrow>Product concept</Eyebrow>
              <h2>A small product with a very clear job to do.</h2>
            </div>
            <p>
              YumYummy pouch tops were built as universal silicone accessories intended to fit common food-pouch
              brands, protect tender gums, and offer both open-flow and spill-proof options.
            </p>
          </div>

          <div className="yumyummy-solution-grid">
            <motion.figure
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
            >
              <img src="/ventures/yumyummy/feature-diagram.jpg" alt="YumYummy product diagram showing open flow and spill-proof features" />
              <figcaption><span>Functional design</span>Open-flow and spill-proof top options, a soft spout, and inner ribbing to secure the top in place.</figcaption>
            </motion.figure>
            <motion.figure
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
            >
              <img src="/ventures/yumyummy/package-hand.png" alt="Hand holding YumYummy pouch-top packaging" />
              <figcaption><span>Retail packaging</span>Amazon-ready packaging created to communicate the product clearly and quickly on a digital shelf.</figcaption>
            </motion.figure>
          </div>

          <div className="yumyummy-benefits-grid">
            <figure>
              <img src="/ventures/yumyummy/benefits-happybaby.jpg" alt="YumYummy benefits: baby-led weaning, universal pouch compatibility, and gum protection" />
            </figure>
            <figure>
              <img src="/ventures/yumyummy/benefits-siggis.jpg" alt="YumYummy materials and safety benefit graphic" />
            </figure>
          </div>
        </div>
      </section>


      <section className="yumyummy-packaging">
        <div className="section-shell">
          <div className="yumyummy-section-heading">
            <div>
              <Eyebrow>Packaging system</Eyebrow>
              <h2>A playful shelf presence built to explain the product in seconds.</h2>
            </div>
            <p>
              The packaging translated a small, unfamiliar accessory into an immediately understandable product family.
              Color separated open-flow, spill-proof, and variety formats while the front panels made the use case clear at a glance.
            </p>
          </div>

          <div className="yumyummy-package-family yumyummy-package-family--four">
            <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }}>
              <img src="/ventures/yumyummy/open-flow-front-v2.png" alt="YumYummy open-flow pouch-top front package artwork" />
              <figcaption><span>Open-flow top</span>Front packaging for the four-pack with the soft pink palette and produce-led illustration system.</figcaption>
            </motion.figure>
            <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }}>
              <img src="/ventures/yumyummy/spill-proof-front-v2.png" alt="YumYummy spill-proof pouch-top front package artwork" />
              <figcaption><span>Spill-proof top</span>The red variant differentiates the spill-proof model while staying consistent with the core brand system.</figcaption>
            </motion.figure>
            <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }}>
              <img src="/ventures/yumyummy/variety-pack-v2.png" alt="YumYummy variety pack package artwork" />
              <figcaption><span>Variety pack</span>A mint and teal two-pack combining both product formats for an easy trial SKU.</figcaption>
            </motion.figure>
            <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }}>
              <img src="/ventures/yumyummy/open-flow-back-rotated.png" alt="YumYummy back panel package artwork" />
              <figcaption><span>Back panel</span>Benefit-led back-of-pack communication with usage guidance, materials, and compliance information.</figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="yumyummy-build section-shell">
        <div className="yumyummy-section-heading">
          <div>
            <Eyebrow>What I built</Eyebrow>
            <h2>From product concept through packaging, testing, and launch evaluation.</h2>
          </div>
          <p>
            Although I initially approached YumYummy as a lightweight side venture, the project quickly grew into a real
            product-development and commercialization exercise.
          </p>
        </div>

        <div className="yumyummy-build-grid">
          {[
            ['01', 'Product design', 'Developed the silicone pouch-top concept and worked through model variations intended for infant and toddler feeding.'],
            ['02', 'Brand & packaging', 'Created the YumYummy brand expression, product packaging, and Amazon-ready product presentation.'],
            ['03', 'Testing & compliance', 'Navigated third-party testing and assessed safety considerations associated with baby and toddler consumer products.'],
            ['04', 'Commercial judgment', 'Made the deliberate decision not to launch commercially when the risk, redesign effort, and liability profile no longer fit the original thesis.'],
          ].map(([number, title, copy]) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="yumyummy-validation">
        <div className="section-shell">
          <div className="yumyummy-section-heading">
            <div>
              <Eyebrow>Use testing & merchandising</Eyebrow>
              <h2>The concept worked well in real life and photographed well for retail, too.</h2>
            </div>
            <p>
              The product tested well in everyday use with my own children, and the brand assets showed that the concept could be packaged,
              merchandised, and explained simply for parents shopping online.
            </p>
          </div>

          <div className="yumyummy-validation-grid">
            <figure className="wide"><img src="/ventures/yumyummy/child-kirkland.jpg" alt="Baby using a YumYummy pouch top on a food pouch" /></figure>
            <figure><img src="/ventures/yumyummy/four-tops.jpg" alt="Four YumYummy pouch tops on a white background" /></figure>
            <figure><img src="/ventures/yumyummy/single-top.png" alt="Single YumYummy pouch top product image" /></figure>
          </div>
        </div>
      </section>

      <section className="yumyummy-outcome section-shell">
        <div className="yumyummy-outcome-copy">
          <Eyebrow>Commercial outcome</Eyebrow>
          <h2>A thoughtful decision to stop before launch.</h2>
          <p>
            One of the two product models failed part of the third-party testing tied to CPSC small-parts regulation.
            While redesign was possible, the project had already consumed more time than its original “design it and list it on Amazon”
            thesis justified.
          </p>
          <p>
            More importantly, the experience made the liability profile of the baby-products category feel much more real. I chose not to
            commercialize the product rather than force a launch in a category where safety scrutiny and downside risk are high.
          </p>
        </div>
        <div className="yumyummy-outcome-note">
          <span>What the project taught me</span>
          <p>
            Even “simple” consumer products can become sophisticated operational and regulatory exercises once they enter the world of testing,
            compliance, and products meant for infants.
          </p>
        </div>
      </section>

      <section className="yumyummy-reflection">
        <div className="section-shell yumyummy-reflection-grid">
          <div>
            <Eyebrow>Founder reflection</Eyebrow>
            <h2>Not every strong concept should become a commercial business.</h2>
          </div>
          <blockquote>
            YumYummy was a good reminder that product-market appeal is only one part of the decision. The best founder move can also be knowing when not to launch.
          </blockquote>
        </div>
      </section>

      <section className="next-project section-shell">
        <p>Next company</p>
        <Link to={`/ventures/${nextProject.slug}`}>
          {nextProject.name}<ArrowRight />
        </Link>
      </section>
    </PageTransition>
  )
}

function PixiCyclingCaseStudy({ project }) {
  const pixiMedia = mediaItems.filter(item => item.title !== 'Marketing Analytics with Christina Inge')
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <PageTransition>
      <section className="pixi-hero">
        <div className="section-shell pixi-hero-grid">
          <motion.div
            className="pixi-hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
          >
            <Link className="back-link" to="/ventures">← All ventures</Link>
            <Eyebrow>Company case study · Technical apparel</Eyebrow>
            <div className="pixi-wordmark" aria-label="Pixi Cycling">PIXI</div>
            <h1>Technical cycling apparel made to go from bike to brunch.</h1>
            <p>
              Pixi Cycling created women’s leggings and shorts with a patented detachable chamois
              liner, combining cycling comfort with the versatility of modern athleisure.
            </p>
            <div className="pixi-hero-actions">
              <a
                className="button pixi-download-button"
                href="/ventures/pixi-cycling/Pixi-Pitch-Deck-2018.pptx"
                download
              >
                Download 2018 pitch deck <ArrowRight size={18} />
              </a>
              <a className="pixi-text-link" href="#pixi-media">
                View media coverage ↓
              </a>
            </div>
          </motion.div>

          <motion.div
            className="pixi-cover-frame"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .55, delay: .08 }}
          >
            <img src="/ventures/pixi-cycling/slide-01.jpg" alt="Pixi Cycling 2018 pitch deck cover" />
          </motion.div>
        </div>

        <div className="section-shell pixi-facts">
          <div><strong>Founder & CEO</strong><span>Role</span></div>
          <div><strong>Mar 2016–Feb 2022</strong><span>Timeline</span></div>
          <div><strong>1,000+</strong><span>Units sold</span></div>
          <div><strong>2 categories</strong><span>Amazon’s Choice</span></div>
        </div>
      </section>

      <section className="pixi-opportunity section-shell">
        <div className="pixi-opportunity-copy">
          <Eyebrow>The opportunity</Eyebrow>
          <h2>Cycling apparel solved for the ride, but not for the rest of a woman’s day.</h2>
          <p>
            Traditional padded cycling bottoms were often uncomfortable off the bike, visually
            single-purpose, and difficult to integrate into an active lifestyle. Women needed
            technical protection while riding without being locked into “diaper butt” once the
            ride ended.
          </p>
        </div>
        <motion.figure
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .18 }}
        >
          <img src="/ventures/pixi-cycling/slide-04.jpg" alt="Pixi Cycling problem slide" />
          <figcaption>Problem framing from the 2018 pitch deck.</figcaption>
        </motion.figure>
      </section>

      <section className="pixi-product">
        <div className="section-shell">
          <div className="pixi-section-heading">
            <div>
              <Eyebrow>Product innovation</Eyebrow>
              <h2>One garment. Two modes.</h2>
            </div>
            <p>
              The Ride & Recreation collection paired technical leggings and shorts with TushCush,
              a removable contoured protective pad. Wear it for cycling, then remove it for yoga,
              running, errands, or brunch.
            </p>
          </div>

          <div className="pixi-product-grid">
            <motion.figure
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
            >
              <img src="/ventures/pixi-cycling/slide-08.jpg" alt="Pixi Ride and Recreation Legging" />
              <figcaption><span>Flagship product</span>Wear the leggings with or without the detachable liner.</figcaption>
            </motion.figure>
            <motion.figure
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .15 }}
            >
              <img src="/ventures/pixi-cycling/slide-09.jpg" alt="Pixi TushCush detachable liner" />
              <figcaption><span>Proprietary technology</span>A discreet, breathable, anti-chafing, high-density cushion.</figcaption>
            </motion.figure>
          </div>

          <div className="pixi-patent-note">
            <span>Intellectual property</span>
            <p>
              Authored worldwide provisional and non-provisional utility patent applications for
              the proprietary wearable technology: PCT/US2017/031340 and US 62/332,802.
            </p>
          </div>
        </div>
      </section>

      <section className="pixi-build section-shell">
        <div className="pixi-section-heading">
          <div>
            <Eyebrow>What I built</Eyebrow>
            <h2>End-to-end ownership from product concept through commercial execution.</h2>
          </div>
          <p>
            I managed cross-functional work spanning technical apparel, manufacturing, brand,
            marketing, partnerships, e-commerce, retail, intellectual property, and sales.
          </p>
        </div>

        <div className="pixi-build-grid">
          {[
            ['01', 'Product & IP', 'Led product concept, design, technical development, sourcing, manufacturing, and patent strategy for the detachable liner system.'],
            ['02', 'Brand & GTM', 'Created the bike-to-brunch positioning and launched through PR, crowdfunding, brand storytelling, and multi-platform commerce.'],
            ['03', 'Commerce & retail', 'Managed e-commerce launches, Amazon, retail pop-ups, events, and selective wholesale pathways across cycling and fitness.'],
            ['04', 'Community & partnerships', 'Built collaborations with wellness brands, social influencers, media, and more than 80 brand ambassadors.'],
          ].map(([number, title, copy]) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pixi-gtm">
        <div className="section-shell">
          <div className="pixi-section-heading">
            <div>
              <Eyebrow>Go-to-market</Eyebrow>
              <h2>A direct-to-consumer brand supported by events, ambassadors, and selective distribution.</h2>
            </div>
            <p>
              The commercial strategy connected product education, founder storytelling, community
              credibility, and high-touch customer experiences across online and offline channels.
            </p>
          </div>

          <div className="pixi-gtm-visuals">
            <figure>
              <img src="/ventures/pixi-cycling/slide-22.jpg" alt="Pixi Cycling business model" />
              <figcaption>Online sales paired with selective wholesale distribution.</figcaption>
            </figure>
            <figure>
              <img src="/ventures/pixi-cycling/slide-23.jpg" alt="Pixi Cycling customer acquisition strategy" />
              <figcaption>PR, pop-ups, ambassadors, influencers, incentives, and community events.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pixi-traction section-shell">
        <div className="pixi-traction-intro">
          <Eyebrow>Commercial traction</Eyebrow>
          <h2>Evidence that a highly specific product could earn trust in a crowded category.</h2>
        </div>
        <div className="pixi-stat-grid">
          <div><strong>1,000+</strong><span>Units sold</span></div>
          <div><strong>Amazon’s Choice</strong><span>Women’s cycling shorts</span></div>
          <div><strong>Amazon’s Choice</strong><span>Women’s cycling leggings</span></div>
          <div><strong>80+</strong><span>Brand ambassadors</span></div>
        </div>
        <div className="pixi-traction-note">
          <p>
            The launch combined crowdfunding, multi-platform e-commerce, pop-up retail, public
            relations, influencer partnerships, and a community of wellness and cycling advocates.
          </p>
        </div>
      </section>

      <section className="pixi-deck">
        <div className="section-shell">
          <div className="pixi-section-heading">
            <div>
              <Eyebrow>Company materials</Eyebrow>
              <h2>Selected pages from the 2018 pitch deck.</h2>
            </div>
            <div className="pixi-deck-copy">
              <p>
                The deck captures the original consumer problem, product differentiation,
                commercial model, acquisition strategy, and early brand traction.
              </p>
              <a
                className="button pixi-download-button"
                href="/ventures/pixi-cycling/Pixi-Pitch-Deck-2018.pptx"
                download
              >
                Download full pitch deck <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="pixi-deck-grid">
            {[
              ['/ventures/pixi-cycling/slide-06.jpg', 'Positioning'],
              ['/ventures/pixi-cycling/slide-24.jpg', 'Early brand traction'],
              ['/ventures/pixi-cycling/slide-29.jpg', 'Company story'],
            ].map(([src, label]) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .15 }}
              >
                <img src={src} alt={`Pixi Cycling pitch deck: ${label}`} />
                <figcaption>{label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pixi-media section-shell" id="pixi-media">
        <div className="pixi-section-heading">
          <div>
            <Eyebrow>Media archive</Eyebrow>
            <h2>Coverage of the product, founder story, and company launch.</h2>
          </div>
          <p>
            Most of the earliest media in the site archive documents Pixi Cycling’s launch,
            product innovation, and approach to women’s technical apparel.
          </p>
        </div>

        <div className="pixi-media-list">
          {pixiMedia.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ delay: index * .035 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon />
                <div>
                  <small>{item.type} · {item.outlet}</small>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </div>
                <ExternalLink />
              </motion.a>
            )
          })}
        </div>
      </section>

      <section className="pixi-reflection">
        <div className="section-shell pixi-reflection-grid">
          <div>
            <Eyebrow>Founder reflection</Eyebrow>
            <h2>Pixi was an education in building a physical product company from first principles.</h2>
          </div>
          <blockquote>
            It required translating a real consumer pain point into patented product design,
            manufacturing, positioning, distribution, community, and measurable sales.
          </blockquote>
        </div>
      </section>

      <section className="next-project section-shell">
        <p>Next company</p>
        <Link to={`/ventures/${nextProject.slug}`}>
          {nextProject.name}<ArrowRight />
        </Link>
      </section>
    </PageTransition>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <NotFound />
  if (project.slug === 'sweatvida') return <SweatVidaCaseStudy project={project} />
  if (project.slug === 'pixi-cycling') return <PixiCyclingCaseStudy project={project} />
  if (project.slug === 'yumyummy') return <YumYummyCaseStudy project={project} />
  return (
    <PageTransition>
      <section className={`project-detail-hero ${project.accent}`}>
        <div className="section-shell project-detail-grid">
          <div>
            <Link className="back-link" to="/ventures">← All ventures</Link>
            <Eyebrow>{project.eyebrow}</Eyebrow>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
          </div>
          <div className="project-facts">
            <div><span>Role</span><strong>{project.role}</strong></div>
            <div><span>Timeline</span><strong>{project.year}</strong></div>
            <div><span>Status</span><strong>{project.status}</strong></div>
          </div>
        </div>
      </section>
      <section className="project-body section-shell">
        <div className="project-overview">
          <Eyebrow>Company overview</Eyebrow>
          <h2>{project.overview}</h2>
          {project.url !== '#' && <ArrowLink to={project.url} external>Visit website</ArrowLink>}
        </div>
        <div className="work-list">
          <Eyebrow>What I built</Eyebrow>
          {project.work.map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}
        </div>
      </section>
      <section className="gallery-shell section-shell">
        <div className="gallery-placeholder wide"><span>Company image / product screenshot</span></div>
        <div className="gallery-placeholder"><span>Brand or company-building image</span></div>
        <div className="gallery-placeholder"><span>Outcome, launch, or press image</span></div>
      </section>
      <section className="next-project section-shell">
        <p>Next venture</p>
        <Link to={`/ventures/${projects[(projects.indexOf(project) + 1) % projects.length].slug}`}>
          {projects[(projects.indexOf(project) + 1) % projects.length].name}<ArrowRight />
        </Link>
      </section>
    </PageTransition>
  )
}

function Advisory() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredClients = activeFilter === 'All'
    ? advisoryClients
    : advisoryClients.filter(client => client.tags.includes(activeFilter))

  const filterCount = filter => filter === 'All'
    ? advisoryClients.length
    : advisoryClients.filter(client => client.tags.includes(filter)).length

  return (
    <PageTransition>
      <section className="advisory-hero section-shell">
        <motion.div
          className="advisory-copy"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            <Eyebrow>Business Advisory</Eyebrow>
          </motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } }}>
            Strategic support for founders building the next version of their business.
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}>
            I work with founders and small-business leaders on growth, positioning, customer insight, marketing, operations, and the decisions that unlock the next stage.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            <Link className="button button-dark" to="/contact">Inquire about advisory <ArrowRight size={18} /></Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="advisory-photo"
          initial={{ opacity: 0, scale: .985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8, delay: .08 }}
        >
          <img src="/images/077.jpg" alt="Emily Welsch standing beside a sunlit window" />
          <div className="advisory-photo-caption">Strategic clarity · Practical action</div>
        </motion.div>
      </section>

      <section className="advisory-services section-shell">
        <div className="advisory-services-intro">
          <div>
            <Eyebrow>How I help</Eyebrow>
            <h2>Clear thinking, grounded in real operating experience.</h2>
          </div>
          <p>Each engagement is shaped around the founder and the moment. The work combines rigorous strategy, thoughtful accountability, and practical next steps that can actually be implemented.</p>
        </div>
        <div className="advisory-services-grid">
          {['Go-to-market strategy', 'Positioning & narrative', 'Customer insight', 'Founder decision support', 'Growth & marketing', 'Operations & planning'].map((service, i) => (
            <motion.article
              key={service}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ delay: i * .045 }}
            >
              <span>0{i + 1}</span>
              <h3>{service}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="advisory-clients section-shell">
        <div className="advisory-section-heading">
          <div>
            <Eyebrow>Selected Clients</Eyebrow>
            <h2>Businesses I’ve helped move forward.</h2>
          </div>
          <p>Advisory work across healthcare, consumer products, retail, design, wellness, services, technology, and community organizations.</p>
        </div>

        <div className="client-filter-block">
          <div className="client-filter-label">Filter by sector</div>
          <div className="client-filter-row" role="group" aria-label="Filter selected clients">
            {advisoryFilters.map(filter => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'client-filter active' : 'client-filter'}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                <span>{filter}</span>
                <small>{filterCount(filter)}</small>
              </button>
            ))}
          </div>
          <div className="client-filter-status" aria-live="polite">
            {activeFilter === 'All'
              ? `Showing all ${filteredClients.length} clients`
              : `Showing ${filteredClients.length} ${activeFilter} ${filteredClients.length === 1 ? 'client' : 'clients'}`}
          </div>
        </div>

        <motion.div layout className="advisory-client-grid">
          <AnimatePresence mode="popLayout">
            {filteredClients.map(client => (
              <motion.a
                layout
                className="advisory-client-card"
                href={client.url}
                target="_blank"
                rel="noreferrer"
                key={client.name}
                initial={{ opacity: 0, scale: .97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: .97, y: 8 }}
                transition={{ duration: .28 }}
              >
                <div className={`advisory-client-logo ${client.logoShape} ${client.logoClass || ''}`}>
                  {client.logo
                    ? <img src={client.logo} alt={`${client.name} logo`} />
                    : <span>{client.logoText}</span>}
                </div>
                <div className="advisory-client-title">
                  <h3>{client.name}</h3>
                  <ExternalLink size={18} />
                </div>
                <p>{client.work}</p>
                <div className="advisory-client-tags">
                  {client.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="advisory-testimonials">
        <div className="section-shell">
          <div className="advisory-testimonial-heading">
            <div>
              <Eyebrow>Client Perspective</Eyebrow>
              <h2>What founders say about the work.</h2>
            </div>
            <p>Selected feedback from former advisory clients. Quotes have been lightly edited for length and clarity.</p>
          </div>
          <div className="advisory-testimonial-grid">
            {advisoryTestimonials.map((testimonial, index) => (
              <motion.article
                className={`advisory-testimonial-card ${testimonial.tone}${testimonial.featured ? ' featured' : ''}`}
                key={testimonial.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .18 }}
                transition={{ delay: index * .045 }}
              >
                <div className="advisory-testimonial-top">
                  <span className="advisory-quote-mark">“</span>
                  <div className={`advisory-testimonial-logo ${testimonial.logoShape} ${testimonial.name.startsWith('Rachel Marriott') ? 'simi-logo' : ''}`}>
                    <img src={testimonial.logo} alt="" />
                  </div>
                </div>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="advisory-result"><span>Result</span><p>{testimonial.result}</p></div>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.title}</span>
                </footer>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="advisory-cta">
        <div className="section-shell advisory-cta-inner">
          <div>
            <Eyebrow>Work with Emily</Eyebrow>
            <h2>Bring the decision you’ve been circling.</h2>
          </div>
          <Link className="button button-dark" to="/contact">Start a conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </PageTransition>
  )
}


function Media() {
  const [mediaFilter, setMediaFilter] = useState('All')
  const mediaFilters = ['All', 'Podcast', 'Video', 'Press']
  const visibleMediaItems =
    mediaFilter === 'All'
      ? mediaItems
      : mediaItems.filter(item => item.type === mediaFilter)

  return (
    <PageTransition>
      <section className="media-hero section-shell">
        <div className="media-hero-copy">
          <Eyebrow>Speaking · Podcasts · Video · Press</Eyebrow>
          <h1>Ideas shared in public.</h1>
          <p>
            Emily welcomes speaking engagements, workshops, podcast and video interviews,
            and press conversations on entrepreneurship, business strategy, company building,
            and clinical research. Her experience spans 75+ industry events and founder programs
            at leading universities and accelerators.
          </p>
          <Link className="button button-dark media-inquiry-button" to="/contact">
            Media & speaking inquiries <ArrowRight size={18} />
          </Link>
        </div>
        <img src="/images/059.jpg" alt="Emily Welsch seated in a bright living room" />
      </section>

      <section className="media-archive section-shell">
        <div className="media-filter-bar">
          <div>
            <Eyebrow>Explore the archive</Eyebrow>
            <div className="media-filter-buttons" role="group" aria-label="Filter media appearances">
              {mediaFilters.map(filter => {
                const count =
                  filter === 'All'
                    ? mediaItems.length
                    : mediaItems.filter(item => item.type === filter).length

                return (
                  <button
                    type="button"
                    key={filter}
                    className={`media-filter ${mediaFilter === filter ? 'active' : ''}`}
                    onClick={() => setMediaFilter(filter)}
                    aria-pressed={mediaFilter === filter}
                  >
                    <span>{filter}</span>
                    <small>{count}</small>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="media-filter-status" aria-live="polite">
            Showing {visibleMediaItems.length} {visibleMediaItems.length === 1 ? 'item' : 'items'}
          </div>
        </div>

        <div className="media-list">
          <AnimatePresence mode="popLayout">
            {visibleMediaItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: .3, delay: index * .035 }}
                >
                  <div className="media-index">{String(index + 1).padStart(2, '0')}</div>
                  <Icon className="media-icon" />
                  <div className="media-main">
                    <span className={`media-type media-type-${item.type.toLowerCase()}`}>{item.type}</span>
                    <h2>{item.title}</h2>
                    <p>{item.outlet}{item.description ? ` · ${item.description}` : ''}</p>
                  </div>
                  <div className="media-year">{item.date}</div>
                  <ArrowRight />
                </motion.a>
              )
            })}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  )
}


function Contact() {
  return (
    <PageTransition>
      <section className="contact-layout section-shell">
        <div className="contact-copy">
          <Eyebrow>Contact</Eyebrow>
          <h1>Let’s start with what you’re building.</h1>
          <p>Use the form for advisory, investment, speaking, podcast, press, or general inquiries.</p>
          <a className="contact-email" href="mailto:emily@emilywelsch.co"><Mail size={19} /><span>emily@emilywelsch.co</span></a>
          <div className="contact-note">
            <span>Typical inquiries</span>
            <p>Founder advisory, growth strategy, angel investment opportunities, partnerships, speaking engagements, and media conversations.</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <div className="field-row">
            <label>First name<input name="firstName" required /></label>
            <label>Last name<input name="lastName" required /></label>
          </div>
          <label>Email<input type="email" name="email" required /></label>
          <label>Company or organization<input name="company" /></label>
          <label>Inquiry type
            <select name="type" defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Business advisory</option>
              <option>Angel investment</option>
              <option>Speaking request</option>
              <option>Podcast or press</option>
              <option>General inquiry</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows="7" required /></label>
          <button className="button button-dark" type="submit">Send inquiry <ArrowRight size={18} /></button>
          <p className="form-note">Form submission will be connected before launch.</p>
        </form>
      </section>
    </PageTransition>
  )
}

function NotFound() {
  return <PageTransition><section className="page-hero section-shell"><Eyebrow>404</Eyebrow><h1>Page not found.</h1><ArrowLink to="/">Return home</ArrowLink></section></PageTransition>
}

function Footer() {
  return (
    <footer>
      <div className="footer-top section-shell">
        <h2>Build thoughtfully.<br />Move decisively.</h2>
        <Link to="/contact" className="round-link" aria-label="Contact Emily"><ArrowRight /></Link>
      </div>
      <div className="footer-bottom section-shell">
        <div>© {new Date().getFullYear()} Emily Welsch</div>
        <div className="footer-links">{nav.map(([href, label]) => <Link to={href} key={href}>{label}</Link>)}</div>
      </div>
    </footer>
  )
}

function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/ventures/:slug" element={<ProjectDetail />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>
)
