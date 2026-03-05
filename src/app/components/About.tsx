import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzA1ODE1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent mix-blend-overlay"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-700 max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Expert Team</h4>
                  <p className="text-slate-400 text-sm">Dedicated professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Pioneering the future of digital innovation through creative excellence.
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              At Ingenious Innovate & Repair, we believe that technology should be an enabler, not a barrier. Our team of visionaries, designers, and developers work in unison to transform complex problems into elegant, user-centric solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-900 rounded-lg text-blue-500 border border-slate-800">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
                  <p className="text-slate-400">To empower businesses with scalable digital products that drive growth and engagement.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-slate-900 rounded-lg text-purple-500 border border-slate-800">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
                  <p className="text-slate-400">To be the global catalyst for digital transformation across industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};