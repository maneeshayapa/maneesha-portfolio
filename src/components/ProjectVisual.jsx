import { Brain, ChartColumn, Code, Smartphone } from 'lucide-react'

const icons = {
  'Web Development': Code,
  'Data Analytics': ChartColumn,
  'AI & Machine Learning': Brain,
  'Mobile Applications': Smartphone,
}

/** Real screenshot if provided, otherwise a clearly labelled placeholder. */
export default function ProjectVisual({ project, className = '' }) {
  if (project.screenshot) {
    return (
      <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
        {project.screenshotFit === 'contain' ? (
          <>
            <img
              src={project.screenshot}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
            />
            <img
              src={project.screenshot}
              alt={`${project.title}: ${project.screenshotLabel ?? 'screenshot'}`}
              loading="lazy"
              className="relative h-full w-full object-contain"
            />
          </>
        ) : (
          <img
            src={project.screenshot}
            alt={`${project.title}: ${project.screenshotLabel ?? 'screenshot'}`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        )}
        {project.screenshotLabel && (
          <span className="absolute bottom-2 left-2 rounded-md border border-line bg-bg/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur">
            {project.screenshotLabel}
          </span>
        )}
      </div>
    )
  }

  const Icon = icons[project.categories[0]] ?? Code
  return (
    <div
      className={`relative overflow-hidden bg-surface-2 ${className}`}
      role="img"
      aria-label={`${project.title}: screenshot placeholder`}
    >
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-80" />
      <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-accent-2/15 blur-3xl" />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface text-accent">
          <Icon size={22} aria-hidden="true" />
        </span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Screenshot placeholder</p>
          <p className="mt-1 font-mono text-[11px] text-muted/70">add to public/projects/</p>
        </div>
      </div>
    </div>
  )
}
