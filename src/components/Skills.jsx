import { skillGroups } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-y border-line bg-bg-soft py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Technical Skills"
          description="The tools and technologies I use across web, data, mobile and machine learning work."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <Reveal
                key={group.title}
                delay={(i % 3) * 80}
                className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
