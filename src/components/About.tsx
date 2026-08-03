"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Terminal, Server, Sparkles } from "lucide-react";

export function About() {
  const interests = [
    { name: "Agentic AI Systems", icon: <Brain size={18} /> },
    { name: "Retrieval-Augmented Generation (RAG)", icon: <Sparkles size={18} /> },
    { name: "LLM Fine-Tuning", icon: <Brain size={18} /> },
    { name: "Multimodal AI", icon: <Brain size={18} /> },
    { name: "Deep Learning", icon: <Brain size={18} /> },
    { name: "Full Stack Development", icon: <Terminal size={18} /> },
    { name: "System Design", icon: <Server size={18} /> },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-12 flex items-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center text-zinc-900 dark:text-zinc-50">
              <GraduationCap className="mr-2" /> Education
            </h3>
            <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800">
              <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
                Sardar Vallabhbhai National Institute of Technology (SVNIT Surat)
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                B.Tech Electronics & Communication Engineering
              </p>
              <div className="flex justify-between items-center mt-4 text-sm font-medium">
                <span className="text-zinc-900 dark:text-zinc-50 bg-white dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                  CGPA: 9.08
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  Expected: 2027
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-zinc-900 dark:text-zinc-50">Background & Interests</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              I enjoy building intelligent systems that combine machine learning, large language models, and scalable software engineering. My goal is to create products that solve real-world problems through advanced AI integration.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 shadow-sm"
                >
                  <span className="mr-2 text-zinc-400">{interest.icon}</span>
                  {interest.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
