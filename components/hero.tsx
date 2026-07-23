'use client'

import { ArrowRight, FileText } from 'lucide-react'
import Typewriter from 'typewriter-effect'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-28 pb-20 lg:px-10"
    >
      {/* floating decorative circles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-24 top-16 size-72 rounded-full bg-primary/20 blur-3xl"
          style={{ animation: 'float-slow 9s ease-in-out infinite' }}
        />
        <div
          className="absolute right-10 top-1/3 size-40 rounded-full bg-primary/10 blur-2xl"
          style={{ animation: 'float-slow 11s ease-in-out infinite 1s' }}
        />
        <div
          className="absolute bottom-10 left-1/3 size-56 rounded-full bg-[#b91c1c]/15 blur-3xl"
          style={{ animation: 'float-slow 13s ease-in-out infinite 0.5s' }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div className="order-2 lg:order-1">
          <p className="text-lg font-medium text-foreground">Hello, I&apos;m</p>

          <h1 className="mt-2 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl">
            Brian Harrison
          </h1>

          {/* Typewriter Effect Container */}
          <div className="mt-6 flex min-h-8 items-center font-mono text-lg font-semibold text-primary sm:text-xl">
            <Typewriter
              options={{
                strings: [
                  'An artist developer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work
              <ArrowRight className="size-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <FileText className="size-4" />
              Download CV / Resume
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full bg-primary/40 blur-2xl"
              aria-hidden
            />
            <div className="relative size-64 overflow-hidden rounded-full border-4 border-primary shadow-[0_0_60px_-5px] shadow-primary/60 sm:size-80">
              <img
                src="/images/profile.jpg"
                alt="Bryan Harrison"
                loading="eager"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback: Kung wala sa public/profile.jpg, hahanapin nito sa public/images/profile.jpg
                  const img = e.currentTarget
                  if (!img.src.includes('/images/profile.jpg')) {
                    img.src = '/images/profile.jpg'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}