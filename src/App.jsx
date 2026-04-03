import React from 'react';
import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import heroImage from './assets/hero-2075.png';
import cityImage from './assets/world-2075.png';
import campusImage from './assets/campus-architecture.png';
import studentImage from './assets/day-in-life.png';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/sample-lessons', label: 'Sample Lessons' },
  { to: '/student-calendar', label: 'Student Calendar' },
  { to: '/our-mission', label: 'Our Mission' }
];

const faqItems = [
  {
    question: 'Where is the school located and what year is this model set in?',
    answer:
      'Astra Nova 2076 is based in New York City, New York. The school is designed for a near-future world where AI, automation, and real-time data systems shape daily life.',
    details: [
      'Urban partner network includes civic, health, media, and technology institutions.',
      'Students access both physical campus studios and virtual global classrooms.',
      'City-linked projects are embedded in every pipeline cycle.'
    ]
  },
  {
    question: 'How does the curriculum work?',
    answer:
      'Every student starts with core foundations in math, reading, writing, science, and civics. After mastering those basics, students choose a personalized pipeline aligned to their goals.',
    details: [
      'Phase 1: foundation mastery through diagnostics, workshops, and adaptive practice.',
      'Phase 2: pipeline immersion with mentor coaching and live project deliverables.',
      'Students can add a secondary concentration after meeting core benchmarks.'
    ]
  },
  {
    question: 'What does it mean to choose a pipeline?',
    answer:
      'Pipelines are student-selected pathways such as AI Engineering, Health Innovation, Creative Media, Entrepreneurship, and Civic Leadership. Each pipeline includes projects, mentorship, and public exhibitions.',
    details: [
      'Pipeline choice is guided by interest surveys, mentor conferences, and performance data.',
      'Each learner sets quarterly goals tied to technical and human-skill outcomes.',
      'Students can pivot pipelines with advisor approval and updated learning plans.'
    ]
  },
  {
    question: 'How does technology change learning?',
    answer:
      'AI tutors provide instant feedback, adaptive lesson pacing, language support, and progress analytics. Teachers lead mentorship, ethics, collaboration, and high-level coaching.',
    details: [
      'Personal learning dashboards update after each session.',
      'Simulation tools let students practice advanced scenarios safely.',
      'All high-stakes academic decisions require mentor sign-off.'
    ]
  },
  {
    question: 'How are students assessed?',
    answer:
      'Students are assessed through competency milestones, portfolio evidence, capstone projects, and presentation defenses instead of relying only on one-time standardized testing.',
    details: [
      'Rubrics measure mastery, communication, revision quality, and ethical reasoning.',
      'Students complete two formal portfolio reviews each term.',
      'Graduation requires a defended capstone with external panel feedback.'
    ]
  },
  {
    question: 'How is equity protected in a high-tech school?',
    answer:
      'The model includes universal accessibility design, multilingual support, assistive technology, and protected human oversight for all AI-driven decisions.',
    details: [
      'All platforms are accessibility-audited before student rollout.',
      'Families can request human-only review pathways for key decisions.',
      'Equity dashboards are reviewed monthly by leadership and advisors.'
    ]
  }
];

const sampleLessons = [
  {
    title: 'Foundations Accelerator: Data & Reasoning',
    duration: '80 minutes',
    objective: 'Strengthen core numeracy and evidence-based thinking through adaptive instruction.',
    tools: ['Adaptive diagnostics', 'City-data sandbox', 'Mentor conference rubric'],
    outcomes: ['Quantitative reasoning', 'Data literacy', 'Evidence-based explanation'],
    flow: [
      'AI diagnostic identifies each student’s current mastery level.',
      'Small-group mentor instruction targets specific skill gaps.',
      'Students solve real datasets tied to city planning scenarios.',
      'Exit artifact: mastery check and reflection on problem-solving process.'
    ]
  },
  {
    title: 'Pipeline Studio: AI Engineering',
    duration: '90 minutes',
    objective: 'Design and test a student-built AI assistant for a real community use case.',
    tools: ['Model sandbox', 'Bias test suite', 'Prompt tracing board'],
    outcomes: ['System design', 'Responsible AI practice', 'Prototype validation'],
    flow: [
      'Teams define a local challenge and user profile.',
      'Students prototype prompt logic, safety rules, and UI flow.',
      'Mentors guide debugging, evaluation, and ethical safeguards.',
      'Exit artifact: working demo with a performance and bias report.'
    ]
  },
  {
    title: 'Pipeline Studio: Creative Media',
    duration: '85 minutes',
    objective: 'Produce immersive storytelling projects that combine art, research, and technology.',
    tools: ['AR/VR creator kit', 'Script lab', 'Editorial feedback protocol'],
    outcomes: ['Narrative strategy', 'Media production', 'Audience-centered communication'],
    flow: [
      'Students gather evidence, interviews, and source material.',
      'Teams build mixed-media narratives using AR/VR tools.',
      'Peer critiques focus on message clarity and social impact.',
      'Exit artifact: exhibition-ready story experience and creator statement.'
    ]
  },
  {
    title: 'Pipeline Studio: Entrepreneurship',
    duration: '90 minutes',
    objective: 'Launch a student venture from concept to early validation.',
    tools: ['Customer interview playbook', 'MVP sprint board', 'Pitch template'],
    outcomes: ['Opportunity analysis', 'Product iteration', 'Venture communication'],
    flow: [
      'Student teams define a problem worth solving in NYC.',
      'They test assumptions through quick customer interviews.',
      'Teams build and revise a minimum viable prototype.',
      'Exit artifact: pitch deck, traction evidence, and next milestone plan.'
    ]
  }
];

const calendarEvents = [
  { date: 'September 8, 2076', event: 'Year Launch: Foundations Phase', details: 'All students begin core skill mastery blocks and diagnostics.' },
  { date: 'October 20, 2076', event: 'Pipeline Discovery Week', details: 'Students explore pathways before selecting their primary pipeline.' },
  { date: 'December 11, 2076', event: 'Winter Innovation Expo', details: 'Public showcase of first-cycle projects and prototypes.' },
  { date: 'February 5, 2077', event: 'Mentor + Family Progress Conferences', details: 'Review of competencies, pacing, and wellbeing indicators.' },
  { date: 'April 16, 2077', event: 'Global Collaboration Sprint', details: 'Cross-city teams solve shared problems with partner schools.' },
  { date: 'June 18, 2077', event: 'Capstone Defense & Graduation', details: 'Students present final portfolios and pipeline outcomes.' }
];

const bellSchedule = [
  { period: 'Advisory Sync', start: '8:10 AM', end: '8:30 AM', duration: '20 mins' },
  { period: 'Foundation Block A', start: '8:35 AM', end: '9:45 AM', duration: '70 mins' },
  { period: 'Foundation Block B', start: '9:55 AM', end: '11:05 AM', duration: '70 mins' },
  { period: 'Studio Lab', start: '11:15 AM', end: '12:35 PM', duration: '80 mins' },
  { period: 'Mentor Lunch', start: '12:35 PM', end: '1:15 PM', duration: '40 mins' },
  { period: 'Pipeline Block', start: '1:20 PM', end: '2:50 PM', duration: '90 mins' },
  { period: 'Portfolio + Reflection', start: '2:55 PM', end: '3:30 PM', duration: '35 mins' }
];

const schoolSnapshot = [
  {
    label: 'Enrollment',
    value: '12,480 learners',
    detail: 'Distributed across mixed-stage cohorts with flexible pacing bands.',
    metric: '94% weekly attendance'
  },
  {
    label: 'Mentor Ratio',
    value: '1 mentor : 12 students',
    detail: 'Guaranteed weekly one-on-one mentoring and goal reset sessions.',
    metric: '2 progress conferences per learner each month'
  },
  {
    label: 'Foundation Cycle',
    value: '18-week core mastery phase',
    detail: 'Focused literacy, numeracy, science reasoning, and civic analysis benchmarks.',
    metric: 'Minimum 85% mastery threshold before pipeline entry'
  },
  {
    label: 'Pipelines Offered',
    value: '6 primary pathways + custom tracks',
    detail: 'Students can combine primary and secondary concentrations by term two.',
    metric: '100+ partner-aligned project briefs per year'
  }
];

const founderStory = [
  'Astra Nova 2076 was founded by Justin Hoang, who first drafted the concept during a class at Stockton University.',
  'For a course project, he was asked to redesign school for the future. His central idea was simple: every student should master the basics first, then choose a personalized pipeline with real ownership.',
  'Justin’s proposal mapped a two-phase model: foundational competencies in core academics, followed by student-selected pathways connected to technology, creativity, entrepreneurship, and civic impact.',
  'After graduation, he refined the blueprint with educators, technologists, and community advisors in New York City, shaping it into a scalable model for 2076 learning conditions.',
  'What began as a classroom assignment became Astra Nova 2076, a school built for a world where technology transforms education but human mentorship still defines excellence.'
];

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-base font-body text-white">
      <div className="noise-overlay" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="font-display text-sm tracking-[0.2em] text-accent">
            ASTRA NOVA // 2076
          </NavLink>
          <ul className="flex flex-wrap items-center gap-2 text-sm text-muted sm:gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'rounded-lg border border-accent/50 bg-accent/15 px-3 py-1.5 text-accent'
                      : 'rounded-lg border border-white/10 px-3 py-1.5 transition hover:border-accent/40 hover:text-white'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}

function HeroHome() {
  return (
    <section className="hero-gradient border-b border-white/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">New York City, 2076</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Education Reimagined for a Technology-Driven Future</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Astra Nova 2076 prepares students for a world where AI and automation shape every industry.
            Learners master core fundamentals first, then choose the pipeline that matches their strengths and goals.
          </p>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            <div className="card p-4">
              <p className="text-muted">Location</p>
              <p className="mt-1 font-semibold">New York City, NY</p>
            </div>
            <div className="card p-4">
              <p className="text-muted">Academic Year</p>
              <p className="mt-1 font-semibold">2076-2077</p>
            </div>
            <div className="card p-4">
              <p className="text-muted">Model</p>
              <p className="mt-1 font-semibold">Foundations to Pipeline Choice</p>
            </div>
          </div>
        </div>
        <div className="card p-3">
          <img src={heroImage} alt="Futuristic students learning with AI" className="h-full w-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  );
}

function PageShell({ title, subtitle, children }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-white sm:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-4xl text-lg text-muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroHome />
      <PageShell
        title="Explore the Project"
        subtitle="Each section is now its own page so your audience can navigate content more clearly."
      >
        <div className="card mb-4 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Founder Spotlight</p>
          <p className="mt-2 text-muted">
            Founded by Justin Hoang, Astra Nova 2076 grew from a Stockton University class project into a
            future-school model built around core mastery, technology integration, and student pipeline choice.
          </p>
          <p className="mt-2 text-sm text-muted">
            The original class concept became a full operating blueprint after iterative pilots, mentor feedback,
            and systems design refinement for large-scale implementation.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {navItems
            .filter((item) => item.to !== '/')
            .map((item) => (
              <NavLink key={item.to} to={item.to} className="card p-5 transition hover:border-accent/40">
                <p className="text-lg font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-muted">Open the {item.label.toLowerCase()} page.</p>
              </NavLink>
            ))}
        </div>
      </PageShell>
    </>
  );
}

function AboutPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="Astra Nova 2076 is a future-ready school model in New York City, designed for a world where technology has transformed education."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="card p-6">
          <h2 className="text-xl font-semibold">Who We Are</h2>
          <p className="mt-3 text-muted">
            We are a next-generation learning community built on a clear sequence: master the fundamentals, then choose your own pipeline.
            Our model combines AI-powered personalization with mentor-led guidance so students can build both technical skill and human judgment.
          </p>
        </article>
        <article className="card p-6">
          <h2 className="text-xl font-semibold">What Makes Us Different</h2>
          <ul className="mt-3 space-y-2 text-muted">
            <li>- Foundations-first model before specialization</li>
            <li>- Student-selected pipelines after core mastery</li>
            <li>- AI tutors for instant feedback and adaptive pacing</li>
            <li>- Mentors focused on ethics, collaboration, and leadership</li>
          </ul>
        </article>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="card p-3">
          <img src={cityImage} alt="Smart city where future students learn and collaborate" className="h-full w-full rounded-xl object-cover" />
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold">Our Learning Environment</h2>
          <p className="mt-3 text-muted">
            Technology is embedded in every learning studio: adaptive platforms, simulation labs, portfolio tracking, and global collaboration tools.
            Students move through dynamic schedules that prioritize deep work, mentorship, and project exhibitions.
          </p>
          <p className="mt-3 text-muted">
            The campus is based in New York City to connect students with diverse industries, institutions, and communities
            where their pipeline work can have immediate real-world impact.
          </p>
        </div>
      </div>
      <div className="mt-6 card p-6">
        <h2 className="text-xl font-semibold">Pipeline Examples</h2>
        <p className="mt-3 text-muted">
          Students can pursue AI Engineering, Health Innovation, Creative Media, Entrepreneurship, Social Impact,
          and future interdisciplinary tracks co-developed with mentors and partner organizations.
        </p>
        <ul className="mt-3 space-y-2 text-muted">
          <li>- AI Engineering: model design, evaluation, and safety-by-design workflows</li>
          <li>- Health Innovation: prevention systems, diagnostics concepts, and care equity</li>
          <li>- Creative Media: immersive narrative, digital production, and public storytelling</li>
          <li>- Entrepreneurship: venture design, market testing, and product iteration</li>
          <li>- Civic Leadership: policy prototyping, community systems, and impact measurement</li>
        </ul>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {schoolSnapshot.map((item) => (
          <article key={item.label} className="card p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">{item.label}</p>
            <p className="mt-2 text-lg text-white">{item.value}</p>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
            <p className="mt-2 text-sm text-accent">{item.metric}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 card p-6">
        <h2 className="text-xl font-semibold">Founder Story: Justin Hoang</h2>
        <div className="mt-3 space-y-3 text-muted">
          {founderStory.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function FAQPage() {
  return (
    <PageShell
      title="FAQ"
      subtitle="Answers to common student and family questions about enrollment, curriculum, assessment, and support systems."
    >
      <div className="space-y-4">
        {faqItems.map((item) => (
          <article key={item.question} className="card p-6">
            <h2 className="text-lg font-semibold">{item.question}</h2>
            <p className="mt-2 text-muted">{item.answer}</p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {item.details.map((detail) => (
                <li key={detail}>- {detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function SampleLessonsPage() {
  return (
    <PageShell
      title="Sample Lessons"
      subtitle="Examples of how foundational mastery and pipeline-based learning work together in 2076."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {sampleLessons.map((lesson) => (
          <article key={lesson.title} className="card p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">{lesson.duration}</p>
            <h2 className="mt-2 text-xl font-semibold">{lesson.title}</h2>
            <p className="mt-3 text-muted">{lesson.objective}</p>
            <p className="mt-3 text-sm font-semibold text-white">Tools</p>
            <ul className="mt-1 space-y-1 text-sm text-muted">
              {lesson.tools.map((tool) => (
                <li key={tool}>- {tool}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-semibold text-white">Target Outcomes</p>
            <ul className="mt-1 space-y-1 text-sm text-muted">
              {lesson.outcomes.map((outcome) => (
                <li key={outcome}>- {outcome}</li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {lesson.flow.map((step) => (
                <li key={step}>- {step}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-6 card p-3">
        <img src={studentImage} alt="Student working in a futuristic learning studio" className="h-[22rem] w-full rounded-xl object-cover" />
      </div>
      <div className="mt-6 card p-6">
        <h2 className="text-xl font-semibold">Why Hands-On Learning Matters</h2>
        <p className="mt-3 text-muted">
          We treat creativity and problem-solving like trainable skills. Students apply core concepts through real challenges,
          which helps them move from memorization to transfer, innovation, and long-term mastery.
        </p>
        <p className="mt-3 text-sm text-muted">
          Each lesson ends with a concrete artifact that is archived in the student portfolio and reviewed by mentors
          for evidence of growth, revision quality, and real-world relevance.
        </p>
      </div>
    </PageShell>
  );
}

function StudentCalendarPage() {
  return (
    <PageShell
      title="Student Calendar"
      subtitle="Key milestones for the 2076-2077 academic cycle, from foundations to capstone defense."
    >
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full border-collapse text-left">
          <thead className="bg-panel">
            <tr>
              <th className="p-4 text-sm uppercase tracking-[0.2em] text-accent">Date</th>
              <th className="p-4 text-sm uppercase tracking-[0.2em] text-accent">Event</th>
              <th className="p-4 text-sm uppercase tracking-[0.2em] text-accent">Details</th>
            </tr>
          </thead>
          <tbody className="bg-black/10 text-muted">
            {calendarEvents.map((item) => (
              <tr key={item.date + item.event} className="border-t border-white/10">
                <td className="p-4 text-white">{item.date}</td>
                <td className="p-4">{item.event}</td>
                <td className="p-4">{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full border-collapse text-left">
          <thead className="bg-panel">
            <tr>
              <th className="p-4 text-sm uppercase tracking-[0.2em] text-accent">Period</th>
              <th className="p-4 text-sm uppercase tracking-[0.2em] text-accent">Start</th>
              <th className="p-4 text-sm uppercase tracking-[0.2em] text-accent">End</th>
              <th className="p-4 text-sm uppercase tracking-[0.2em] text-accent">Duration</th>
            </tr>
          </thead>
          <tbody className="bg-black/10 text-muted">
            {bellSchedule.map((item) => (
              <tr key={item.period} className="border-t border-white/10">
                <td className="p-4 text-white">{item.period}</td>
                <td className="p-4">{item.start}</td>
                <td className="p-4">{item.end}</td>
                <td className="p-4">{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 card p-6">
        <h2 className="text-xl font-semibold">Calendar Notes</h2>
        <ul className="mt-3 space-y-2 text-muted">
          <li>- Students receive progress reports every 6 weeks with competency-level detail.</li>
          <li>- Pipeline changes are permitted during designated advising windows only.</li>
          <li>- Families can attend all exhibition events in person or through livestream access.</li>
        </ul>
      </div>
    </PageShell>
  );
}

function MissionPage() {
  return (
    <PageShell
      title="Our Mission"
      subtitle="Build strong fundamentals, unlock student agency, and prepare graduates for a technology-shaped world."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="card p-6">
          <h2 className="text-xl font-semibold">Mission Statement</h2>
          <p className="mt-3 text-lg text-muted">
            Astra Nova 2076 is committed to developing academically strong, ethically grounded, and future-ready students.
            We ensure every learner masters the basics first, then selects a personalized pipeline to build advanced capability,
            real project experience, and meaningful contribution in a world transformed by technology.
          </p>
          <blockquote className="mt-4 border-l-2 border-accent pl-4 text-muted">
            Master the basics. Choose your pipeline. Build the future.
          </blockquote>
        </article>
        <article className="card p-6">
          <h2 className="text-xl font-semibold">Core Commitments</h2>
          <ul className="mt-3 space-y-2 text-muted">
            <li>- Foundational excellence in core academic competencies</li>
            <li>- Student agency through pipeline selection and ownership</li>
            <li>- Responsible use of AI with clear human oversight</li>
            <li>- Real-world outcomes through public portfolio evidence</li>
          </ul>
        </article>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <article className="card p-6">
          <h2 className="text-xl font-semibold">Graduate Outcomes</h2>
          <ul className="mt-3 space-y-2 text-muted">
            <li>- Verified portfolio across academic and pathway competencies</li>
            <li>- Industry, civic, or research-backed credential endorsements</li>
            <li>- Communication, collaboration, and leadership evidence</li>
            <li>- Clear plan for higher education, entrepreneurship, or career entry</li>
          </ul>
          <p className="mt-3 text-sm text-muted">
            Final readiness is validated through advisor scoring, external reviewer input,
            and student self-assessment across technical and human skills.
          </p>
        </article>
        <div className="card p-3">
          <img src={campusImage} alt="Future campus built for collaborative learning" className="h-full w-full rounded-xl object-cover" />
        </div>
      </div>
    </PageShell>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/sample-lessons" element={<SampleLessonsPage />} />
          <Route path="/student-calendar" element={<StudentCalendarPage />} />
          <Route path="/our-mission" element={<MissionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
