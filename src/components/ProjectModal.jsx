'use client';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 bg-slate-800 rounded-full transition-colors cursor-pointer"
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-xl mb-6 border border-slate-800"
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-3">{project.name}</h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, idx) => (
            <span key={idx} className="text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-slate-300 leading-relaxed mb-6">{project.fullDescription}</p>

        <div className="space-y-4 mb-8">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-amber-400 mb-2">Challenges Faced</h4>
            <p className="text-slate-400 text-sm">{project.challenges}</p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <h4 className="font-bold text-cyan-400 mb-2">Future Roadmap & Improvements</h4>
            <p className="text-slate-400 text-sm">{project.futurePlans}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold transition-all"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all"
          >
            Client GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}