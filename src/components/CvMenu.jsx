import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Download, FileText } from 'lucide-react'
import { profile } from '../data/profile'

/** "Download CV" button with a small menu so the right CV can be chosen per application. */
export default function CvMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <Download size={17} aria-hidden="true" />
        Download CV
        <ChevronDown size={15} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-20 mt-3 w-56 overflow-hidden rounded-lg border border-line bg-surface p-1 shadow-xl shadow-black/20">
          {profile.cvFiles.map((cv) => (
            <li key={cv.href}>
              <a
                href={cv.href}
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-ink transition-colors hover:bg-surface-2"
              >
                <FileText size={16} className="text-accent" aria-hidden="true" />
                {cv.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
