import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
    </Reveal>
  )
}
