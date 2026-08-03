"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          Dayshaun Kakadiya
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
          AI Engineer & Full Stack Developer
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl leading-relaxed">
          Building AI-powered applications, RAG systems, and scalable full-stack products. I am an Electronics & Communication Engineering undergraduate at SVNIT Surat with interests in AI Systems, Agentic Workflows, LLM Fine-Tuning, and Full Stack Development.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm text-base font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Contact Me <ExternalLink className="ml-2" size={18} />
          </a>
        </div>

        <div className="flex gap-6 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-12">
          <a href="https://github.com/dayshaun-1" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <GithubIcon size={24} />
          </a>
          <a href="https://linkedin.com/in/dayshaun-kakadiya-ba2410321" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <LinkedinIcon size={24} />
          </a>
          <a href="https://leetcode.com/u/dash_01" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors" title="LeetCode">
            <Code2 size={24} />
          </a>
          <a href="mailto:dayshaunkakadiya@gmail.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="font-bold text-2xl text-zinc-900 dark:text-zinc-50">9.08</div>
            <div className="text-zinc-500 dark:text-zinc-400">CGPA (SVNIT)</div>
          </div>
          <div>
            <div className="font-bold text-2xl text-zinc-900 dark:text-zinc-50">1975</div>
            <div className="text-zinc-500 dark:text-zinc-400">LeetCode Rating</div>
          </div>
          <div>
            <div className="font-bold text-2xl text-zinc-900 dark:text-zinc-50">1000+</div>
            <div className="text-zinc-500 dark:text-zinc-400">DSA Problems</div>
          </div>
          <div>
            <div className="font-bold text-2xl text-zinc-900 dark:text-zinc-50">1</div>
            <div className="text-zinc-500 dark:text-zinc-400">Paper Accepted</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
