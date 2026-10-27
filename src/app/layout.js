import './globals.css';

export const metadata = {
  title: 'Hossain Rajib | AI-Driven Full Stack Developer',
  description: 'Portfolio of Hossain Rajib - Full Stack Web Developer specializing in React, Next.js, and AI API solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-900 text-slate-100">{children}</body>
    </html>
  );
}