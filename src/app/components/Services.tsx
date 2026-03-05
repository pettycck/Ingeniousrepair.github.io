import React from 'react';
import { Code, Smartphone, BarChart3, Wrench, Cpu, PenTool } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom, scalable websites built with the latest technologies like React, Next.js, and Tailwind CSS.",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics and visualization solutions.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    },
    {
      icon: <PenTool size={32} />,
      title: "UI/UX Design",
      description: "User-centric design that combines aesthetics with functionality to create intuitive digital products.",
      color: "text-pink-400",
      bg: "bg-pink-500/10"
    },
    {
      icon: <Cpu size={32} />,
      title: "Hardware Design",
      description: "Custom circuit board design and prototyping for IoT devices and embedded systems.",
      color: "text-amber-400",
      bg: "bg-amber-500/10"
    },
    {
      icon: <Wrench size={32} />,
      title: "Hardware Repair",
      description: "Professional diagnostic and repair services for laptops, servers, and specialized industrial hardware.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Solutions</h3>
          <p className="text-slate-400 text-lg">
            We offer a wide range of services to help you achieve your business goals, from development to design and strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-800/50 hover:bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
