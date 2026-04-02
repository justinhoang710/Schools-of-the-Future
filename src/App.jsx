import React, { useMemo, useState } from 'react';
import heroImage from './assets/hero-2075.png';
import cityImage from './assets/world-2075.png';
import campusImage from './assets/campus-architecture.png';
import studentImage from './assets/day-in-life.png';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#world', label: 'World 2075' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#learning', label: 'How Students Learn' },
  { href: '#campus', label: 'Campus' },
  { href: '#community', label: 'Community' },
  { href: '#accessibility', label: 'Accessibility' },
  { href: '#funding', label: 'Funding' },
  { href: '#system', label: 'System Shift' },
  { href: '#politics', label: 'Politics' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#day', label: 'Day in Life' }
];

const pathways = {
  'Tech Development': {
    description: 'Build intelligent products and AI systems for real-world sectors.',
    competencies: ['Prompt Engineering', 'Model Evaluation', 'Full-Stack Coding', 'Cybersecurity'],
    studios: ['AI Health Assistant', 'Climate Prediction Dashboard', 'Urban Mobility Optimizer']
  },
  Arts: {
    description: 'Master storytelling and creative production across media formats.',
    competencies: ['Narrative Design', 'Digital Composition', 'Film Production', 'Immersive Media'],
    studios: ['Interactive Short Film', 'Global Music Collaboration', 'AR Gallery Exhibition']
  },
  'Sports & Performance': {
    description: 'Use performance science, teamwork, and leadership to optimize outcomes.',
    competencies: ['Biomechanics', 'Recovery Protocols', 'Tactical Analysis', 'Communication'],
    studios: ['Athlete Performance Lab', 'E-sports Strategy League', 'Team Coaching Residency']
  },
  'Business & Entrepreneurship': {
    description: 'Launch ventures and learn product-market fit through live market testing.',
    competencies: ['Market Research', 'Financial Modeling', 'Operations', 'Negotiation'],
    studios: ['Student Startup Accelerator', 'Social Enterprise Sprint', 'Product Launch Week']
  },
  'Social Impact': {
    description: 'Design policy and technology interventions for civic and community progress.',
    competencies: ['Policy Analysis', 'Community Research', 'Impact Measurement', 'Public Speaking'],
    studios: ['Neighborhood Equity Lab', 'Civic Data Project', 'Youth Policy Forum']
  }
};

const foundationCurriculum = [
  {
    subject: 'Math',
    scope: 'Quantitative reasoning, statistics, modeling, and financial math.',
    outcomes: ['Analyze real datasets', 'Build predictive models', 'Use math in daily decision-making']
  },
  {
    subject: 'Reading & Writing',
    scope: 'Critical reading, argumentation, media literacy, and public communication.',
    outcomes: ['Write persuasive briefs', 'Evaluate source reliability', 'Present evidence-based arguments']
  },
  {
    subject: 'History & Civics',
    scope: 'Historical systems, policy structures, and global civic participation.',
    outcomes: ['Interpret social change', 'Debate policy tradeoffs', 'Connect past decisions to future planning']
  },
  {
    subject: 'Science',
    scope: 'Scientific method, systems thinking, environmental and human sciences.',
    outcomes: ['Run controlled experiments', 'Interpret scientific uncertainty', 'Design testable hypotheses']
  }
];

const budgetRows = [
  { category: 'AI Infrastructure & Platforms', percent: '24%', amount: '$100.8M', details: 'Tutor models, adaptive learning engines, cybersecurity, cloud compute.' },
  { category: 'Faculty & Mentor Salaries', percent: '28%', amount: '$117.6M', details: 'Mentors, project coaches, counselors, and continuous training.' },
  { category: 'Campus + Labs + Studios', percent: '18%', amount: '$75.6M', details: 'Tech labs, art spaces, athletic centers, fabrication studios.' },
  { category: 'Student Support & Accessibility', percent: '12%', amount: '$50.4M', details: 'Disability services, assistive tools, meals, transport, mental health.' },
  { category: 'Global Collaboration Programs', percent: '7%', amount: '$29.4M', details: 'Exchange projects, multilingual collaboration tools, travel grants.' },
  { category: 'Research, Pilot Programs, Evaluation', percent: '6%', amount: '$25.2M', details: 'Program trials, assessment audits, curriculum innovation.' },
  { category: 'Operations & Maintenance', percent: '5%', amount: '$21.0M', details: 'Utilities, security, maintenance, administrative systems.' }
];

const policyPoints = [
  {
    title: 'Problems in the old system',
    items: ['Inequality across districts and income levels', 'Test pressure that narrowed learning', 'Curriculum lagging behind technology and labor realities']
  },
  {
    title: 'Political debates in 2075',
    items: ['How much algorithmic guidance is too much?', 'How to prevent corporate influence from shaping curriculum?', 'How to guarantee student privacy in AI-heavy environments?']
  },
  {
    title: 'Governance safeguards',
    items: ['Independent ethics board with students + educators + community members', 'Public transparency reports for AI and funding decisions', 'Open curriculum standards reviewed every 2 years']
  }
];

const timeline = [
  { year: '2031', text: 'Pilot programs introduced competency-based progress in 12 cities.' },
  { year: '2036', text: 'AI tutoring integrated for foundational literacy and numeracy support.' },
  { year: '2042', text: 'State systems started replacing high-stakes testing with performance portfolios.' },
  { year: '2051', text: 'Public-private funding models expanded advanced labs into public schools.' },
  { year: '2060', text: 'Age-based grade levels replaced with mastery bands and mentor cohorts.' },
  { year: '2068', text: 'Global student collaboration network became standard in national policy.' },
  { year: '2075', text: 'Full transition: all learners design personalized pathways after foundations.' }
];

const daySchedule = [
  { time: '07:15', activity: 'AI planner sync', detail: 'Student reviews personalized goals, wellness markers, and project deadlines.' },
  { time: '08:00', activity: 'Foundation sprint', detail: 'Targeted math and writing practice based on prior-day mentor feedback.' },
  { time: '09:30', activity: 'Performance block', detail: 'Sports/arts training with biometric and coaching analytics.' },
  { time: '11:00', activity: 'Global collaboration', detail: 'Team session with international peers on a shared challenge project.' },
  { time: '13:00', activity: 'Pathway studio', detail: 'Hands-on build time in tech, arts, entrepreneurship, or social impact labs.' },
  { time: '15:00', activity: 'Mentor review', detail: 'Portfolio check-in, rubric reflection, and next milestone planning.' },
  { time: '16:00', activity: 'Community contribution', detail: 'Civic action, peer tutoring, or neighborhood problem-solving work.' }
];

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-4xl text-lg text-muted">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function DetailCard({ title, children }) {
  return (
    <article className="card p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-muted">{children}</div>
    </article>
  );
}

export default function App() {
  const [selectedPath, setSelectedPath] = useState('Tech Development');
  const selectedPathData = useMemo(() => pathways[selectedPath], [selectedPath]);

  return (
    <div className="min-h-screen bg-base font-body text-white">
      <div className="noise-overlay" aria-hidden="true" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-base/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="font-display text-sm tracking-[0.2em] text-accent">SOTF // 2075</a>
          <ul className="hidden gap-4 text-sm text-muted xl:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-gradient relative overflow-hidden border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-accent">Home Page</p>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Education Reimagined for 2075</h1>
              <p className="mt-4 text-xl text-muted">Where students choose their future.</p>
              <p className="mt-3 text-sm text-accent">School Name: Astra Nova 2075</p>
              <p className="mt-1 max-w-3xl text-sm text-muted">Purpose: rigorous foundations + student-directed specialization for real-world impact.</p>

              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
                <div className="card p-4">
                  <p className="text-muted">Year</p>
                  <p className="mt-1 font-semibold">2075</p>
                </div>
                <div className="card p-4">
                  <p className="text-muted">World</p>
                  <p className="mt-1 font-semibold">AI + personalization</p>
                </div>
                <div className="card p-4">
                  <p className="text-muted">School Model</p>
                  <p className="mt-1 font-semibold">Skill-first, student-designed</p>
                </div>
              </div>

              <blockquote className="mt-8 border-l-2 border-accent pl-4 text-muted">
                “We empower students to design their own education after mastering the fundamentals.”
              </blockquote>

              <div className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
                <p>Enrollment: 14,000 students across physical + virtual campuses</p>
                <p>Mentor ratio: 1 mentor for every 14 students</p>
                <p>Project completion target: 8 major projects per year</p>
                <p>Graduate outcomes: portfolio + industry/community certification</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn-primary" href="#curriculum">Explore Our Curriculum</a>
                <a className="btn-secondary" href="#day">A Day in the Life</a>
                <a className="btn-secondary" href="#learning">How It Works</a>
              </div>
            </div>

            <div className="card p-3">
              <img src={heroImage} alt="Futuristic students learning with AI" className="h-full w-full rounded-xl object-cover" />
            </div>
          </div>
        </section>

        <Section
          id="world"
          title="The World of 2075"
          subtitle="Technology transformed work and daily life. Education had to shift from memorization to adaptability, creativity, and high-agency problem solving."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <DetailCard title="Technology Everywhere">
              <ul className="space-y-2">
                <li>AI tutors provide continuous feedback in every subject.</li>
                <li>Automation handles repetitive tasks in most industries.</li>
                <li>Smart cities connect transport, healthcare, and public services in real time.</li>
              </ul>
            </DetailCard>
            <DetailCard title="Changing Careers">
              <ul className="space-y-2">
                <li>Most people now move across 3-5 career fields in a lifetime.</li>
                <li>Hiring emphasizes portfolios, verified skills, and project outcomes.</li>
                <li>Teams are global and cross-disciplinary by default.</li>
              </ul>
            </DetailCard>
            <DetailCard title="Why Schools Had to Change">
              <ul className="space-y-2">
                <li>Old model: fixed pacing, lecture-heavy, high-stakes tests.</li>
                <li>New model: flexible pacing, mentorship, authentic production.</li>
                <li>Core shift: from content recall to transfer of learning in new contexts.</li>
              </ul>
            </DetailCard>
          </div>
          <div className="mt-8 card p-3">
            <img src={cityImage} alt="Smart city in 2075" className="h-72 w-full rounded-xl object-cover" />
          </div>
        </Section>

        <Section
          id="curriculum"
          title="Curriculum"
          subtitle="The curriculum is two-phase: foundations for everyone, then specialization pathways with real project output and public demonstrations."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="card p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Phase 1: Foundations</p>
              <p className="mt-3 text-muted">All students complete foundational competency bands before entering deep specialization.</p>
              <div className="mt-4 space-y-4">
                {foundationCurriculum.map((item) => (
                  <div key={item.subject} className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold">{item.subject}</p>
                    <p className="mt-1 text-sm text-muted">{item.scope}</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted">
                      {item.outcomes.map((outcome) => (
                        <li key={outcome}>- {outcome}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="card p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Phase 2: Choose Your Path</p>
              <p className="mt-3 text-muted">Students select a primary pathway and optional secondary concentration, then produce capstone work each term.</p>
              <ul className="mt-4 space-y-2 text-muted">
                <li>Tech Development (AI, coding, systems design)</li>
                <li>Arts (music, design, film, immersive storytelling)</li>
                <li>Sports & Performance (training science, leadership)</li>
                <li>Business & Entrepreneurship (venture design)</li>
                <li>Social Impact (policy, civic and community innovation)</li>
              </ul>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-muted">
                <p>Weekly structure per student:</p>
                <p>10 hrs foundation skills, 14 hrs pathway studios, 6 hrs mentorship and reflection, 4 hrs community contribution.</p>
              </div>
            </article>
          </div>

          <div className="mt-8 card p-6">
            <h3 className="text-2xl font-semibold">Build Your Path</h3>
            <p className="mt-2 text-muted">Select a pathway to preview competencies and sample studio projects.</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {Object.keys(pathways).map((path) => (
                <button
                  key={path}
                  onClick={() => setSelectedPath(path)}
                  className={selectedPath === path ? 'chip chip-active' : 'chip'}
                >
                  {path}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-5">
              <p className="font-semibold text-accent">{selectedPath}</p>
              <p className="mt-2 text-sm text-white/90">{selectedPathData.description}</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white">Core competencies</p>
                  <ul className="mt-2 space-y-1 text-sm text-white/90">
                    {selectedPathData.competencies.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Sample studio outputs</p>
                  <ul className="mt-2 space-y-1 text-sm text-white/90">
                    {selectedPathData.studios.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="learning"
          title="How Students Learn (Pedagogy)"
          subtitle="Students learn through adaptive instruction, mentorship, and project evidence instead of one-time exam performance."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DetailCard title="AI-Powered Personalization">Daily learning plans adapt to mastery data, pace, and student goals.</DetailCard>
            <DetailCard title="Teachers as Mentors">Mentors coach decision-making, critical thinking, and portfolio quality.</DetailCard>
            <DetailCard title="No Standardized Tests">Progress is demonstrated through exhibitions, prototypes, and presentations.</DetailCard>
            <DetailCard title="Project-Based Learning">Students solve real problems for local and global partners.</DetailCard>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Assessment Model</h3>
              <ul className="mt-3 space-y-2 text-muted">
                <li>40% project execution and technical quality</li>
                <li>25% collaboration and communication</li>
                <li>20% reflection and revision cycles</li>
                <li>15% community impact and ethics</li>
              </ul>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Example</h3>
              <p className="mt-3 text-muted">Instead of taking a test on environmental science, students build a local heat-map model and propose interventions to city planners.</p>
            </article>
          </div>
        </Section>

        <Section
          id="campus"
          title="Campus & Architecture"
          subtitle="Physical design supports the pedagogy: flexible, technology-rich, and centered on accessible creation spaces."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="card p-6 text-muted">
              <ul className="space-y-3">
                <li>Flexible learning zones replace fixed classroom rows.</li>
                <li>Dedicated AI labs, maker spaces, arts studios, and athletic science centers.</li>
                <li>VR/AR simulation suites for medicine, engineering, and history immersion.</li>
                <li>Hybrid architecture: seamless transition between in-person and virtual attendance.</li>
                <li>Quiet sensory rooms and wellness spaces distributed across campus.</li>
              </ul>
            </article>
            <div className="card p-3">
              <img src={campusImage} alt="Future learning campus architecture" className="h-full w-full rounded-xl object-cover" />
            </div>
          </div>
        </Section>

        <Section
          id="community"
          title="Students & Community"
          subtitle="The school is global, mixed-age, and interest-centered. Community contribution is part of graduation requirements."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DetailCard title="Open Access">Admissions prioritize broad access with multilingual onboarding and financial support.</DetailCard>
            <DetailCard title="No Age-Based Grades">Learners are grouped by readiness, goals, and demonstrated competencies.</DetailCard>
            <DetailCard title="Interest Cohorts">Students join cross-age studios like Climate Systems, Story Lab, and Performance Science.</DetailCard>
          </div>
          <div className="mt-6 card p-6 text-muted">
            Graduation requirement includes at least 240 hours of verified community impact work across the student journey.
          </div>
        </Section>

        <Section
          id="accessibility"
          title="Accessibility & Inclusion"
          subtitle="Accessibility is built into curriculum delivery, physical space, and digital platforms from day one."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <DetailCard title="Adaptive AI Tools">
              Real-time reading support, focus scaffolds for ADHD, and multisensory learning modes for dyslexia and processing differences.
            </DetailCard>
            <DetailCard title="Flexible Pacing">
              Students can accelerate or extend timelines without stigma, with mastery checkpoints rather than seat-time requirements.
            </DetailCard>
            <DetailCard title="Universal Design Campus">
              Full wheelchair access, tactile wayfinding, adaptive lighting, captioned/translated media, and sensory-friendly zones.
            </DetailCard>
            <DetailCard title="Equal Tech Access">
              Every learner receives connected devices, assistive hardware, and subsidized broadband or campus access hubs.
            </DetailCard>
          </div>
        </Section>

        <Section
          id="funding"
          title="Funding & School Type"
          subtitle="A public-private hybrid keeps education free while financing advanced infrastructure, inclusion services, and teacher development."
        >
          <div className="card p-6">
            <p className="text-lg font-semibold">Annual operating budget: $420M</p>
            <p className="mt-2 text-muted">Funding sources: 52% government, 28% industry partnership agreements, 20% research and innovation grants.</p>

            <div className="mt-5 overflow-x-auto rounded-xl border border-white/10">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-black/30 text-white">
                  <tr>
                    <th className="p-3">Category</th>
                    <th className="p-3">Percent</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">What It Covers</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  {budgetRows.map((row) => (
                    <tr key={row.category} className="border-t border-white/10">
                      <td className="p-3 text-white">{row.category}</td>
                      <td className="p-3">{row.percent}</td>
                      <td className="p-3">{row.amount}</td>
                      <td className="p-3">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section
          id="system"
          title="Breaking the System (Grammar of Schooling)"
          subtitle="This model intentionally replaces the default assumptions of 20th-century schooling."
        >
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full border-collapse text-left">
              <thead className="bg-panel">
                <tr>
                  <th className="p-4 font-display text-sm tracking-wider">Old System</th>
                  <th className="p-4 font-display text-sm tracking-wider">New System</th>
                </tr>
              </thead>
              <tbody className="bg-black/10 text-muted">
                <tr className="border-t border-white/10">
                  <td className="p-4">Age-based grade progression</td>
                  <td className="p-4">Mastery-based progression and flexible pacing</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4">Fixed class periods and schedules</td>
                  <td className="p-4">Dynamic schedules based on learning goals and projects</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4">Teacher-led content delivery</td>
                  <td className="p-4">Mentor-guided inquiry and collaborative design</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4">Standardized testing as primary measure</td>
                  <td className="p-4">Portfolio evidence, exhibitions, and real performance data</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="p-4">Diploma as endpoint</td>
                  <td className="p-4">Lifelong stackable credentials and dynamic skill records</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="politics"
          title="Politics & Change"
          subtitle="Transforming education required policy reform, public trust, and clear governance mechanisms."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {policyPoints.map((group) => (
              <article key={group.title} className="card p-6">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-muted">
                  {group.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="timeline"
          title="How This School Became Reality"
          subtitle="The transition took decades of pilots, policy updates, infrastructure investment, and public accountability."
        >
          <ol className="space-y-4">
            {timeline.map((item) => (
              <li key={item.year} className="card flex gap-4 p-5">
                <span className="font-display text-accent">{item.year}</span>
                <p className="text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="day"
          title="A Day in the Life"
          subtitle="A realistic student schedule blending foundational study, specialization, collaboration, and mentor feedback."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-6">
              <div className="space-y-3">
                {daySchedule.map((row) => (
                  <div key={row.time} className="rounded-xl border border-white/10 bg-black/20 p-3">
                    <p className="font-semibold text-accent">{row.time} - {row.activity}</p>
                    <p className="mt-1 text-sm text-muted">{row.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-3">
              <img src={studentImage} alt="Student working in a futuristic learning studio" className="h-full w-full rounded-xl object-cover" />
            </div>
          </div>
        </Section>

        <Section
          id="design-commitments"
          title="Design Commitments"
          subtitle="Astra Nova 2075 is based in New York City, New York, and is designed to deliver equitable, high-agency learning at global scale."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Identity and Purpose</h3>
              <p className="mt-3 text-muted">
                Astra Nova 2075 exists to ensure every student masters core foundations, then builds a specialized pathway linked to real social and economic impact.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Location and Rationale</h3>
              <p className="mt-3 text-muted">
                The campus is located in New York City because NYC combines diversity, dense infrastructure, global connectivity, and direct access to arts, technology, finance, healthcare, and public institutions.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Student Population Strategy</h3>
              <p className="mt-3 text-muted">
                Enrollment includes students from NYC and global partner hubs. The model intentionally changes the traditional school population by removing age-based grades and organizing learners by mastery and interest.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Equality and Fair Treatment</h3>
              <p className="mt-3 text-muted">
                Equality is protected through universal design architecture, assistive AI supports, multilingual instruction, guaranteed technology access, anti-bias accountability systems, and recurring equity audits.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Why the Design Choices Fit 2075</h3>
              <p className="mt-3 text-muted">
                Flexible spaces, mentorship, and project-based assessment were selected because they match future labor conditions where adaptability, collaboration, and demonstrated skill matter more than static test scores.
              </p>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-semibold">Political Pressures Addressed</h3>
              <p className="mt-3 text-muted">
                The school is built to respond to educational inequality, testing pressure, student-data privacy risk, and corporate influence by using transparent governance, public reporting, and independent ethics oversight.
              </p>
            </article>
          </div>
        </Section>

        <Section
          id="conclusion"
          title="Conclusion / Future Vision"
          subtitle="Education is no longer one-size-fits-all. Students design purposeful pathways and graduate with evidence of real capability."
        >
          <div className="card p-8 text-center shadow-glow">
            <p className="text-2xl font-semibold sm:text-3xl">The future of school is freedom with accountability.</p>
            <p className="mx-auto mt-3 max-w-3xl text-muted">
              This model keeps rigorous foundations while giving students ownership, flexible pacing, and meaningful pathways tied to real societal needs.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
