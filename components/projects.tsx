import { ArrowUpRight, ExternalLink } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

type Project = {
  title: string
  description: string
  year: string
  tags: string[]
  href: string
  liveHref?: string
  showCodeIcon?: boolean 
}

const projects: Project[] = [
  {
    title: 'Push On Fitness App',
    description:
      'A responsive web app built for fitness tracking, custom training splits, and a dynamic macro calculator.',
    year: '2026',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
    href: 'https://brianharrison24.github.io/pushon-app/',
    liveHref: 'https://brianharrison24.github.io/pushon-app/',
    showCodeIcon: true, 
  },
  {
    title: 'Brian Harrison || About',
    description:
      'A clean personal portfolio website showcasing visual layouts, interactive elements, and responsive designs.',
    year: '2026',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
    href: 'https://brianharrison24.github.io/About/',
    liveHref: 'https://brianharrison24.github.io/About/',
    showCodeIcon: true, 
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at 50% 0%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 70%)',
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          {project.year}
        </span>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="relative mt-12">
        <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveHref && (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <ExternalLink className="size-3.5" />
              Live Site
            </a>
          )}

          {project.showCodeIcon && (
            <span
              title="Protected Codebase"
              className="inline-flex select-none items-center gap-2 rounded-full border border-border/80 bg-secondary/30 px-4 py-2 font-mono text-xs font-medium text-muted-foreground opacity-75"
            >
              <GithubIcon className="size-3.5" />
              Code
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-primary">{'// selected work'}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-muted-foreground sm:block">
            {`${projects.length} projects`}
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}