import { ArrowRight, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import CvMenu from './CvMenu'

const floating = [
  { label: 'React', pos: 'left-[-1.5rem] top-[-1.25rem]', delay: '0s' },
  { label: 'Python', pos: 'right-[-0.75rem] top-[-1rem]', delay: '1.2s' },
  { label: 'Flutter', pos: 'left-[-1.75rem] bottom-[-1.25rem]', delay: '2.1s' },
  { label: 'Scikit-learn', pos: 'right-[-1rem] bottom-[-1.25rem]', delay: '0.6s' },
]

function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-accent opacity-[0.12] blur-3xl"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-2xl shadow-black/25">
        <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/25 to-transparent" />
        <img
          src={`${import.meta.env.BASE_URL}maneesha-profile.png`}
          alt="Maneesha Yapa"
          className="aspect-[4/5] w-full object-cover object-top"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/55 px-4 py-3 backdrop-blur-md">
          <p className="font-display text-sm font-semibold text-white">Maneesha Yapa</p>
          <p className="mt-0.5 font-mono text-xs text-white/70">Web • Data • AI/ML</p>
        </div>
      </div>

      {floating.map((f) => (
        <span
          key={f.label}
          aria-hidden="true"
          style={{ '--float-delay': f.delay }}
          className={`float absolute hidden rounded-lg border border-line bg-surface px-3 py-1.5 font-mono text-xs text-ink shadow-lg shadow-black/20 sm:block ${f.pos}`}
        >
          {f.label}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]"
      />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-code-str opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-code-str" />
            </span>
            Open to internship opportunities
          </p>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Maneesha Yapa.</span>
          </h1>
          <p className="mt-5 text-balance font-display text-xl font-medium text-ink/90 sm:text-2xl">
            Building Digital Experiences Through Code, Data &amp; AI.
          </p>
          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            Final-year HICT undergraduate passionate about web development, data analytics, and intelligent software
            solutions. I enjoy transforming ideas into practical applications through technology.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-accent sm:w-auto px-6 py-3 text-sm font-semibold text-accent-ink shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
            >
              Explore My Projects
              <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface/60 sm:w-auto px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
            >
              <Mail size={17} aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <GithubIcon size={17} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <LinkedinIcon size={17} /> LinkedIn
            </a>
            <CvMenu />
          </div>
        </div>

        <ProfilePhoto />
      </div>
    </section>
  )
}
