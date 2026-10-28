'use client';

import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceEducation() {
  const experiences = [
    {
      role: 'Full Stack Web Developer',
      org: 'Rafnexa — Digital Pro Solutions',
      period: '2025 - 2026',
      desc: 'Leading agency web development, building custom web applications, automation pipelines, and client solutions.',
    },
    {
      role: 'Web Designer and Developer',
      org: 'Next IT Station',
      period: '2024 - 2025',
      desc: 'Developed responsive client sites, designed branding packages, and managed web project lifecycles.',
    },
  ];

  const education = [
    {
      degree: 'Full-Stack Web Engineering',
      institution: 'Programming Hero',
      period: 'Completed',
      desc: 'Specialized intensive track covering React, Next.js, Node.js, TypeScript, and modern ecosystem workflows.',
    },
    {
      degree: 'Certificate of Web Design & Development',
      institution: 'National Skills Development Authority, Bangladesh Government Agency, Prime Ministers Office.',
      period: 'Completed',
      desc: 'Web design and development using HTML, CSS, JavaScript, PHP',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-7 h-7 text-indigo-400" />
              <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6 border-l-2 border-indigo-500/30 pl-6 ml-3">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
                  <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">{exp.role}</h3>
                  <h4 className="text-sm text-slate-400 font-medium mb-2">{exp.org}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-7 h-7 text-cyan-400" />
              <h2 className="text-2xl sm:text-3xl font-bold">Educational Qualification</h2>
            </div>
            <div className="space-y-6 border-l-2 border-cyan-500/30 pl-6 ml-3">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950"></div>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">{edu.degree}</h3>
                  <h4 className="text-sm text-slate-400 font-medium mb-2">{edu.institution}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}