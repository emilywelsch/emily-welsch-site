import React, { useEffect, useMemo, useState } from 'react'
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
  BookOpen,
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
  { name: 'Investment One', initials: 'I1', sector: 'Digital health', url: 'https://example.com' },
  { name: 'Investment Two', initials: 'I2', sector: 'Enterprise AI', url: 'https://example.com' },
  { name: 'Investment Three', initials: 'I3', sector: 'Consumer', url: 'https://example.com' },
  { name: 'Investment Four', initials: 'I4', sector: 'Life sciences', url: 'https://example.com' },
  { name: 'Investment Five', initials: 'I5', sector: 'Marketplace', url: 'https://example.com' },
  { name: 'Investment Six', initials: 'I6', sector: 'SaaS', url: 'https://example.com' },
]

const advisoryClients = [
  { name: 'Former Client One', initials: 'C1', work: 'Go-to-market and commercial strategy', url: 'https://example.com' },
  { name: 'Former Client Two', initials: 'C2', work: 'Partnerships and growth strategy', url: 'https://example.com' },
  { name: 'Former Client Three', initials: 'C3', work: 'Founder and operating advisory', url: 'https://example.com' },
  { name: 'Former Client Four', initials: 'C4', work: 'Positioning and revenue operations', url: 'https://example.com' },
]

const mediaItems = [
  { type: 'Speaking', icon: Mic2, title: 'Conference keynote or panel', outlet: 'Event name', year: '2026', url: 'https://example.com' },
  { type: 'Podcast', icon: Mic2, title: 'Podcast episode title', outlet: 'Podcast name', year: '2026', url: 'https://example.com' },
  { type: 'Press', icon: Newspaper, title: 'Featured article or profile', outlet: 'Publication name', year: '2025', url: 'https://example.com' },
  { type: 'Publication', icon: BookOpen, title: 'Essay or publication title', outlet: 'Publication platform', year: '2025', url: 'https://example.com' },
]

const nav = [
  ['/', 'Home'],
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
              <p>Logo-led investment cards link directly to each company. We can add filters when you share the final list.</p>
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
                  <div className="logo-placeholder">{company.initials}</div>
                  <div><h3>{company.name}</h3><p>{company.sector}</p></div>
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
  return (
    <PageTransition>
      <section className="advisory-hero section-shell">
        <div className="advisory-copy">
          <Eyebrow>Business Advisory</Eyebrow>
          <h1>Senior strategic support for consequential moments.</h1>
          <p>I work with select founders and leadership teams on go-to-market strategy, partnerships, positioning, revenue operations, and company-building decisions.</p>
          <Link className="button button-dark" to="/contact">Start a conversation <ArrowRight size={18} /></Link>
        </div>
        <motion.div className="advisory-photo" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
          <img src="/images/077.jpg" alt="Emily Welsch standing by a bright window" />
        </motion.div>
      </section>
      <section className="services section-shell">
        {['Go-to-market strategy', 'Partnership development', 'Founder advisory', 'Positioning and narrative', 'Revenue operations', 'Commercial planning'].map((service, i) => (
          <motion.div key={service} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}>
            <span>0{i + 1}</span><h3>{service}</h3>
          </motion.div>
        ))}
      </section>
      <section className="client-section section-shell">
        <div className="directory-title">
          <div><Eyebrow>Selected clients</Eyebrow><h2>Former advisory engagements</h2></div>
          <p>Replace these placeholders with client logos and links to company sites or case studies.</p>
        </div>
        <div className="investment-grid">
          {advisoryClients.map(client => (
            <a className="investment-card" href={client.url} target="_blank" rel="noreferrer" key={client.name}>
              <div className="logo-placeholder">{client.initials}</div>
              <div><h3>{client.name}</h3><p>{client.work}</p></div>
              <ExternalLink size={17} />
            </a>
          ))}
        </div>
      </section>
      <section className="testimonial-band">
        <div className="section-shell">
          <span className="quote-mark">“</span>
          <blockquote>Emily quickly understood the market, clarified our priorities, and gave us a practical path forward.</blockquote>
          <p>Former client name · CEO, Company</p>
        </div>
      </section>
    </PageTransition>
  )
}

function Media() {
  return (
    <PageTransition>
      <section className="media-hero section-shell">
        <div>
          <Eyebrow>Speaking · Podcasts · Press · Publications</Eyebrow>
          <h1>Ideas shared in public.</h1>
          <p>A searchable archive can come later. This first version creates a strong editorial home for appearances, interviews, and published work.</p>
        </div>
        <img src="/images/059.jpg" alt="Emily Welsch seated in a bright living room" />
      </section>
      <section className="media-list section-shell">
        {mediaItems.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.a href={item.url} target="_blank" rel="noreferrer" key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="media-index">0{i + 1}</div>
              <Icon />
              <div className="media-main"><span>{item.type}</span><h2>{item.title}</h2><p>{item.outlet}</p></div>
              <div className="media-year">{item.year}</div>
              <ArrowRight />
            </motion.a>
          )
        })}
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
          <div className="contact-email"><Mail size={19} /><span>you@yourdomain.com</span></div>
          <img src="/images/053.jpg" alt="Emily Welsch seated against a patterned wall" />
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
        <div className="footer-links">{nav.slice(1).map(([href, label]) => <Link to={href} key={href}>{label}</Link>)}</div>
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
