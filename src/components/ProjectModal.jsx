import { useEffect, useRef } from 'react'
import { Check, ExternalLink, X } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import ProjectVisual from './ProjectVisual'
import { StatusBadge, Tag } from './ProjectCard'

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const previouslyFocused = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll('a[href], button:not([disabled])')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocused?.focus?.()
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="modal-panel relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-surface sm:rounded-xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-lg border border-line bg-bg/80 text-ink backdrop-blur transition-colors hover:border-accent/60"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <ProjectVisual project={project} className="aspect-video w-full" />

        <div className="p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {project.categories.map((c) => (
              <span key={c} className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {c}
              </span>
            ))}
            {project.status && <StatusBadge>{project.status}</StatusBadge>}
          </div>

          <h3 id="project-modal-title" className="font-display text-2xl font-semibold text-ink">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

          {project.highlight && (
            <p className="mt-5 flex items-baseline gap-2 rounded-lg border border-line bg-surface-2 px-4 py-3">
              <span className="font-display text-2xl font-semibold text-gradient">{project.highlight.value}</span>
              <span className="text-sm text-muted">{project.highlight.label}</span>
            </p>
          )}

          <h4 className="mb-3 mt-7 font-mono text-xs uppercase tracking-[0.16em] text-ink">Key features</h4>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mb-3 mt-7 font-mono text-xs uppercase tracking-[0.16em] text-ink">Technologies</h4>
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                <GithubIcon size={16} /> View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink hover:border-accent/60"
              >
                <ExternalLink size={16} aria-hidden="true" /> Live demo
              </a>
            )}
            {!project.github && (
              <p className="text-sm text-muted">Repository not published yet. This project is still in development.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
