import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Resume } from "@/components/resume";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Education />
      <Resume />
      <FAQ />
      <Contact />
    </div>
  );
}
