'use client';

import { Sparkles, Sprout, Palette, Terminal } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: <Terminal className="w-5 h-5 text-indigo-400" />, title: 'Full Stack Web Dev' },
    { icon: <Sparkles className="w-5 h-5 text-cyan-400" />, title: 'AI & Automation Integrations' },
    { icon: <Sprout className="w-5 h-5 text-emerald-400" />, title: 'Home Gardening & AgriTech' },
    { icon: <Palette className="w-5 h-5 text-purple-400" />, title: 'Digital Media & 3D Assets' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400">Passionate developer, fast learner, and creative thinker.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              My programming journey started with a deep curiosity for creating seamless web solutions. Through rigorous training in full-stack web engineering, I built strong foundations in JavaScript, React, Next.js, and TypeScript.
            </p>
            <p>
              I thrive on building modern web systems integrated with AI APIs (like Google Gemini API) and automating business workflows. Beyond coding, I run an agency brand and direct tech initiatives that help brands establish their presence online.
            </p>
            <p>
              Outside of development, you’ll find me exploring organic home gardening, growing Arabian cucumbers and grapevines, and creating digital 3D media assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-all">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-white text-lg">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}