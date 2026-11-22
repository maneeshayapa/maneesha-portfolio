import { useCallback, useMemo, useState } from 'react'
import { categories, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" className="scroll-mt-16 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Featured Projects"
          description="Real projects across web, data, machine learning and mobile development. Each links to its source code on GitHub."
        />

        <Reveal className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((c) => {
            const count = c === 'All' ? projects.length : projects.filter((p) => p.categories.includes(c)).length
            const on = filter === c
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(c)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  on
                    ? 'border-transparent bg-gradient-accent text-accent-ink'
                    : 'border-line bg-surface text-muted hover:border-accent/50 hover:text-ink'
                }`}
              >
                {c}
                <span className={`ml-2 font-mono text-xs ${on ? 'opacity-70' : 'opacity-60'}`}>{count}</span>
              </button>
            )
          })}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2" aria-live="polite">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} featured={filter === 'All' && i === 0} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>
  )
}
