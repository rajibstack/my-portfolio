'use client';

import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'DevStack AI Web Platform',
      shortDesc: 'DevStack A responsive portfolio web application designed for developers to explore, compare, and build their ideal technology stack with smooth UI interactions and real-time state management.',
      fullDescription: 'DevStack A responsive portfolio web application designed for developers to explore, compare, and build their ideal technology stack with smooth UI interactions and real-time state management.',
      image: './devstack.png',
      stack: ['React', 'Next.js', 'Tailwind CSS', 'Gemini API', 'Node.js'],
      liveLink: 'https://rajibstack.github.io/devstack--a5-rajib/',
      githubLink: 'https://github.com/rajibstack/devstack--a5-rajib',
      challenges: 'Handling real-time token streaming from LLM APIs while maintaining smooth 60fps UI renders on mobile screens.',
      futurePlans: 'Add team collaboration rooms, webhooks integration, and persistent database storage.',
    },
    {
      id: 2,
      name: 'FITLOG — Workout Tracker & Daily Fitness Planner',
      shortDesc: 'FITLOG is a modern, high-performance web application designed for fitness enthusiasts to build, organize, and track their daily workout routines. Built with Next.js and Tailwind CSS, FITLOG provides a sleek dark-themed interface with real-time stats and dynamic sorting capabilities.',
      fullDescription: 'FITLOG — Workout Tracker & Daily Fitness Planner. Fit log is a modern, high-performance web application designed for fitness enthusiasts to build, organize, and track their daily workout routines. Built with Next.js and Tailwind CSS, FITLOG provides a sleek dark-themed interface with real-time stats and dynamic sorting capabilities.',
      image: './fitlog.png',
      stack: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
      liveLink: 'https://fit-log-a6-rajib.vercel.app/',
      githubLink: 'https://github.com/rajibstack/fit-log-a6-rajib',
      challenges: 'State Management: React Context API (FitLogContext)',
      futurePlans: 'Live Metrics Dashboard So, Automatically calculates and displays real-time stats for total exercises, active workout duration in minutes, and estimated calories burned',
    },
    {
      id: 3,
      name: 'বাজার দর (Bazar Dor)',
      shortDesc: 'একটি আধুনিক, রিয়েল-টাইম এবং এআই-ড্রাইভেন ওয়েব অ্যাপ্লিকেশন, যার মাধ্যমে বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের (চাল, ডাল, তেল, সবজি, মাছ, মাংস ইত্যাদি) প্রতিদিনের বাজারদর সহজে জানা ও তুলনা করা যায়। প্রজেক্টটি সম্পূর্ণ বাংলা ইন্টারফেস এবং রেসপন্সিভ ডিজাইনে তৈরি।',
      fullDescription: 'রিয়েল-টাইম বাজার দর ও ক্যাটাগরি ট্র্যাকিং: চাল, ডাল, তেল, মাছ, মাংসসহ সকল নিত্যপ্রয়োজনীয় পণ্যের হালনাগাদ দাম এবং ক্যাটাগরিভিত্তিক ব্রাউজিং সুবিধা। সম্পূর্ণ বাংলা ইন্টারফেস: স্থানীয় ব্যবহারকারীদের কথা মাথায় রেখে সম্পূর্ণ প্ল্যাটফর্মটি বাংলা ভাষা, তারিখ (bn-BD) এবং স্থানীয় মুদ্রার ফরম্যাটে তৈরি।',
      image: './bazardor.png',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://bazar-dor-a7-rajib.vercel.app/',
      githubLink: 'https://github.com/rajibstack/bazar-dor-a7-rajib',
      challenges: 'লাইভ প্রাইস টিকার (Price Ticker): হেডার অংশে চলমান মূল্য টিকারের মাধ্যমে তাৎক্ষণিকভাবে পণ্যের দাম বাড়া বা কমার ট্রেন্ড দেখতে পাওয়ার সুবিধা।',
      futurePlans: 'ডুয়াল-এপিআই প্রক্সি ফলব্যাক সিস্টেম: ফায়ারফক্স ও অন্যান্য ব্রাউজারের CORS এবং নেটওয়ার্ক রেস্ট্রিকশন এড়াতে নিরাপদ ও সেন্ট্রালাইজড নেক্সট জেএস প্রক্সি রাউট ইন্টিগ্রেশন।',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400">Some of my recent work and engineering achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col">
              <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.shortDesc}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full bg-indigo-600/10 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-600 text-indigo-400 hover:text-white py-2.5 rounded-xl font-semibold transition-all text-sm"
                >
                  View More / Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}