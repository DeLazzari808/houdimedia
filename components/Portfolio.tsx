"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Vanguard Fashion",
    category: "Scaling Strategy",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Aura Clinic",
    category: "Visual Identity",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Nexus Tech",
    category: "Digital Ecosystem",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Mastery Flow",
    category: "Coproduction",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="portfolio" className="py-40 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-black tracking-[0.5em] uppercase text-[10px]">
              Portfólio Selecionado
            </span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <motion.h2 
              className="text-6xl md:text-8xl font-bold text-white leading-[0.85] tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Resultados <br />
              <span className="text-gold">Incontestáveis.</span>
            </motion.h2>
            
            <motion.p 
              className="text-white/30 max-w-sm text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Uma curadoria de marcas que transcenderam o comum e escalaram com inteligência estratégica.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className={`group relative overflow-hidden rounded-[3.5rem] bg-white/[0.02] border border-white/5 cursor-pointer ${project.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
            >
              {/* Parallax Image Container */}
              <div className="absolute inset-0 z-0">
                <motion.div 
                  className="h-full w-full bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
              </div>

              {/* Dynamic Content Overlay */}
              <div className="absolute inset-0 z-10 p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                    <Plus size={24} />
                  </div>
                  <div className="h-14 w-14 rounded-full bg-gold flex items-center justify-center text-dark">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div>
                  <motion.div
                    className="overflow-hidden"
                  >
                    <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-4 block transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700">
                      {project.category}
                    </span>
                  </motion.div>
                  <motion.div
                    className="overflow-hidden"
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 delay-100">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA at the end of portfolio */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/20 text-sm tracking-[0.3em] uppercase mb-8">O próximo case de sucesso pode ser o seu.</p>
          <div className="h-[1px] w-32 bg-gold/30 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
