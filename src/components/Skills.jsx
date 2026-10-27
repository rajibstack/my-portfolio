'use client';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript / TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js / Express', level: 80 },
        { name: 'REST APIs & Webhooks', level: 85 },
        { name: 'MongoDB / PostgreSQL', level: 78 },
        { name: 'Gemini API & LLM Integration', level: 85 },
      ],
    },
    {
      category: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code & Web Tools', level: 95 },
        { name: 'Vercel / GitHub Pages', level: 88 },
        { name: 'Zapier & Automation', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400">A graphical breakdown of my core competencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-indigo-400 mb-6 border-b border-slate-800 pb-3">
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1 text-sm font-medium">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}