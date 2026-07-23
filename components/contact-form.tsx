import type { JSX } from 'react'

// 1. SVG Icon Components
function GmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  )
}

// 2. Types & Data
type ContactLink = {
  name: string
  href: string
  isExternal?: boolean
  icon: (props: { className?: string }) => JSX.Element
}

const contactLinks: ContactLink[] = [
  {
    name: 'Gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bryanligason1@gmail.com',
    isExternal: true,
    icon: GmailIcon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bryanligason',
    isExternal: true,
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    isExternal: true,
    icon: InstagramIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com',
    isExternal: true,
    icon: GithubIcon,
  },
]

// 3. Main Component
export function ContactForm() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-sm text-primary">{'// get in touch'}</p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contact Me
        </h2>

        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Let&apos;s collaborate! Reach me through any of the platforms below:
        </p>

        {/* Social Pill Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {contactLinks.map((platform) => {
            const Icon = platform.icon
            return (
              <a
                key={platform.name}
                href={platform.href}
                target={platform.isExternal ? '_blank' : '_self'}
                rel={platform.isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-800 hover:shadow-red-900/40"
              >
                <Icon className="size-4" />
                <span>{platform.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}