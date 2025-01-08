import { FloatingNav } from "@/components/ui/floating-navbar"
import { Approach } from "@/components/web/Approach"
import Clients from "@/components/web/Client"
import Experience from "@/components/web/Experience"
import Footer from "@/components/web/Footer"
import Hero from "@/components/web/Hero"
import Projects from "@/components/web/Projects"
import { navItems } from "@/data/data"
import { CardDemo, Skills } from "@/components/web/Skills"

const HomePage = () => {
  return (
     <section className="flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Clients />
        <Footer />
      </div>
    </section>
  )
}
export default HomePage