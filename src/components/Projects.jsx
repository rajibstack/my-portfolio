'use client';

import { useState } from 'react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'DevStack AI Web Platform',
      shortDesc: 'AI-driven full stack workspace with dynamic workflow automation.',
      fullDescription: 'A robust web platform featuring Gemini AI integration, automated task generation, interactive code components, and responsive developer tools.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
      stack: ['React', 'Next.js', 'Tailwind CSS', 'Gemini API', 'Node.js'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      challenges: 'Handling real-time token streaming from LLM APIs while maintaining smooth 60fps UI renders on mobile screens.',
      futurePlans: 'Add team collaboration rooms, webhooks integration, and persistent database storage.',
    },
    {
      id: 2,
      name: 'AgriCulture Hub Portal',
      shortDesc: 'Smart farming resource portal with crop advice and community management.',
      fullDescription: 'An interactive web solution dedicated to modern urban agriculture and plant care techniques, featuring organic farming calculators and pest advice guides.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
      stack: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      challenges: 'Structuring complex regional crop care guides into clean, fast-loading search categories.',
      futurePlans: 'Integrate real-time weather API alerts and localized soil condition diagnostics.',
    },
    {
      id: 3,
      name: 'Rafnexa Agency Suite',
      shortDesc: 'Digital services platform with dynamic portfolio filtering & booking.',
      fullDescription: 'Complete client portal built for agency operations, offering digital service bookings, project showcases, and interactive pricing estimation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
      challenges: 'Achieving 100/100 Google Lighthouse performance score with image optimization and dynamic routing.',
      futurePlans: 'Implement automated client invoice PDF generator and live video discovery chat.',
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