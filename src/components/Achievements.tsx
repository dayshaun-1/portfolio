"use client";

import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, BookOpen, GraduationCap } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "Research Paper Accepted",
      subtitle: "IEEE SPCOM 2026",
      description: "Co-authored paper on Dual-Stream CNN-LSTM for Automatic Modulation Classification.",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      date: "2026",
    },
    {
      title: "Amazon ML Summer School",
      subtitle: "Selected Participant",
      description: "Selected for the prestigious Amazon ML Summer School program.",
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      date: "2025",
    },
    {
      title: "LeetCode Knight",
      subtitle: "Max Rating: 1975",
      description: "Achieved top percentiles in competitive programming contests.",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      date: "Present",
    },
    {
      title: "1000+ DSA Problems",
      subtitle: "Problem Solving",
      description: "Consistently solving complex algorithmic problems across LeetCode, Codeforces, and CSES.",
      icon: <Star className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />,
      date: "Ongoing",
    },
    {
      title: "Academic Excellence",
      subtitle: "CGPA: 9.08",
      description: "Maintaining a high academic standing in Electronics & Communication Engineering at SVNIT.",
      icon: <GraduationCap className="w-6 h-6 text-green-500" />,
      date: "2023 - 2027",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-zinc-50 dark:bg-zinc-900/20 rounded-3xl my-12">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Achievements & Milestones</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Key accomplishments in academia, competitive programming, and research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col items-center text-center hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center mb-4">
              {achievement.icon}
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">{achievement.title}</h3>
            <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-3">{achievement.subtitle}</div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
