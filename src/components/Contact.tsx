"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission (For now it opens user's email client as a fallback)
    setTimeout(() => {
      window.location.href = `mailto:dayshaunkakadiya@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${formData.message} (%0A%0AFrom: ${formData.email})`;
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">Let's Connect</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md leading-relaxed">
            I'm currently open to internships, placements, and research opportunities. Whether you have a question or just want to say hi, feel free to drop a message!
          </p>
          
          <div className="space-y-6">
            <a href="mailto:dayshaunkakadiya@gmail.com" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mr-4 border border-zinc-200 dark:border-zinc-800">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">dayshaunkakadiya@gmail.com</span>
            </a>
            
            <a href="https://github.com/dayshaun-1" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mr-4 border border-zinc-200 dark:border-zinc-800">
                <GithubIcon size={20} />
              </div>
              <span className="font-medium">github.com/dayshaun-1</span>
            </a>
            
            <a href="https://linkedin.com/in/dayshaun-kakadiya-ba2410321" target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mr-4 border border-zinc-200 dark:border-zinc-800">
                <LinkedinIcon size={20} />
              </div>
              <span className="font-medium">linkedin.com/in/dayshaun-kakadiya-ba2410321</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-500 focus:border-transparent transition-all outline-none"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-500 focus:border-transparent transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-500 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Hi Dayshaun, I'd like to discuss..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
