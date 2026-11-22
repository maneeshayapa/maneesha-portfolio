import { Briefcase, Clock, GraduationCap, Trophy, Users } from 'lucide-react'
import { achievements, activities, education, experience } from '../data/profile'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function InfoCard({ icon: Icon, title, delay, children }) {
  return (
    <Reveal delay={delay} className="rounded-xl border border-line bg-surface p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">{title}</h3>
      </div>
      {children}
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-line bg-bg-soft py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Experience" title="Professional Experience" />

        <Reveal className="relative rounded-xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-accent text-accent-ink">
              <Briefcase size={22} aria-hidden="true" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {experience.role} <span className="text-muted">·</span> {experience.company}
                </h3>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                  <Clock size={13} aria-hidden="true" /> {experience.duration}
                </span>
              </div>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">{experience.description}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <InfoCard icon={GraduationCap} title="Education">
            <p className="font-medium leading-snug text-ink">{education.degree}</p>
            <p className="mt-2 text-sm text-muted">{education.school}</p>
            <p className="mt-3 font-mono text-xs text-muted">{education.status}</p>
          </InfoCard>

          <InfoCard icon={Trophy} title="Achievement" delay={80}>
            <ul className="space-y-2">
              {achievements.map((a) => (
                <li key={a} className="font-medium leading-snug text-ink">
                  {a}
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={Users} title="Extracurricular" delay={160}>
            <ul className="space-y-2.5">
              {activities.map((a) => (
                <li key={a} className="flex gap-2.5 text-sm text-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
