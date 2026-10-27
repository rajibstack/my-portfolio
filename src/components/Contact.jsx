'use client';

import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400">Have a project in mind or want to collaborate? Reach out anytime!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Cards */}
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 uppercase font-semibold">Email</h4>
                <p className="text-white font-medium text-sm sm:text-base">rajib@example.com</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 uppercase font-semibold">Phone</h4>
                <p className="text-white font-medium text-sm sm:text-base">+880 1700 000000</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 uppercase font-semibold">WhatsApp</h4>
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline font-medium text-sm sm:text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}