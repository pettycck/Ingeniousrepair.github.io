import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hello, we'd love to hear from you. Fill out the form or reach us directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white">Email Us</h5>
                  <a href="mailto:jbsingaporerepair1818@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">jbsingaporerepair1818@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-blue-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white">Call Us</h5>
                  <p className="text-slate-400">Serving Singapore and Malaysia (based SG & JB)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Careers</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};