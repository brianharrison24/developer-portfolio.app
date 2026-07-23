import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  )
}
