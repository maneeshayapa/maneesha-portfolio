import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { aboutParagraphs, education, profile } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const focus = ['Web Development', 'Data Analytics', 'AI & Machine Learning', 'Software Engineering']

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {aboutParagraphs.map((text, i) => (
              <p key={i} className={i === 0 ? 'text-ink/90' : ''}>
                {text}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <div className="rounded-xl border border-line bg-surface p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                  <GraduationCap size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">Education</h3>
              </div>
              <p className="font-medium leading-snug text-ink">{education.degree}</p>
              <p className="mt-2 text-sm text-muted">{education.school}</p>
              <p className="mt-4 inline-block rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
                {education.status}
              </p>
            </div>

            <div className="rounded-xl border border-line bg-surface p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-2/10 text-accent-2">
                  <Sparkles size={20} aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">Interests</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {focus.map((f) => (
                  <li key={f} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-sm text-muted">
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 text-sm text-muted">
                <MapPin size={15} aria-hidden="true" /> {profile.location}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
