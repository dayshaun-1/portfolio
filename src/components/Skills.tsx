"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Layers, Database, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Deep Learning", "Transformers", "LLMs", "RAG", "LangChain", "LoRA", "QLoRA", "PEFT", "HuggingFace", "Computer Vision"],
    },
    {
      title: "Frameworks",
      icon: <Layers className="w-5 h-5" />,
      skills: ["React", "Next.js", "FastAPI", "Express.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "ChromaDB", "PostgreSQL"],
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "Docker", "Linux", "Vercel", "Hugging Face Spaces"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Skills</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Technologies and tools I use to build scalable applications and AI models.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6 text-zinc-900 dark:text-zinc-50">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg mr-3">
                {category.icon}
              </div>
              <h3 className="font-semibold text-lg">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
