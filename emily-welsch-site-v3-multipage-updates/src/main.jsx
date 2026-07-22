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
    eyebrow: 'Founder project · Healthcare technology',
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
    slug: 'uncluttered-soul',
    name: 'Uncluttered Soul',
    eyebrow: 'Founder project · Personal growth',
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
    eyebrow: 'Founder project · Consumer',
    summary: 'A consumer venture with room for the full story, imagery, and links.',
    role: 'Owner',
    status: 'Selected work',
    year: 'Project archive',
    url: '#',
    accent: 'gold',
    overview:
      'This project page is intentionally structured as a case-study template so you can add the original challenge, what you created, and the results.',
    work: [
      'Concept and business development',
      'Brand and customer experience',
      'Operations and commercialization',
      'Project leadership',
    ],
  },
  {
    slug: 'pixi-cycling',
    name: 'Pixi Cycling',
    eyebrow: 'Founder project · Consumer brand',
    summary: 'An earlier entrepreneurial project and a useful chapter in the founder story.',
    role: 'Founder',
    status: 'Past project',
    year: 'Project archive',
    url: '#',
    accent: 'ink',
    overview:
      'A dedicated archive for the project’s origin, product or brand work, imagery, and the lessons that shaped later ventures.',
    work: [
      'Early-stage company building',
      'Product and brand development',
      'Customer discovery and market positioning',
      'End-to-end founder execution',
    ],
  },
]

const investments = [
  {
    name: 'Guava Health',
    logo: '/logos/guava-health.png',
    sector: 'Consumer health technology',
    round: 'Seed round',
    note: 'Participated in the company’s seed round.',
    url: 'https://guavahealth.com',
  },
  {
    name: 'Rogo',
    logoText: 'ROGO',
    sector: 'Enterprise AI for finance',
    round: 'Seed round SPV',
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

const advisoryFilters = ['All', 'Healthcare', 'Technology', 'Consumer', 'Retail', 'Creative', 'Community', 'Sustainability']

const mediaItems = [
  {
    type: 'Podcast',
    icon: Mic2,
    title: 'Protecting Your Peach with PIXI',
    outlet: 'Electric Runway Podcast',
    date: 'September 2017',
    url: 'https://electricrunway.com/protecting-peach-pixi/',
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
            <h3>Founder Projects</h3>
            <p>Companies and creative ventures I have built, led, or developed from the ground up.</p>
            <ArrowLink to="/ventures?view=built">View projects</ArrowLink>
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
        <p>This page brings the full portfolio together while preserving a clear distinction between founder projects and angel investments.</p>
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
              <div><Eyebrow>Built</Eyebrow><h2>Founder Projects</h2></div>
              <p>Each project opens into a dedicated case-study page with imagery, context, my role, and links.</p>
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
                  <div className={`investment-logo ${company.logo ? 'image' : 'wordmark'}`}>
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

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <NotFound />
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
          <Eyebrow>Overview</Eyebrow>
          <h2>{project.overview}</h2>
          {project.url !== '#' && <ArrowLink to={project.url} external>Visit website</ArrowLink>}
        </div>
        <div className="work-list">
          <Eyebrow>My work</Eyebrow>
          {project.work.map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}
        </div>
      </section>
      <section className="gallery-shell section-shell">
        <div className="gallery-placeholder wide"><span>Project image / product screenshot</span></div>
        <div className="gallery-placeholder"><span>Brand or process image</span></div>
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
                <div className={`advisory-client-logo ${client.logoShape}`}>
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
                  <div className={`advisory-testimonial-logo ${testimonial.logoShape}`}>
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
  const podcasts = mediaItems.filter(item => item.type === 'Podcast' || item.type === 'Video')
  const press = mediaItems.filter(item => item.type === 'Press')

  const renderMediaGroup = (items, startIndex = 0) => (
    <div className="media-list">
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="media-index">{String(startIndex + index + 1).padStart(2, '0')}</div>
            <Icon />
            <div className="media-main">
              <span>{item.type}</span>
              <h2>{item.title}</h2>
              <p>{item.outlet}{item.description ? ` · ${item.description}` : ''}</p>
            </div>
            <div className="media-year">{item.date}</div>
            <ArrowRight />
          </motion.a>
        )
      })}
    </div>
  )

  return (
    <PageTransition>
      <section className="media-hero section-shell">
        <div>
          <Eyebrow>Podcasts · Video · Press</Eyebrow>
          <h1>Ideas shared in public.</h1>
          <p>A single archive of conversations, interviews, and press coverage spanning entrepreneurship, product design, marketing, and company building.</p>
        </div>
        <img src="/images/059.jpg" alt="Emily Welsch seated in a bright living room" />
      </section>

      <section className="media-group section-shell">
        <div className="media-group-heading">
          <Eyebrow>Listen & watch</Eyebrow>
          <h2>Podcasts and video</h2>
        </div>
        {renderMediaGroup(podcasts)}
      </section>

      <section className="media-group section-shell">
        <div className="media-group-heading">
          <Eyebrow>Coverage</Eyebrow>
          <h2>Press</h2>
        </div>
        {renderMediaGroup(press, podcasts.length)}
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
