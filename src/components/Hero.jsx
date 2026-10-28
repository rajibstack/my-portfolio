"use client";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Muhammad_Rajib_Resume.pdf";
    link.click();
  };

  return (
    <section className="pt-32 pb-20 bg-slate-900 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-semibold">
            AI-Driven Full Stack Web Developer
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Hossain Rajib
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Crafting high-performance web applications using modern JavaScript,
            React, Next.js, and AI automation APIs. Turning ideas into digital
            reality.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
            >
              Download Resume
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 bg-slate-800/50 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-slate-400">
            <a
              href="https://github.com/rajibstack"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-800 hover:text-white hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hossain-rajib"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-800 hover:text-white hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/mdgm.rajib/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-800 hover:text-white hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 shadow-2xl shadow-indigo-500/20">
            <img
              src="/profile.jpg"
              alt="Muhammad Rajib"
              className="w-full h-full object-cover rounded-full border-4 border-slate-900"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
