import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block mb-4">
              Ingenious Innovate & Repair
            </a>
            <p className="mb-6 leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. We turn vision into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="mb-4 text-sm">Subscribe to our newsletter for the latest tech news and updates.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:border-blue-500 text-white"
              />
              <button
                type="button"
                className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Ingenious Innovate & Repair. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};