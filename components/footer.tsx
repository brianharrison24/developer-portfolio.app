const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Facebook', href: 'https://www.facebook.com/bryanligason' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'Gmail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bryanligason1@gmail.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        {/* Brand & Copyright */}
        <div>
          <a href="#top" className="font-mono text-sm font-semibold hover:opacity-80 transition-opacity">
            Brian Harrison<span className="text-primary">.dev</span>
          </a>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} 
          </p>
        </div>

        {/* Social Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith('#') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Back to top link */}
        <div>
          <a
            href="#top"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary underline decoration-dashed underline-offset-4"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}