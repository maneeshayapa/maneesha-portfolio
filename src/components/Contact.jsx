import { useState } from 'react'
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'GitHub', value: 'github.com/maneeshayapa', href: profile.github, icon: GithubIcon, external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/maneesha-yapa', href: profile.linkedin, icon: LinkedinIcon, external: true },
]

const field =
  'w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // No backend: build a mailto: link so the visitor's own email app sends the message.
  const onSubmit = (e) => {
    e.preventDefault()
    const body = `${form.message}\n\n${form.name} (${form.email})`
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's Build Something Meaningful Together."
          description="I am open to internship opportunities, collaborative projects, and learning experiences in web development, data analytics, software development, and AI."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal as="ul" className="space-y-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium text-ink">{value}</span>
                  </span>
                  <ArrowUpRight size={17} aria-hidden="true" className="text-muted transition-colors group-hover:text-ink" />
                </a>
              </li>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="rounded-xl border border-line bg-surface p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input id="c-name" required autoComplete="name" value={form.name} onChange={update('name')} className={field} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input id="c-email" type="email" required autoComplete="email" value={form.email} onChange={update('email')} className={field} placeholder="you@company.com" />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="c-subject" className="mb-2 block text-sm font-medium text-ink">
                  Subject
                </label>
                <input id="c-subject" required value={form.subject} onChange={update('subject')} className={field} placeholder="Internship opportunity" />
              </div>
              <div className="mt-5">
                <label htmlFor="c-message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea id="c-message" required rows={5} value={form.message} onChange={update('message')} className={`${field} resize-y`} placeholder="Tell me about the opportunity or project..." />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
                >
                  <Send size={16} aria-hidden="true" /> Send via email app
                </button>
                <p className="text-xs text-muted" role="status">
                  {sent
                    ? `Your email app should open with the message ready. If it didn't, write to ${profile.email}.`
                    : 'This opens your own email app with the message filled in. Nothing is sent from this page.'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
