"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Palette, 
  Rocket,
  ArrowUpRight
} from "lucide-react";
import { MouseEvent, useState } from "react";

const services = [
  {
    title: "Tráfego de Alta Performance",
    description: "Algoritmos não são um mistério, são dados. Dominamos Google Ads e Meta Ads com foco implacável em escala.",
    icon: <TrendingUp size={24} />,
    className: "md:col-span-2 md:row-span-1",
    metric: "3.5x ROI",
    tags: ["Data Analytics", "Scaling", "ROI Focus"]
  },
  {
    title: "Social Media Estratégico",
    description: "Construção de ecossistemas digitais onde a narrativa da marca encontra a atenção do público.",
    icon: <Users size={24} />,
    className: "md:col-span-1 md:row-span-2",
    metric: "1M+ Alcance",
    tags: ["Storytelling", "Community"]
  },
  {
    title: "Design de Identidade",
    description: "O branding que não apenas diferencia, mas comunica valor imediato através de interfaces modernas.",
    icon: <Palette size={24} />,
    className: "md:col-span-1 md:row-span-1",
    metric: "Premium",
    tags: ["Visual Identity", "UI/UX"]
  },
  {
    title: "Ecossistemas Web",
    description: "Interfaces de conversão criadas com a filosofia de design de 2025. Leveza, fluidez e resultado.",
    icon: <Globe size={24} />,
    className: "md:col-span-1 md:row-span-1",
    metric: "Fast",
    tags: ["Performance", "Conversion"]
  },
  {
    title: "Coprodução & Lançamentos",
    description: "Parceria estratégica para transformar infoprodutos em marcas líderes de mercado.",
    icon: <Rocket size={24} />,
    className: "md:col-span-2 md:row-span-1",
    metric: "7 Dígitos",
    tags: ["Infoproducts", "Strategy"]
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleServiceClick = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onClick={handleServiceClick}
      className={`group relative rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04] flex flex-col justify-between overflow-hidden cursor-pointer ${service.className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      {/* 2025 Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(229, 184, 76, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div>
        <div className="flex items-center justify-between mb-12">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {service.icon}
          </div>
          <div className="px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black text-gold uppercase tracking-[0.2em]">
            {service.metric}
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-white mb-6 leading-tight group-hover:text-gold transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-white/40 text-lg leading-relaxed mb-8 max-w-sm">
          {service.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {service.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 border border-white/5 rounded-full group-hover:border-gold/10 group-hover:text-white/40 transition-all"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Subtle indicator */}
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <ArrowUpRight size={20} className="text-gold/50" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-40 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold font-black tracking-[0.4em] uppercase text-[10px]">
              Expertise 2025
            </span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <motion.h2 
              className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Arquitetura de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/40">
                Performance.
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-white/30 max-w-sm text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Interfaces leves, dados precisos e branding que respira. Elevamos o padrão da sua presença digital.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
