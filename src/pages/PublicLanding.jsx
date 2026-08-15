import { useState } from 'react'
import { GraduationCap, Code2, Users2, Layers, MessageSquareText, ChevronDown, Mail, MapPin } from 'lucide-react'
import Button from '../components/ui/Button'
import { TextInput, Textarea } from '../components/ui/Input'

const tracks = [
  { name: 'Frontend Development', desc: 'React, responsive design, and modern UI engineering.' },
  { name: 'Backend Development', desc: 'Node.js, Express, databases, and REST API design.' },
  { name: 'Full Stack Development', desc: 'End-to-end MERN projects from schema to deploy.' },
  { name: 'Cybersecurity', desc: 'Web app security, penetration testing, and secure coding.' },
]

const mentors = [
  { name: 'Selam Alemayehu', role: 'Lead Mentor', spec: 'Cybersecurity', bio: 'Focused on web app security and hands-on penetration testing labs.' },
  { name: 'Dagim Mekonnen', role: 'Mentor', spec: 'Backend Development', bio: 'Node.js and API design, previously at a fintech startup.' },
  { name: 'Rahel Getachew', role: 'Mentor', spec: 'Frontend Development', bio: 'React specialist with a focus on accessible, performant UI.' },
]

const faqs = [
  { q: 'Who can apply to the bootcamp?', a: 'Any ASTU student interested in software engineering, regardless of prior coding experience — though basic programming familiarity helps.' },
  { q: 'How long does the bootcamp run?', a: 'Each cohort runs for the summer term, with weekly sessions, mentor check-ins, and a final project.' },
  { q: 'Do I need to pick a track upfront?', a: 'Yes — you\'ll choose Frontend, Backend, Full Stack, or Cybersecurity when you apply, based on where you want to grow.' },
  { q: 'Is there a cost to join?', a: 'No, the bootcamp is run by ASTU MSJ and is free for enrolled students.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border py-4 dark:border-dark-border">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between text-left">
        <span className="text-body font-medium text-text-primary dark:text-dark-text">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="mt-2 text-small text-text-secondary dark:text-dark-text-secondary">{a}</p>}
    </div>
  )
}

export default function PublicLanding() {
  return (
    <div className="bg-app text-text-primary dark:bg-dark-bg dark:text-dark-text">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur dark:border-dark-border dark:bg-dark-surface/90">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-body font-semibold">ASTU MSJ Bootcamp</span>
          </div>
          <nav className="hidden items-center gap-7 text-small font-medium text-text-secondary dark:text-dark-text-secondary md:flex">
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#tracks" className="hover:text-brand">Tracks</a>
            <a href="#mentors" className="hover:text-brand">Mentors</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-small font-medium text-text-secondary hover:text-brand dark:text-dark-text-secondary">Login</a>
            <Button as="a" href="/register" size="sm">Join Bootcamp</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-display text-text-primary dark:text-dark-text">Master Skills. Build Projects. Shape Your Future.</h1>
            <p className="mt-5 text-body-lg text-text-secondary dark:text-dark-text-secondary">
              Join the ASTU MSJ Summer Bootcamp and learn through practical projects, mentorship, and collaborative learning.
            </p>
            <div className="mt-8 flex gap-3">
              <Button as="a" href="/register" size="lg">Get Started</Button>
              <Button as="a" href="#tracks" variant="outline" size="lg">Explore Tracks</Button>
            </div>
            <div className="mt-12 flex gap-10">
              <div><p className="text-h2 text-brand">248+</p><p className="text-small text-text-muted">Students</p></div>
              <div><p className="text-h2 text-brand">18</p><p className="text-small text-text-muted">Mentors</p></div>
              <div><p className="text-h2 text-brand">4</p><p className="text-small text-text-muted">Learning Tracks</p></div>
            </div>
          </div>
          <div className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-brand-bg to-brand-soft dark:from-brand/10 dark:to-brand/5">
            <Code2 className="h-32 w-32 text-brand/40" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-h1 text-text-primary dark:text-dark-text">The Bootcamp Experience</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Code2, title: 'Practical Learning', desc: 'Learn by building, not just watching lectures.' },
            { icon: Users2, title: 'Expert Mentorship', desc: 'Weekly guidance from working engineers.' },
            { icon: Layers, title: 'Real Projects', desc: 'Ship a portfolio-ready capstone project.' },
            { icon: MessageSquareText, title: 'Collaborative Community', desc: 'Learn alongside peers across every track.' },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-border bg-surface p-6 shadow-card dark:border-dark-border dark:bg-dark-surface">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-bg text-brand dark:bg-brand/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-h4 text-text-primary dark:text-dark-text">{f.title}</h3>
              <p className="mt-1.5 text-small text-text-secondary dark:text-dark-text-secondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-h1 text-text-primary dark:text-dark-text">Learning Tracks</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-surface p-6 shadow-card dark:border-dark-border dark:bg-dark-surface">
              <h3 className="text-h3 text-text-primary dark:text-dark-text">{t.name}</h3>
              <p className="mt-2 text-body text-text-secondary dark:text-dark-text-secondary">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mentors */}
      <section id="mentors" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-h1 text-text-primary dark:text-dark-text">Meet the Mentors</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {mentors.map((m) => (
            <div key={m.name} className="rounded-lg border border-border bg-surface p-6 text-center shadow-card dark:border-dark-border dark:bg-dark-surface">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-h4 font-semibold text-brand dark:bg-brand/20">
                {m.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="mt-3 text-h4 text-text-primary dark:text-dark-text">{m.name}</h3>
              <p className="text-small text-brand">{m.role} · {m.spec}</p>
              <p className="mt-2 text-small text-text-secondary dark:text-dark-text-secondary">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-h1 text-text-primary dark:text-dark-text">Frequently Asked Questions</h2>
        <div className="mt-8">
          {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-h1 text-text-primary dark:text-dark-text">Get in Touch</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <form className="space-y-4">
            <TextInput id="c-name" label="Name" placeholder="Your name" />
            <TextInput id="c-email" label="Email" type="email" placeholder="you@example.com" />
            <Textarea id="c-message" label="Message" rows={4} placeholder="How can we help?" />
            <Button type="submit">Send Message</Button>
          </form>
          <div className="space-y-4 text-body text-text-secondary dark:text-dark-text-secondary">
            <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-brand" /> msj-bootcamp@astu.edu.et</p>
            <p className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-brand" /> Adama Science and Technology University</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-navy px-6 py-10 text-text-sidebar">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5 text-white">
            <GraduationCap className="h-5 w-5" />
            <span className="text-small font-semibold">ASTU MSJ Bootcamp</span>
          </div>
          <p className="text-caption">© 2026 ASTU MSJ Summer Bootcamp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
