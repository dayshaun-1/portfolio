import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-zinc-950 transition-colors duration-300 selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
      <Achievements />
      <Contact />
      
      <footer className="py-8 text-center text-zinc-500 dark:text-zinc-400 text-sm border-t border-zinc-200 dark:border-zinc-900 mt-12">
        <p>© {new Date().getFullYear()} Dayshaun Kakadiya. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </main>
  );
}
