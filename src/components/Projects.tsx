"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI / ML", "Full Stack", "Computer Vision", "RAG", "Research"];

  const projects = [
    {
      title: "Multi-User Graph RAG Web App",
      category: "RAG",
      description: "Built a full-stack AI application that allows users to upload PDFs and query them through an interactive knowledge graph. Implemented a custom Graph RAG pipeline using LangChain, ChromaDB, Gemini Embeddings, SpaCy, and NetworkX.",
      tech: ["Python", "FastAPI", "React", "LangChain", "NetworkX", "ChromaDB", "Gemini", "Docker"],
      github: "https://huggingface.co/spaces/dayshaun/graph-rag/tree/main",
      demo: "https://huggingface.co/spaces/dayshaun/graph-rag",
      featured: true,
      image: "/projects/graph-rag.png", // Add your screenshot to public/projects/
      gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500",
    },
    {
      title: "Multi-Threaded Computer Vision Engine",
      category: "Computer Vision",
      description: "Built a zero-dependency C++20 vision pipeline (grayscale, Gaussian blur, Sobel edge detection) without OpenCV, cutting total pipeline latency from 41.23ms to 20.73ms (2.0x speedup). Engineered a custom ThreadPool avoiding OpenMP overhead, and designed a cache-aware 2D Tile Dispatcher for optimal parallel processing. Implemented a contiguous, zero-copy image data structure using C++ move semantics to minimize heap allocations and sustain >200 MPixels/s throughput.",
      tech: ["C++20", "STL", "Multithreading", "Memory Management", "Cache Optimization"],
      github: "https://github.com/dayshaun-1/parallel-vision",
      demo: null,
      featured: true,
      image: "",
      gradient: "bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500",
    },
    {
      title: "ByteLearn",
      category: "Full Stack",
      description: "Full-stack E-learning platform with authentication, payments, course management, and role-based access control.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe", "Tailwind CSS"],
      github: "https://github.com/dayshaun-1/ByteLearn/",
      demo: "https://byte-learn-nine.vercel.app/",
      featured: true,
      image: "/projects/bytelearn.png", // Add your screenshot to public/projects/
      gradient: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500",
    },
    {
      title: "BiteNow",
      category: "Full Stack",
      description: "Food ordering platform with authentication, cart management, and responsive UI.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/dayshaun-1/BiteNow/",
      demo: "https://bite-now-theta.vercel.app/",
      featured: false,
      image: "",
      gradient: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      title: "Image Caption Generator",
      category: "Computer Vision",
      description: "Vision Transformer based image caption generation system with beam search decoding and Streamlit deployment.",
      tech: ["TensorFlow", "Vision Transformer", "Transformer Decoder", "Streamlit"],
      github: "https://github.com/dayshaun-1/Image-Caption-Generator/",
      demo: "https://d-image-caption-generator.streamlit.app/",
      featured: false,
      image: "",
      gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
    },
    {
      title: "Multimodal Entity Extraction Engine",
      category: "AI / ML",
      description: "Fine-tuned SmolVLM using QLoRA and DoRA techniques to extract structured product attributes directly from images.",
      tech: ["PyTorch", "HuggingFace", "QLoRA", "LoRA", "PEFT", "SmolVLM"],
      github: "https://github.com/dayshaun-1/smolvlm-entity-extraction/",
      demo: null,
      featured: false,
      image: "",
      gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500",
    },
    {
      title: "Amazon ML Challenge 2025",
      category: "Research",
      description: "Built a multimodal product price prediction pipeline using DeBERTa, GLiNER, BART-MNLI, and structured feature fusion.",
      tech: ["PyTorch", "Transformers", "DeBERTa", "GLiNER", "BART-MNLI"],
      github: "https://github.com/dayshaun-1/Amazon-ML-Challenge-2025/",
      demo: null,
      featured: false,
      image: "",
      gradient: "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter || (filter === "AI / ML" && project.category === "Multimodal AI")
  ).sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-zinc-50 dark:bg-zinc-900/20 rounded-3xl my-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A selection of my recent work in AI, full-stack development, and research.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="group bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-all flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
