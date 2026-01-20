"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Star } from "lucide-react";

const stats = [
  { label: "Market ROI", value: "3.5x", desc: "Média de retorno sobre investimento" },
  { label: "Social Reach", value: "1M+", desc: "Impacto mensal em audiência" },
  { label: "Active Brands", value: "50+", desc: "Parcerias de longo prazo" },
  { label: "Success Rate", value: "98%", desc: "Satisfação total dos parceiros" },
];

export default function About() {
  return (
    <section id="sobre" className="py-40 px-6 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="h-[1px] w-12 bg-gold" />
                <span className="text-gold font-black tracking-[0.5em] uppercase text-[10px]">
                  Filosofia
                </span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-[0.85] tracking-tighter">
                Design <br />
                <span className="italic font-light opacity-50">Inteligente</span> <br />
                Escala <span className="text-gold">Real.</span>
              </h2>
              
              <div className="space-y-8 text-white/40 text-2xl leading-relaxed font-light">
                <p>
                  A <span className="text-white font-medium">Houdi Media</span> opera na convergência entre o minimalismo estético e a funcionalidade analítica.
                </p>
                <p>
                  Não acreditamos em design apenas por beleza. Acreditamos na <span className="text-white/80 italic">eficiência cognitiva</span> — onde cada pixel tem o objetivo de guiar o usuário e converter atenção em lucro.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
                {[
                  { title: "Bento Architecture", icon: <Zap size={16} /> },
                  { title: "Calm UX Systems", icon: <Star size={16} /> },
                  { title: "Data-Driven Design", icon: <Target size={16} /> },
                  { title: "Kinetic Branding", icon: <CheckCircle2 size={16} /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-4 group cursor-default"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-500">
                      {item.icon}
                    </div>
                    <span className="text-white/60 font-bold tracking-tight text-sm uppercase">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Oversized KPIs (2025 Paradigm) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="group p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:bg-white/[0.05] hover:border-gold/20 transition-all duration-700 aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-gold/20 group-hover:text-gold transition-colors duration-500">
                  <Star size={24} />
                </div>
                
                <div>
                  <motion.span 
                    className="text-7xl md:text-8xl font-black text-white block mb-2 tracking-tighter"
                    whileInView={{ scale: [0.9, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em] block mb-4 group-hover:text-gold/50 transition-colors">
                    {stat.label}
                  </span>
                  <p className="text-white/40 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
