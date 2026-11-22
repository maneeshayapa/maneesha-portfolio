import { ArrowUpRight, ExternalLink, Users } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import ProjectVisual from './ProjectVisual'

const MAX_TAGS = 5

export function Tag({ children }) {
  return (
    <li className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">{children}</li>
  )
}

export function StatusBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-2/40 bg-accent-2/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent-2">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent-2" />
      {children}
    </span>
  )
}

export default function ProjectCard({ project, featured, onOpen }) {
  const extra = project.tech.length - MAX_TAGS

  return (
    <article
      className={`group flex overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-black/10 ${
        featured ? 'flex-col md:col-span-2 md:flex-row' : 'flex-col'
      }`}
    >
      <ProjectVisual
        project={project}
        className={featured ? 'aspect-video md:aspect-auto md:min-h-[18rem] md:w-[46%]' : 'aspect-video'}
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {project.categories.map((c) => (
            <span key={c} className="font-mono text-[11px] uppercase tracking-wider text-accent">
              {c}
            </span>
          ))}
          {project.status && <StatusBadge>{project.status}</StatusBadge>}
          {project.team && (
            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted">
              <Users size={12} aria-hidden="true" /> Team project
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-ink">{project.title}</h3>
        <p className="mt-0.5 text-sm text-muted">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        {project.highlight && (
          <p className="mt-4 flex items-baseline gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2">
            <span className="font-display text-lg font-semibold text-gradient">{project.highlight.value}</span>
            <span className="text-xs text-muted">{project.highlight.label}</span>
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tech.slice(0, MAX_TAGS).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {extra > 0 && <Tag>+{extra}</Tag>}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            View details <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/60"
            >
              <GithubIcon size={15} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/60"
            >
              <ExternalLink size={15} aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
