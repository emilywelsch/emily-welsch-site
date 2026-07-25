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
    eyebrow: 'Founder-built company · Clinical trial intelligence',
    summary: 'A data platform helping sponsors, CROs, sites, and investigators make better clinical research partner decisions.',
    role: 'Founder & CEO',
    status: 'Active company',
    year: '2023–present',
    url: 'https://clinbook.co',
    accent: 'clinbook',
    overview:
      'Clinbook combines clinical-trial history, investigator and site performance, claims, population data, reviews, and verified profile inputs in one decision layer.',
    work: [
      'Company strategy, positioning, and product direction',
      'Investigator, site, trial, and patient-intelligence architecture',
      'Data engineering, ratings, and profile-verification systems',
      'Go-to-market, partnerships, pricing, and company building',
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
    eyebrow: 'Founder-built company · Mindfulness technology',
    summary: 'A membership platform for meditation, sleep, journaling, and more intentional daily habits.',
    role: 'Founder',
    status: 'Live archive',
    year: '2023–2024',
    url: 'https://unclutteredsoul.co/',
    accent: 'uncluttered',
    logo: '/ventures/uncluttered-soul/uncluttered-soul-logo.png',
    overview:
      'Uncluttered Soul is a mindfulness and mental well-being platform designed to make rest, reflection, stress support, and intentional living easier to access in everyday life.',
    work: [
      'Brand, positioning, and membership product strategy',
      'Meditation, sleep, journaling, and mindful-living content architecture',
      'AI-generated narration and scalable audio-production workflow',
      'Subscription experience, free entry point, and ongoing content operations',
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



const productExperiments = [
  {
    slug: 'pitchit',
    name: 'Pitchit',
    eyebrow: 'Product experiment · Physical card game',
    summary: 'A startup card game for brewing new ideas through silly combinations, fast pitches, and a rotating judge.',
    image: '/ventures/pitchit/pitchit-hero.jpg',
    logo: '/ventures/pitchit/pitchit-logo.png',
    year: '2018',
    accent: 'pitchit-experiment',
  },
]

const codingProjects = [
  {
    slug: 'surfguru',
    name: 'SurfGuru',
    eyebrow: 'Coding project · Ruby CLI gem',
    summary: 'A command-line application for exploring current surf conditions at popular beaches around the world.',
    image: '/ventures/coding/surfguru-cover.jpg',
    logo: '/ventures/coding/surfguru-logo.png',
    year: '2018',
    accent: 'surfguru-code',
    github: 'https://github.com/emilywelsch/surfguru',
    video: 'https://www.youtube.com/watch?v=LVinCJ2QzOM',
    heroTitle: 'A command-line guide to surf conditions around the world.',
    description:
      'SurfGuru helps surfers browse beaches by continent and country, then inspect the current conditions and ideal statistics for a specific break.',
    facts: [
      ['Format', 'CLI data gem'],
      ['Language', 'Ruby'],
      ['Timeline', '2018'],
      ['Data source', 'Surfline'],
    ],
    features: [
      ['Location-first discovery', 'Move from continent to country to individual beaches through a guided command-line flow.'],
      ['Detailed surf conditions', 'Review surf height, water and air temperature, swell direction, wind conditions, and ideal conditions for each beach.'],
      ['Direct source access', 'Return a browser-ready link for the selected beach so users can continue into the original Surfline experience.'],
    ],
    architecture: [
      ['Domain model', 'Continent, Country, and Beach objects organize a large global beach directory into a navigable hierarchy.'],
      ['Scraping layer', 'A Nokogiri-powered scraper retrieves and structures information published on Surfline pages.'],
      ['Interactive CLI', 'A dedicated command-line interface manages prompts, selections, validation, navigation, and formatted results.'],
    ],
    stack: ['Ruby', 'RubyGems', 'Nokogiri', 'Rake', 'Bundler', 'RSpec', 'Pry', 'CLI'],
    installation: [
      'git clone https://github.com/emilywelsch/surfguru.git',
      'cd surfguru/',
      'rake install',
      'surfguru',
    ],
    noteEyebrow: 'Distribution & data rights',
    noteTitle: 'Built as a gem, intentionally not published.',
    note:
      'SurfGuru was structured as a Ruby gem but was not published to RubyGems while permission from Surfline remained unresolved. Surf condition content belongs to Surfline/Wavetrak and the project remains an open-source technical demonstration.',
  },
  {
    slug: 'shoplist',
    name: 'ShopList',
    eyebrow: 'Coding project · Sinatra web application',
    summary: 'A database-backed shopping-list app for creating, editing, and sharing lists with groups.',
    image: '/ventures/coding/shoplist-cover.jpg',
    logo: '/ventures/coding/shoplist-logo.png',
    year: '2018',
    accent: 'shoplist-code',
    github: 'https://github.com/emilywelsch/shoplist',
    video: 'https://www.youtube.com/watch?v=2UyMYrLx7Bk&t=1247s',
    heroTitle: 'A shared shopping-list application built around full-stack CRUD.',
    description:
      'ShopList is a Sinatra application that lets users create, read, update, delete, and share shopping-list content through a simple content-management workflow.',
    facts: [
      ['Format', 'Web application'],
      ['Framework', 'Sinatra'],
      ['Timeline', '2018'],
      ['Database', 'SQLite'],
    ],
    features: [
      ['List creation', 'Users can create and manage shopping-list content through straightforward browser-based forms.'],
      ['Edit and delete workflows', 'Each item moves through a complete CRUD lifecycle with database persistence.'],
      ['Shared organization', 'The product is structured around users and collaborative list sharing for household or group use.'],
    ],
    architecture: [
      ['Sinatra controllers', 'Application, user, and item controllers separate authentication, routing, and list-management responsibilities.'],
      ['ActiveRecord data layer', 'User and item models persist through migrations, a schema, and SQLite databases for development and testing.'],
      ['Server-rendered interface', 'ERB views and CSS provide the browser experience while bcrypt supports credential handling.'],
    ],
    stack: ['Ruby', 'Sinatra', 'ActiveRecord', 'SQLite', 'ERB', 'bcrypt', 'RSpec', 'Capybara', 'Rack::Test'],
    installation: [
      'git clone https://github.com/emilywelsch/shoplist.git',
      'cd shoplist/',
      'bundle install',
      'rake db:migrate',
      'shotgun',
    ],
    noteEyebrow: 'Learning objective',
    noteTitle: 'A compact demonstration of full-stack application structure.',
    note:
      'ShopList was designed to illustrate the relationship between routes, controllers, models, views, authentication, database migrations, and the four core CRUD actions inside a simple content-management product.',
  },
]


const builtPortfolio = [
  {
    slug: 'clinbook',
    name: 'Clinbook',
    logo: '/ventures/clinbook/clinbook-logo-purple.svg',
    logoShape: 'wide',
    logoClass: 'built-logo-clinbook',
    period: '2023–present',
    current: true,
    summary: 'Clinical-trial intelligence SaaS for sponsor, site, investigator, and patient-partner decisions.',
    tags: ['Company', 'Digital Product', 'Healthcare', 'Data'],
  },
  {
    slug: 'uncluttered-soul',
    name: 'Uncluttered Soul',
    logo: '/ventures/uncluttered-soul/uncluttered-soul-logo.png',
    logoShape: 'wide',
    logoClass: 'built-logo-uncluttered',
    period: '2023–2024',
    summary: 'A mindfulness membership platform spanning meditation, sleep, journaling, and AI-enabled audio.',
    tags: ['Company', 'Digital Product', 'Wellness', 'AI'],
  },
  {
    slug: 'yumyummy',
    name: 'YumYummy',
    logo: '/ventures/yumyummy/yumyummy-logo.png',
    logoShape: 'wide',
    logoClass: 'built-logo-yumyummy',
    period: '2024',
    summary: 'An Amazon-first silicone pouch-top product developed through packaging and third-party testing.',
    tags: ['Physical Product', 'Consumer', 'Baby & Family'],
  },
  {
    slug: 'pitchit',
    name: 'Pitchit',
    logo: '/ventures/pitchit/pitchit-logo.png',
    logoShape: 'wide',
    logoClass: 'built-logo-pitchit',
    period: '2018',
    summary: 'A play-tested startup card game for generating ideas through absurd combinations and fast pitches.',
    tags: ['Physical Product', 'Product Experiment', 'Games', 'Entrepreneurship'],
  },
  {
    slug: 'sweatvida',
    name: 'SweatVida',
    logo: '/ventures/sweatvida/sweatvida-logo.png',
    logoShape: 'wide',
    logoClass: 'built-logo-sweatvida',
    period: 'Apr 2020–May 2023',
    summary: 'A search-led directory that made high-quality, free at-home workouts easier to discover.',
    tags: ['Company', 'Digital Product', 'Fitness', 'SEO'],
  },
  {
    slug: 'pixi-cycling',
    name: 'Pixi Cycling',
    logo: '/ventures/pixi-cycling/pixi-logo.png',
    logoShape: 'wide',
    logoClass: 'built-logo-pixi',
    period: 'Mar 2016–Feb 2022',
    summary: 'Patented women’s cycling apparel designed to transition seamlessly from bike to brunch.',
    tags: ['Company', 'Physical Product', 'Consumer', 'Apparel'],
  },
  {
    slug: 'surfguru',
    name: 'SurfGuru',
    logo: '/ventures/coding/surfguru-logo.png',
    logoShape: 'wide',
    logoClass: 'built-logo-surfguru',
    period: '2018',
    summary: 'A Ruby command-line application for exploring surf conditions at beaches around the world.',
    tags: ['Coding Project', 'Ruby', 'CLI', 'Data'],
  },
  {
    slug: 'shoplist',
    name: 'ShopList',
    logo: '/ventures/coding/shoplist-logo.png',
    logoShape: 'wide',
    logoClass: 'built-logo-shoplist',
    period: '2018',
    summary: 'A Sinatra shopping-list application demonstrating CRUD, authentication, and database persistence.',
    tags: ['Coding Project', 'Web App', 'Ruby', 'CRUD'],
  },
]


const pixiDeckUrl =
  'https://github.com/emilywelsch/emily-welsch-site/releases/download/pixi-deck/Pixi-Pitch-Deck-2018.pptx'

const builtPortfolioFilters = [
  'All',
  'Company',
  'Digital Product',
  'Physical Product',
  'Coding Project',
]

const investments = [
  {
    name: 'Guava Health',
    logo: '/logos/guava-health-investment.png',
    logoShape: 'square',
    sector: 'Consumer health technology',
    round: 'Seed round',
    note: 'Participated in the company’s seed round.',
    tags: ['Seed Round', 'Healthcare', 'Consumer Technology'],
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
    tags: ['Seed Round', 'Enterprise AI', 'Financial Services'],
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
          <motion.div className="hero-eyebrow-wrap" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}><Eyebrow>Founder · Angel Investor · Advisor</Eyebrow></motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}>
            <span className="hero-headline-line">I build, back,</span>
            <span className="hero-headline-line">and advise ambitious</span>
            <span className="hero-headline-line">businesses.</span>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
            I’m Emily Welsch, an operator and entrepreneur working across healthcare, technology, and consumer ventures. Currently exclusively focused on building Clinbook, a clinical-trial intelligence platform for selecting research sites and investigators.
          </motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            <Link className="button button-dark" to="/ventures">Explore my ventures <ArrowRight size={18} /></Link>
            <Link className="button button-light" to="/advisory">Advisory Portfolio</Link>
          </motion.div>
        </motion.div>
        <motion.div className="hero-image-wrap" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <img src="/images/hero.jpg" alt="Emily Welsch seated in a bright interior" />
          <div className="image-caption">Santa Barbara, California</div>
        </motion.div>
      </section>

      <section className="statement-band" aria-label="Founder perspective. Investor curiosity. Operator-level execution.">
        <div className="statement-marquee">
          <div className="statement-track">
            <span>Founder perspective. Investor curiosity. Operator-level execution.</span>
            <span aria-hidden="true">Founder perspective. Investor curiosity. Operator-level execution.</span>
          </div>
        </div>
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
            <ArrowLink to="/ventures#built">View companies</ArrowLink>
          </motion.article>
          <motion.article className="feature-card teal" whileHover={{ y: -8 }} transition={{ duration: .25 }}>
            <span>02</span>
            <h3>Angel Investments</h3>
            <p>Early-stage companies and founders I have chosen to support as an investor.</p>
            <ArrowLink to="/ventures#backed">View investments</ArrowLink>
          </motion.article>
        </div>
      </section>

      <section className="portrait-story section-shell">
        <motion.div className="portrait-frame" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }}>
          <img src="/images/053.jpg" alt="Emily Welsch in a patterned interior" />
        </motion.div>
        <motion.div className="portrait-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }}>
          <Eyebrow>How I work</Eyebrow>
          <h2>Customer obsession, clear thinking, and pragmatic execution.</h2>
          <p>I start with the customer: what they need, where they get stuck, and what will earn their trust. From there, I clarify the opportunity, shape the strategy and story, and build an execution plan grounded in real behavior and measurable outcomes.</p>
          <ArrowLink to="/advisory">Explore advisory services</ArrowLink>
        </motion.div>
      </section>
    </PageTransition>
  )
}

function Ventures() {
  const [builtFilter, setBuiltFilter] = useState('All')
  const visibleBuiltPortfolio =
    builtFilter === 'All'
      ? builtPortfolio
      : builtPortfolio.filter(item => item.tags.includes(builtFilter))

  return (
    <PageTransition>
      <section className="page-hero section-shell ventures-page-hero">
        <Eyebrow>Ventures</Eyebrow>
        <h1>Companies and products I’ve built. Teams I’ve backed.</h1>
        <p>
          A selected portfolio of operating companies, physical and digital products, technical
          work, and early-stage investments.
        </p>
      </section>

      <section className="ventures-focus-banner section-shell" aria-label="Current full-time focus: Clinbook">
        <motion.div
          className="ventures-focus-copy"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .25 }}
        >
          <Eyebrow>Current full-time focus</Eyebrow>
          <h2>Building Clinbook.</h2>
          <p>
            Since 2023, I have focused full time on Clinbook, a clinical-trial intelligence
            platform helping sponsors, CROs, research sites, and investigators make better
            partner-selection and enrollment decisions.
          </p>
          <div className="ventures-focus-links">
            <ArrowLink to="/ventures/clinbook">View the case study</ArrowLink>
            <ArrowLink to="https://clinbook.co" external>Visit Clinbook</ArrowLink>
          </div>
        </motion.div>
        <motion.div
          className="ventures-focus-panel"
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: .25 }}
        >
          <img src="/ventures/clinbook/clinbook-logo-purple.svg" alt="Clinbook" />
          <div>
            <span>Founder & CEO</span>
            <strong>2023–present</strong>
            <small>Current full-time company</small>
          </div>
        </motion.div>
      </section>

      <section className="venture-portfolio-section section-shell" id="built">
        <div className="venture-portfolio-heading">
          <div>
            <Eyebrow>Built</Eyebrow>
            <h2>Companies and products I’ve created.</h2>
          </div>
          <div className="venture-filter-panel" aria-label="Filter built portfolio">
            <span>Filter by type</span>
            <div className="venture-filter-buttons">
              {builtPortfolioFilters.map(filter => (
                <button
                  type="button"
                  key={filter}
                  className={builtFilter === filter ? 'active' : ''}
                  aria-pressed={builtFilter === filter}
                  onClick={() => setBuiltFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="venture-card-grid venture-built-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleBuiltPortfolio.map((item, index) => (
              <motion.article
                layout
                className={`venture-portfolio-card${item.current ? ' venture-portfolio-card-current' : ''}`}
                key={item.slug}
                initial={{ opacity: 0, scale: .97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: .97, y: -8 }}
                transition={{ duration: .22, delay: index * .018 }}
              >
                {item.current && (
                  <div className="venture-current-corner" aria-label="Current full-time company">
                    <span>CURRENT</span>
                  </div>
                )}
                <Link to={`/ventures/${item.slug}`}>
                  <div className={`venture-card-logo ${item.logoShape} ${item.logoClass || ''}`}>
                    {item.logo
                      ? <img src={item.logo} alt={`${item.name} logo`} />
                      : <span>{item.logoText}</span>}
                  </div>
                  <div className="venture-card-title">
                    <div>
                      {item.period && <small>{item.period}</small>}
                      <h3>{item.name}</h3>
                    </div>
                    <ArrowRight size={19} />
                  </div>
                  <p>{item.summary}</p>
                  <div className="venture-card-tags">
                    {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="venture-portfolio-section venture-backed-section section-shell" id="backed">
        <div className="venture-portfolio-heading">
          <div>
            <Eyebrow>Backed</Eyebrow>
            <h2>Companies I’ve backed.</h2>
          </div>
          <p>
            I focus on post-revenue software and technology companies, investing in early-growth
            teams building products with clear market traction.
          </p>
        </div>

        <div className="venture-card-grid venture-backed-grid">
          {investments.map((company, index) => (
            <motion.a
              className="venture-portfolio-card venture-investment-card"
              href={company.url}
              target="_blank"
              rel="noreferrer"
              key={company.name}
              initial={{ opacity: 0, scale: .985, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: .18 }}
              transition={{ duration: .28, delay: index * .04 }}
            >
              <div className={`venture-card-logo ${company.logoShape || ''} ${company.logoClass || ''}`}>
                {company.logo
                  ? <img src={company.logo} alt={`${company.name} logo`} />
                  : <span>{company.logoText}</span>}
              </div>
              <div className="venture-card-title">
                <div>
                  <small>{company.round}</small>
                  <h3>{company.name}</h3>
                </div>
                <ExternalLink size={18} />
              </div>
              <p>{company.note}</p>
              <div className="venture-card-tags">
                {company.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

function PitchitCaseStudy() {
  const examples = [
    ['Halloween costumes', 'for gerbils'],
    ['Tinder', 'for music festivals'],
    ['Robot doctors', 'for old people'],
    ['Scooters', 'for turtles'],
    ['Robot nannies', 'for annoying boyfriends'],
  ]

  return (
    <PageTransition>
      <section className="pitchit-hero">
        <div className="section-shell pitchit-hero-grid">
          <motion.div
            className="pitchit-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
          >
            <Link className="back-link" to="/ventures#built">← Product experiments</Link>
            <Eyebrow>Product experiment · Physical card game</Eyebrow>
            <img className="pitchit-wordmark" src="/ventures/pitchit/pitchit-logo.png" alt="Pitchit" />
            <h1>A startup card game for brewing new ideas.</h1>
            <p>
              Pitchit turns startup ideation into a playful party game. Players combine a white
              concept card with a black audience card, then pitch the resulting company to a
              rotating judge.
            </p>
          </motion.div>

          <motion.figure
            className="pitchit-hero-image"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .55, delay: .08 }}
          >
            <img src="/ventures/pitchit/pitchit-hero.jpg" alt="Pitchit black and white startup card-game prototype" />
          </motion.figure>
        </div>

        <div className="section-shell pitchit-facts">
          <div><strong>Creator & designer</strong><span>Role</span></div>
          <div><strong>2018</strong><span>Timeline</span></div>
          <div><strong>Physical prototype</strong><span>Format</span></div>
          <div><strong>Rotating judge</strong><span>Game mechanic</span></div>
        </div>
      </section>

      <section className="pitchit-premise section-shell">
        <div className="pitchit-premise-heading">
          <Eyebrow>The premise</Eyebrow>
          <h2>Make the idea ridiculous first. Decide whether it is brilliant later.</h2>
        </div>
        <div className="pitchit-premise-copy">
          <p>
            Startup ideation can become overly serious very quickly. The pressure to find the
            “right” opportunity often makes people self-edit before they have generated enough
            possibilities to discover something interesting.
          </p>
          <p>
            Pitchit removes that pressure by making combination and performance the point.
            A strange pairing gives every player somewhere to start, and the pitch itself creates
            room for humor, improvisation, and unexpected usefulness.
          </p>
        </div>
      </section>

      <section className="pitchit-how">
        <div className="section-shell">
          <div className="pitchit-section-heading">
            <div>
              <Eyebrow>How to play</Eyebrow>
              <h2>Two cards, one pitch, and a judge who decides what wins.</h2>
            </div>
            <p>
              The format borrows the social rhythm of judge-based party games while shifting the
              creative task from completing a joke to inventing and selling a startup idea.
            </p>
          </div>

          <div className="pitchit-steps">
            {[
              ['01', 'Draw the idea', 'Each player receives or selects a white card naming a product, category, behavior, or concept.'],
              ['02', 'Match the audience', 'Pair it with a black “for…” card describing a customer, market, profession, or absurdly specific group.'],
              ['03', 'Pitch the company', 'Explain why “It’s [white card] for [black card]” should exist and persuade the rotating judge to choose it.'],
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

          <div className="pitchit-judge-note">
            <span>The judge decides the standard</span>
            <p>
              Pick the most outrageously funny pitch, the idea with the most genuine potential,
              or whatever combination makes the round memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="pitchit-example">
        <div className="section-shell pitchit-example-grid">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }}
          >
            <img src="/ventures/pitchit/pitchit-example-pairs.jpg" alt="Pitchit example startup combinations arranged in pairs" />
          </motion.figure>
          <div className="pitchit-example-copy">
            <Eyebrow>Example round</Eyebrow>
            <h2>The combinations do most of the creative work.</h2>
            <div className="pitchit-example-list">
              {examples.map(([idea, audience]) => (
                <div key={`${idea}-${audience}`}>
                  <span>{idea}</span>
                  <strong>{audience}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pitchit-design section-shell">
        <div className="pitchit-section-heading">
          <div>
            <Eyebrow>Product design</Eyebrow>
            <h2>A deliberately minimal prototype that keeps attention on the ideas.</h2>
          </div>
          <p>
            The deck uses a stark black-and-white system, rounded cards, and typewriter-style
            typography. White cards introduce the concept; black cards complete the phrase with
            an audience or use case.
          </p>
        </div>

        <div className="pitchit-design-grid">
          <motion.figure
            className="pitchit-design-main"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }}
          >
            <img src="/ventures/pitchit/pitchit-full-deck.jpg" alt="Complete Pitchit black and white prototype card deck" />
            <figcaption>The working prototype included separate white concept cards and black audience cards.</figcaption>
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }}
          >
            <img src="/ventures/pitchit/pitchit-deck.jpg" alt="Stack of black Pitchit cards" />
            <figcaption>Compact enough to bring into a family gathering, workshop, or accelerator session.</figcaption>
          </motion.figure>
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .15 }}
          >
            <img src="/ventures/pitchit/pitchit-card-groups.jpg" alt="Pitchit black and white card groups" />
            <figcaption>The two-deck structure makes the prompt instantly legible.</figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="pitchit-playtest">
        <div className="section-shell">
          <div className="pitchit-section-heading">
            <div>
              <Eyebrow>Real-world play test</Eyebrow>
              <h2>A family Thanksgiving proved the mechanic was genuinely fun.</h2>
            </div>
            <p>
              The prototype made it out of the design phase and onto the table. Players understood
              the format quickly, improvised around the prompts, and found humor in combinations
              that would never emerge from a conventional brainstorming session.
            </p>
          </div>

          <div className="pitchit-playtest-gallery">
            <figure><img src="/ventures/pitchit/pitchit-card-outdoors.jpg" alt="Pitchit card held outdoors" /></figure>
            <figure><img src="/ventures/pitchit/pitchit-card-fan.jpg" alt="Fan of Pitchit cards showing startup concepts" /></figure>
            <figure><img src="/ventures/pitchit/pitchit-card-groups-alt.jpg" alt="Pitchit concept and audience card groups" /></figure>
          </div>
        </div>
      </section>

      <section className="pitchit-potential section-shell">
        <div className="pitchit-potential-copy">
          <Eyebrow>Commercial potential</Eyebrow>
          <h2>A validated concept that would need another curation pass before becoming a product.</h2>
          <p>
            I never attempted to sell Pitchit. A commercial edition would need a more carefully
            balanced card set, stronger category coverage, refined instructions, packaging, and
            repeated play testing to ensure the combinations stay fresh.
          </p>
          <p>
            The core mechanic could support a family game, a creative warm-up for teams, or an
            icebreaker for startup accelerators and founder programs.
          </p>
        </div>
        <div className="pitchit-potential-note">
          <span>Best use case</span>
          <p>
            Helping people in a creative rut get a little silly, suspend judgment, and generate
            possibilities before returning to serious ideas.
          </p>
        </div>
      </section>

      <section className="pitchit-reflection">
        <div className="section-shell pitchit-reflection-grid">
          <div>
            <Eyebrow>Creator reflection</Eyebrow>
            <h2>Sometimes the fastest route to a useful idea is through a completely absurd one.</h2>
          </div>
          <blockquote>
            Pitchit turned startup thinking into a social game and made pitching feel playful,
            low-stakes, and accessible to people who might never volunteer for a formal brainstorm.
          </blockquote>
        </div>
      </section>

      <section className="next-project section-shell">
        <p>Explore coding projects</p>
        <Link to="/ventures#built">
          SurfGuru & ShopList<ArrowRight />
        </Link>
      </section>
    </PageTransition>
  )
}

function CodingProjectCaseStudy({ project }) {
  const nextProject = codingProjects[(codingProjects.indexOf(project) + 1) % codingProjects.length]

  return (
    <PageTransition>
      <section className={`code-project-hero ${project.accent}`}>
        <div className="section-shell code-project-hero-grid">
          <motion.div
            className="code-project-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
          >
            <Link className="back-link" to="/ventures#built">← Coding projects</Link>
            <Eyebrow>{project.eyebrow}</Eyebrow>
            <img className="code-project-logo" src={project.logo} alt={project.name} />
            <h1>{project.heroTitle}</h1>
            <p>{project.description}</p>
            <div className="code-project-actions">
              <a href={project.github} target="_blank" rel="noreferrer">
                View source on GitHub <ExternalLink size={17} />
              </a>
              <a href={project.video} target="_blank" rel="noreferrer">
                Watch walkthrough <ExternalLink size={17} />
              </a>
            </div>
          </motion.div>

          <motion.figure
            className="code-project-hero-visual"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .55, delay: .08 }}
          >
            <img src={project.image} alt={`${project.name} project cover`} />
          </motion.figure>
        </div>

        <div className="section-shell code-project-facts">
          {project.facts.map(([label, value]) => (
            <div key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="code-project-purpose section-shell">
        <div>
          <Eyebrow>Product behavior</Eyebrow>
          <h2>What the application does.</h2>
        </div>
        <div className="code-project-feature-grid">
          {project.features.map(([title, copy], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ delay: index * .05 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={`code-project-architecture ${project.accent}`}>
        <div className="section-shell">
          <div className="code-project-section-heading">
            <div>
              <Eyebrow>Architecture</Eyebrow>
              <h2>How the system is organized.</h2>
            </div>
            <p>
              A focused technical exercise connecting user behavior to clear application structure,
              persistent data, and maintainable responsibilities.
            </p>
          </div>

          <div className="code-project-architecture-grid">
            {project.architecture.map(([title, copy], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="code-project-technical section-shell">
        <div className="code-project-section-heading">
          <div>
            <Eyebrow>Technical foundation</Eyebrow>
            <h2>Stack and local installation.</h2>
          </div>
          <p>
            The repository remains available as an open-source record of the application,
            dependencies, setup process, and implementation.
          </p>
        </div>

        <div className="code-project-technical-grid">
          <div className="code-stack">
            <span>Technology</span>
            <div>
              {project.stack.map(item => <small key={item}>{item}</small>)}
            </div>
          </div>
          <div className="code-terminal">
            <div className="code-terminal-bar"><i></i><i></i><i></i><span>Terminal</span></div>
            <pre><code>{project.installation.join('\n')}</code></pre>
          </div>
        </div>
      </section>

      <section className={`code-project-note ${project.accent}`}>
        <div className="section-shell code-project-note-grid">
          <div>
            <Eyebrow>{project.noteEyebrow}</Eyebrow>
            <h2>{project.noteTitle}</h2>
          </div>
          <blockquote>{project.note}</blockquote>
        </div>
      </section>

      <section className="code-project-links section-shell">
        <div>
          <Eyebrow>Project links</Eyebrow>
          <h2>Read the code or see it in use.</h2>
        </div>
        <div>
          <a href={project.github} target="_blank" rel="noreferrer">GitHub repository <ExternalLink /></a>
          <a href={project.video} target="_blank" rel="noreferrer">Video walkthrough <ExternalLink /></a>
        </div>
      </section>

      <section className="next-project section-shell">
        <p>Next coding project</p>
        <Link to={`/ventures/${nextProject.slug}`}>
          {nextProject.name}<ArrowRight />
        </Link>
      </section>
    </PageTransition>
  )
}

function ClinbookCaseStudy({ project }) {
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <PageTransition>
      <section className="clinbook-hero">
        <div className="section-shell clinbook-hero-grid">
          <motion.div
            className="clinbook-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
          >
            <Link className="back-link" to="/ventures">← All ventures</Link>
            <Eyebrow>Company case study · Clinical trial intelligence</Eyebrow>
            <img className="clinbook-wordmark" src="/ventures/clinbook/clinbook-logo-purple.svg" alt="Clinbook" />
            <h1>Find the right sites and investigators, backed by data.</h1>
            <p>
              Clinbook is a clinical intelligence platform built to make study planning, partner
              selection, and enrollment decisions faster, more transparent, and more evidence based.
            </p>
            <div className="clinbook-hero-actions">
              <ArrowLink to="https://clinbook.co" external>Visit Clinbook</ArrowLink>
              <a className="clinbook-social-link" href="https://www.linkedin.com/company/clinbook/" target="_blank" rel="noreferrer">
                LinkedIn <ExternalLink size={15} />
              </a>
              <a href="#clinbook-claims">Explore patient intelligence ↓</a>
            </div>
          </motion.div>

          <motion.aside
            className="clinbook-facts"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .55, delay: .08 }}
          >
            <div><span>Role</span><strong>Founder & CEO</strong></div>
            <div><span>Timeline</span><strong>2023–present</strong></div>
            <div><span>Model</span><strong>B2B SaaS</strong></div>
            <div><span>Market</span><strong>Global clinical research</strong></div>
          </motion.aside>
        </div>

        <div className="section-shell clinbook-hero-image">
          <motion.img
            src="/ventures/clinbook/clinbook-platform-overview.jpg"
            alt="Clinbook website and product interface overview"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .12 }}
          />
        </div>
      </section>

      <section className="clinbook-scale section-shell">
        <div><strong>1.3K+</strong><span>Sponsors represented</span></div>
        <div><strong>1.5M+</strong><span>Research sites</span></div>
        <div><strong>1.7M+</strong><span>Investigators</span></div>
        <div><strong>500K+</strong><span>Clinical trials</span></div>
      </section>

      <section className="clinbook-opportunity section-shell">
        <div className="clinbook-opportunity-heading">
          <Eyebrow>The opportunity</Eyebrow>
          <h2>Clinical research teams were making high-stakes partner decisions from fragmented information.</h2>
        </div>
        <div className="clinbook-opportunity-copy">
          <p>
            Sponsor and CRO teams often piece together site and investigator intelligence across
            trial registries, spreadsheets, institutional websites, vendor databases, and personal
            networks. Much of the available information describes experience, but not performance.
          </p>
          <p>
            Sites and investigators face the inverse problem. Their capabilities, enrollment history,
            credentials, and patient reach are difficult to present in a portable, verified profile
            that sponsors can discover and compare.
          </p>
          <p>
            Clinbook was created as a shared intelligence layer for the ecosystem: structured data,
            transparent ratings, verified profiles, and firsthand reviews in one product.
          </p>
        </div>
      </section>

      <section className="clinbook-audiences">
        <div className="section-shell">
          <div className="clinbook-section-heading">
            <div>
              <Eyebrow>One platform, three perspectives</Eyebrow>
              <h2>Designed for every side of the research partnership.</h2>
            </div>
            <p>
              Each audience uses the same underlying data differently, creating a more connected
              and transparent market for clinical-research partnerships.
            </p>
          </div>

          <div className="clinbook-audience-grid">
            <motion.a
              href="https://clinbook.co/for-sponsors"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
            >
              <span>01</span>
              <h3>Sponsors & CROs</h3>
              <p>Plan studies, compare candidates, build lists, and select high-performing, diverse sites and investigators.</p>
              <small>Planning · Selection · Enrollment · Reviews</small>
              <ExternalLink />
            </motion.a>

            <motion.a
              href="https://clinbook.co/for-sites"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ delay: .05 }}
            >
              <span>02</span>
              <h3>Research sites</h3>
              <p>Claim and strengthen a profile, showcase capabilities, demonstrate performance, and get discovered for new studies.</p>
              <small>Visibility · Verification · Performance · Partnerships</small>
              <ExternalLink />
            </motion.a>

            <motion.a
              href="https://clinbook.co/for-investigators"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ delay: .1 }}
            >
              <span>03</span>
              <h3>Investigators</h3>
              <p>Create a portable professional profile connecting trials, credentials, publications, enrollment history, and reviews.</p>
              <small>Experience · Credentials · Publications · Discovery</small>
              <ExternalLink />
            </motion.a>
          </div>
        </div>
      </section>

      <section className="clinbook-data">
        <div className="section-shell">
          <div className="clinbook-section-heading">
            <div>
              <Eyebrow>Intelligence built on trusted sources</Eyebrow>
              <h2>A unified data layer for sites, investigators, trials, and patients.</h2>
            </div>
            <p>
              The product combines public and private sources with calculated performance metrics
              and verified community inputs, turning raw records into practical decision support.
            </p>
          </div>

          <div className="clinbook-data-grid">
            {[
              ['Clinical-trial history', 'Trial registrations, study phases, therapeutic experience, sponsors, interventions, and site participation.'],
              ['Enrollment performance', 'Calculated ratings that compare historical enrollment results across investigators and research sites.'],
              ['Professional experience', 'Credentials, specialties, publications, payments, affiliations, and verified profile updates.'],
              ['Population & diversity', 'Census, disease-prevalence, geographic, and claims-based signals to support more informed recruitment planning.'],
              ['Firsthand reviews', 'Candid, role-specific feedback from sponsors, CROs, sites, networks, and research professionals.'],
              ['Claims intelligence', 'Patient-volume signals that connect indications with treating investigators and research-site opportunities.'],
            ].map(([title, copy], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ delay: index * .035 }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="clinbook-product section-shell">
        <div className="clinbook-section-heading">
          <div>
            <Eyebrow>What I built</Eyebrow>
            <h2>Company strategy, product architecture, data systems, and go-to-market.</h2>
          </div>
          <p>
            Clinbook has required end-to-end ownership across the business and product, from the
            initial market thesis to millions of normalized records and a commercial SaaS experience.
          </p>
        </div>

        <div className="clinbook-product-grid">
          {[
            ['01', 'Market & product strategy', 'Defined the category, user journeys, value proposition, pricing, roadmap, and positioning across sponsors, sites, and investigators.'],
            ['02', 'Data architecture', 'Built the model connecting trials, investigators, sites, publications, credentials, claims, population data, payments, ratings, and reviews.'],
            ['03', 'Search & decision tools', 'Designed maps, advanced filters, saved lists, profile comparisons, exports, ratings, and partner-review workflows.'],
            ['04', 'Profile verification', 'Created claim, edit, credential, and verification experiences so the people represented in the data can improve it.'],
            ['05', 'Performance models', 'Developed enrollment, experience, publication, and composite rating systems for investigator and site evaluation.'],
            ['06', 'Commercial development', 'Led partnerships, customer discovery, sales strategy, demonstrations, pilot design, and the operating plan for a bootstrapped SaaS company.'],
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

      <section className="clinbook-claims" id="clinbook-claims">
        <div className="section-shell clinbook-claims-grid">
          <motion.div
            className="clinbook-claims-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .18 }}
          >
            <Eyebrow>Patient intelligence</Eyebrow>
            <h2>Connecting disease prevalence with the investigators and sites already treating those patients.</h2>
            <p>
              Clinbook is now ingesting Medicare fee-for-service claims to identify patient-volume
              signals by indication and treating provider. The heat map helps teams see where patient
              populations are concentrated and which investigators and sites may already have relevant reach.
            </p>
            <p>
              Commercial claims are planned next. That expansion will broaden the view beyond the
              Medicare population and support a more complete picture of potential patient access.
            </p>
            <div className="clinbook-claims-note">
              Current counts are conservative minimums where Medicare cells are suppressed. Map shading
              reflects each treating investigator’s primary practice location, not the patient’s home address.
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .12 }}
          >
            <img
              src="/ventures/clinbook/clinbook-patient-heatmap.jpg"
              alt="Clinbook patient heat map using Medicare claims data"
            />
            <figcaption>
              Patient heat map combining county-level patient signals with matching investigators and sites.
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="clinbook-thesis">
        <div className="section-shell clinbook-thesis-grid">
          <div>
            <Eyebrow>Company thesis</Eyebrow>
            <h2>Who you partner with matters.</h2>
          </div>
          <blockquote>
            Better trials begin with better intelligence about the investigators, sites, sponsors,
            and patient populations that make research possible.
          </blockquote>
        </div>
      </section>

      <section className="clinbook-links section-shell">
        <div>
          <Eyebrow>Explore Clinbook</Eyebrow>
          <h2>See the platform from each user’s perspective.</h2>
        </div>
        <div className="clinbook-link-list">
          <a href="https://clinbook.co" target="_blank" rel="noreferrer">Platform overview <ExternalLink /></a>
          <a href="https://clinbook.co/for-sponsors" target="_blank" rel="noreferrer">For sponsors <ExternalLink /></a>
          <a href="https://clinbook.co/for-sites" target="_blank" rel="noreferrer">For sites <ExternalLink /></a>
          <a href="https://clinbook.co/for-investigators" target="_blank" rel="noreferrer">For investigators <ExternalLink /></a>
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

          <motion.figure
            className="sweatvida-brand-banner sweatvida-brand-banner-late"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .18 }}
          >
            <img
              src="/ventures/sweatvida/sweatvida-banner.jpg"
              alt="SweatVida fitness brand banner with colorful dumbbells"
            />
          </motion.figure>
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




function UnclutteredSoulCaseStudy({ project }) {
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  const contentFormats = [
    ['Guided meditations', 'In-the-moment support for stress, negative thought spirals, gratitude, focus, and emotional reset.'],
    ['Sleep meditations', 'Slower guided experiences designed to quiet the mind and prepare the body for restorative rest.'],
    ['Sleep stories', 'Narrative audio experiences that help listeners disengage from the day and ease toward sleep.'],
    ['Soundscapes', 'Sleep and awakening audio environments for rest, relaxation, clarity, and focus.'],
    ['Online journal', 'A private digital journaling experience with daily prompts for reflection, gratitude, and mindfulness.'],
    ['Guides & workbooks', 'Longer-form tools that help members turn mindfulness concepts into repeatable practices.'],
  ]

  return (
    <PageTransition>
      <section className="uncluttered-hero">
        <div className="section-shell uncluttered-hero-grid">
          <motion.div
            className="uncluttered-hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
          >
            <Link className="back-link" to="/ventures">← All ventures</Link>
            <Eyebrow>Company case study · Mindfulness technology</Eyebrow>
            <img className="uncluttered-logo" src={project.logo} alt="Uncluttered Soul" />
            <h1>A digital sanctuary for rest, reflection, and everyday mental well-being.</h1>
            <p>
              Uncluttered Soul brings guided meditations, sleep content, soundscapes, journaling,
              and soulful-living tools into one membership experience built for moments when people
              need calm, clarity, or a better night’s sleep.
            </p>
            <div className="uncluttered-actions">
              <a className="button uncluttered-primary" href="https://unclutteredsoul.co/take-a-break/" target="_blank" rel="noreferrer">
                Try the free meditation <ArrowRight size={18} />
              </a>
              <a className="uncluttered-text-link" href="https://unclutteredsoul.co/" target="_blank" rel="noreferrer">
                Visit Uncluttered Soul ↗
              </a>
              <a className="uncluttered-instagram-link" href="https://www.instagram.com/unclutteredsoul" target="_blank" rel="noreferrer">
                <span>Instagram</span><ExternalLink size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="uncluttered-hero-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .55, delay: .08 }}
          >
            <img src="/ventures/uncluttered-soul/uncluttered-soul-library-detail.jpg" alt="Uncluttered Soul meditation and sleep library" />
          </motion.div>
        </div>

        <div className="section-shell uncluttered-facts">
          <div><strong>Founder</strong><span>Role</span></div>
          <div><strong>2023–2024</strong><span>Timeline</span></div>
          <div><strong>Membership</strong><span>Business model</span></div>
          <div><strong>AI-generated</strong><span>All narration</span></div>
        </div>
      </section>

      <section className="uncluttered-opportunity section-shell">
        <div className="uncluttered-opportunity-copy">
          <Eyebrow>The opportunity</Eyebrow>
          <h2>Mindfulness content was everywhere. A cohesive daily practice was harder to find.</h2>
          <p>
            People often encounter meditation, journaling, sleep audio, and self-reflection as separate
            products or scattered pieces of content. Uncluttered Soul was designed as one calm, accessible
            place to support immediate relief and longer-term habit building.
          </p>
          <p>
            The product serves distinct moments: falling asleep, returning to sleep, calming an overwhelmed
            nervous system, stepping out of negative thought patterns, reflecting through journaling, or simply
            creating a few intentional minutes in a busy day.
          </p>
        </div>
        <div className="uncluttered-pillars">
          <div><span>01</span><h3>Reclaim peace</h3><p>Tools for releasing mental clutter, limiting beliefs, and reactive patterns.</p></div>
          <div><span>02</span><h3>Sleep better</h3><p>Stories, meditations, soundscapes, and routines for deeper, more restorative rest.</p></div>
          <div><span>03</span><h3>Stress less</h3><p>Short, practical ways to return to the present moment and create more ease.</p></div>
        </div>
      </section>

      <section className="uncluttered-product">
        <div className="section-shell">
          <div className="uncluttered-section-heading">
            <div>
              <Eyebrow>The product</Eyebrow>
              <h2>One membership, multiple paths back to yourself.</h2>
            </div>
            <p>
              The library combines immediate, audio-led experiences with repeatable practices and longer-form
              resources, allowing members to choose what fits their mood, intention, and available time.
            </p>
          </div>

          <motion.div
            className="uncluttered-browser"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .16 }}
          >
            <div className="uncluttered-browser-bar"><span></span><span></span><span></span><div>unclutteredsoul.co</div></div>
            <img src="/ventures/uncluttered-soul/uncluttered-soul-library.png" alt="Uncluttered Soul content library" />
          </motion.div>
        </div>
      </section>

      <section className="uncluttered-content section-shell">
        <div className="uncluttered-section-heading">
          <div>
            <Eyebrow>Content architecture</Eyebrow>
            <h2>Built around how people actually seek support.</h2>
          </div>
          <p>
            The content system balances immediate-use audio, reflective practices, and deeper learning so the
            platform can support both a five-minute reset and a longer-term mindfulness routine.
          </p>
        </div>

        <div className="uncluttered-content-grid">
          {contentFormats.map(([title, copy], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="uncluttered-ai">
        <div className="section-shell uncluttered-ai-grid">
          <div className="uncluttered-ai-copy">
            <Eyebrow>AI-enabled production</Eyebrow>
            <h2>A scalable audio studio built with synthetic voices.</h2>
            <p>
              All voices on Uncluttered Soul are AI-generated. A synthetic version of my own voice is used for
              the majority of the guided meditations, allowing the platform to maintain a consistent tone while
              producing a growing library of high-quality audio more efficiently.
            </p>
            <p>
              The technology accelerates production, but the editorial work remains human-led: choosing the need,
              shaping the script, setting the pacing, reviewing the emotional tone, and deciding how each experience
              fits into the larger member journey.
            </p>
          </div>

          <div className="uncluttered-workflow">
            <div><span>01</span><strong>Define the moment</strong><p>Sleep, anxiety relief, focus, gratitude, self-care, or reflection.</p></div>
            <div><span>02</span><strong>Write & edit</strong><p>Create the script, pacing, cues, and emotional arc.</p></div>
            <div><span>03</span><strong>Generate narration</strong><p>Produce the audio with the appropriate AI voice, including my own synthetic voice.</p></div>
            <div><span>04</span><strong>Mix & publish</strong><p>Pair voice, music, and sound design, then place the experience in the membership library.</p></div>
          </div>
        </div>
      </section>

      <section className="uncluttered-build section-shell">
        <div className="uncluttered-section-heading">
          <div>
            <Eyebrow>What I built</Eyebrow>
            <h2>A brand, subscription product, and ongoing content operation.</h2>
          </div>
          <p>
            The work spans product strategy, brand positioning, membership design, content development, AI audio
            workflows, subscription packaging, and the systems required to publish new tools regularly.
          </p>
        </div>

        <div className="uncluttered-build-grid">
          {[
            ['01', 'Brand & positioning', 'Developed a calm, premium identity centered on releasing mental clutter and returning to clarity, peace, and purpose.'],
            ['02', 'Membership experience', 'Structured the product around free discovery, a subscription library, and content paths for sleep, stress, reflection, and personal growth.'],
            ['03', 'Content system', 'Built a repeatable editorial framework spanning meditation scripts, stories, soundscapes, journal prompts, workbooks, and mindful-living resources.'],
            ['04', 'AI production workflow', 'Created an efficient process for turning human-led concepts and scripts into consistent, publishable narrated audio.'],
          ].map(([number, title, copy]) => (
            <motion.article key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="uncluttered-free">
        <div className="section-shell uncluttered-free-grid">
          <div>
            <Eyebrow>Try the experience</Eyebrow>
            <h2>Take a break.</h2>
            <p>
              A free guided meditation offers a simple entry point into the product and demonstrates the voice,
              pacing, and immediate-use philosophy behind the larger library.
            </p>
          </div>
          <a className="uncluttered-player" href="https://unclutteredsoul.co/take-a-break/" target="_blank" rel="noreferrer">
            <div className="uncluttered-play">▶</div>
            <div><span>Free guided meditation</span><strong>Take a Break</strong><small>Meditation · Emily</small></div>
            <ArrowRight />
          </a>
        </div>
      </section>

      <section className="uncluttered-reflection">
        <div className="section-shell uncluttered-reflection-grid">
          <div>
            <Eyebrow>Founder reflection</Eyebrow>
            <h2>AI made the content operation more scalable without replacing the creative judgment.</h2>
          </div>
          <blockquote>
            Uncluttered Soul became an experiment in building a thoughtful wellness product where brand,
            behavioral design, editorial depth, and AI-enabled production all work together.
          </blockquote>
        </div>
      </section>

      <section className="next-project section-shell">
        <p>Next company</p>
        <Link to={`/ventures/${nextProject.slug}`}>{nextProject.name}<ArrowRight /></Link>
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
            <img className="pixi-wordmark" src="/ventures/pixi-cycling/pixi-logo.png" alt="Pixi Cycling" />
            <h1>Technical cycling apparel made to go from bike to brunch.</h1>
            <p>
              Pixi Cycling created women’s leggings and shorts with a patented detachable chamois
              liner, combining cycling comfort with the versatility of modern athleisure.
            </p>
            <div className="pixi-hero-actions">
              <a
                className="button pixi-download-button"
                href={pixiDeckUrl}
                download
              >
                Download 2018 pitch deck <ArrowRight size={18} />
              </a>
              <a className="pixi-instagram-link" href="https://www.instagram.com/pixicycling/" target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <ExternalLink size={15} />
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
                href={pixiDeckUrl}
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
  const project = projects.find(p => p.slug === slug) || productExperiments.find(p => p.slug === slug) || codingProjects.find(p => p.slug === slug)
  if (!project) return <NotFound />
  if (project.slug === 'pitchit') return <PitchitCaseStudy />
  if (codingProjects.some(item => item.slug === project.slug)) return <CodingProjectCaseStudy project={project} />
  if (project.slug === 'clinbook') return <ClinbookCaseStudy project={project} />
  if (project.slug === 'sweatvida') return <SweatVidaCaseStudy project={project} />
  if (project.slug === 'uncluttered-soul') return <UnclutteredSoulCaseStudy project={project} />
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
            <div className="advisory-availability-note" role="note">
              Not currently taking on advisory engagements
            </div>
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
            and press conversations on clinical research, business strategy, and company building.
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
  const [formStatus, setFormStatus] = useState('idle')
  const [formMessage, setFormMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    setFormStatus('submitting')
    setFormMessage('Sending your inquiry…')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Your message could not be sent.')
      }

      form.reset()
      setFormStatus('success')
      setFormMessage('Thank you. Your inquiry has been sent, and I’ll be in touch soon.')
    } catch (error) {
      setFormStatus('error')
      setFormMessage(
        error.message ||
        'Something went wrong. Please email me directly at emily@emilywelsch.co.'
      )
    }
  }

  return (
    <PageTransition>
      <section className="contact-layout section-shell">
        <div className="contact-copy">
          <Eyebrow>Contact</Eyebrow>
          <h1>Let’s connect.</h1>
          <p>Use the form for partnership inquiries, speaking, podcast, press, advisory, investment, or general correspondence.</p>
          <a className="contact-email" href="mailto:emily@emilywelsch.co"><Mail size={19} /><span>emily@emilywelsch.co</span></a>
          <div className="contact-note">
            <span>Typical inquiries</span>
            <p>Partnerships, speaking engagements, media conversations, founder advisory, growth strategy, and angel investment opportunities.</p>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          aria-busy={formStatus === 'submitting'}
        >
          <div className="field-row">
            <label>First name<input name="firstName" autoComplete="given-name" required /></label>
            <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
          </div>
          <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          <label>Company or organization<input name="company" autoComplete="organization" /></label>
          <label>Inquiry type
            <select name="type" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option>Business advisory</option>
              <option>Angel investment</option>
              <option>Speaking request</option>
              <option>Podcast or press</option>
              <option>General inquiry</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows="7" required /></label>
          <label className="contact-honeypot" aria-hidden="true">
            Website
            <input name="website" tabIndex="-1" autoComplete="off" />
          </label>
          <button
            className="button button-dark"
            type="submit"
            disabled={formStatus === 'submitting'}
          >
            {formStatus === 'submitting' ? 'Sending…' : 'Send inquiry'}
            <ArrowRight size={18} />
          </button>
          <p
            className={`form-note form-note-${formStatus}`}
            role={formStatus === 'error' ? 'alert' : 'status'}
            aria-live="polite"
          >
            {formMessage || 'Your information is sent securely and is used only to respond to your inquiry.'}
          </p>
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
