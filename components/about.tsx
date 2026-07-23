import { Zap } from 'lucide-react'

// 1. Technical, Art, & Fitness Skills List
const skills = [
  'UI/UX Design',
  'Digital Illustration / Sketching',
  'Visual Arts / Creative Direction',
  'Color Theory & Layouts',
  'Fitness Coaching / Workout Programming',
  'Nutrition & Macro Tracking',
  'Physical Conditioning',
  'Discipline & Consistency',
]

// 2. Skill Progress Bars
const skillLevels = [
  { name: 'Digital Art & Visual Layouts', level: '90%' },
  { name: 'Artistic Vision & Creative Direction', level: '92%' },
  { name: 'Fitness Coaching & Workout Programming', level: '98%' },
  { name: 'UI/UX Design', level: '89%' },
  { name: 'Backend & Database Management', level: '80%' },
]

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        {/* Left Column: About Me Text */}
        <div>
          <p className="font-mono text-sm text-primary">{'// about'}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            About Me
          </h2>
          
          <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">I am an Artist Developer and fitness enthusiast</strong> who approaches code with creativity and precision. Applying the same discipline and consistency from workout programming to software development, I craft pixel-perfect digital interfaces that look stunning and perform flawlessly.
          </p>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
            I thrive on turning imaginative visual ideas into modern, responsive web applications built for real-world impact.
          </p>

          {/* Highlight / Special Note */}
          <div className="mt-8 rounded-xl border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">
              ⚡ <strong className="text-foreground">Push On Fitness App (2026):</strong> Designed and built a responsive fitness tracking web application with custom splits and dynamic macro calculation.
            </p>
          </div>
        </div>

        {/* Right Column: Skills & Progress Bars */}
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Technical & Creative Skills
          </h3>

          {/* Skill Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Zap className="size-3 text-primary" />
                {skill}
              </span>
            ))}
          </div>

          {/* Progress Bars */}
          <div className="mt-8 space-y-5">
            {skillLevels.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between font-mono text-xs text-muted-foreground">
                  <span>{item.name}</span>
                  <span className="text-primary">{item.level}</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: item.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}