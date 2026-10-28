'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Hossain Rajib. All rights reserved.</p>
        <p className="mt-1 text-xs text-slate-500">Built with React, Next.js, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}