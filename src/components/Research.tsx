"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, FileText } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center">
          <BookOpen className="mr-3" /> Research & Publications
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Academic research and contributions to the field of AI and wireless communications.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 relative overflow-hidden shadow-sm"
      >
        <div className="absolute top-0 right-0 p-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
            <Award className="w-3 h-3 mr-1" /> Accepted for Presentation
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-6 mb-2 pr-24 leading-snug">
          Dual-Stream CNN–LSTM Fusion for Pilot-Assisted Automatic Modulation Classification in OTFS Systems
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-medium">
          <span className="flex items-center"><span className="text-zinc-900 dark:text-zinc-200 mr-2">Role:</span> Co-Author</span>
          <span className="hidden sm:block text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-zinc-900 dark:text-zinc-200">IEEE SPCOM 2026</span>
          <span className="hidden sm:block text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-zinc-500 italic">IEEE Xplore publication pending</span>
        </div>

        <div className="mb-8">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
            Developed a dual-stream CNN-LSTM fusion architecture for Automatic Modulation Classification in OTFS communication systems. The proposed framework combines Delay-Doppler representations and Time-Domain IQ samples for robust classification in high mobility wireless environments.
          </p>
          
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3 text-sm uppercase tracking-wider">Key Highlights</h4>
          <ul className="space-y-2 mb-6">
            {["Up to 99.22% classification accuracy", "More than 90% accuracy above 5 dB SNR", "Outperformed existing AMC approaches", "Designed for future OTFS and 6G systems"].map((highlight, idx) => (
              <li key={idx} className="flex items-start text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-900 dark:text-zinc-50 mr-2 mt-1">✓</span> {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Deep Learning", "Signal Processing", "Wireless Communications", "OTFS", "CNN", "LSTM", "6G Networks"].map((area) => (
            <span key={area} className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-800">
              {area}
            </span>
          ))}
        </div>

        <div className="flex gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-6">
          <button disabled className="inline-flex items-center px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium text-zinc-400 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-900/50 cursor-not-allowed">
            <FileText className="w-4 h-4 mr-2" /> PDF Coming Soon
          </button>
          <button disabled className="inline-flex items-center px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium text-zinc-400 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-900/50 cursor-not-allowed">
            IEEE Xplore Link Pending
          </button>
        </div>
      </motion.div>
    </section>
  );
}
