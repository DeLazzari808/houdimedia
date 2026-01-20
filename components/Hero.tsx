"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowUpRight, BarChart3, Globe, ShieldCheck, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for Bento elements
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const nodeCount = 40;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        nodes.forEach((other) => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 250) {
            ctx.strokeStyle = `rgba(229, 184, 76, ${0.08 * (1 - distance / 250)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        ctx.fillStyle = "rgba(229, 184, 76, 0.2)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  const taglineWords = [
    { text: "BRANDING", delay: 1.2 },
    { text: "SOCIAL MEDIA", delay: 1.5 },
    { text: "TRÁFEGO PAGO", delay: 1.8 }
  ];

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-dark"
    >
      {/* Dynamic Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-60"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Modern Grid Overlay - Subtle Move */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Bento Elements (Rich Minimalism) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Metric Widget 1 - ROI */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[18%] left-[4%] hidden lg:block group cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {/* Liquid Glass Effect Container */}
          <div className="relative p-8 rounded-[3rem] overflow-hidden isolate">
            {/* Animated Liquid Background Layer */}
            <motion.div 
              className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, #E5B84C 0%, transparent 40%)",
                  "radial-gradient(circle at 80% 80%, #E5B84C 0%, transparent 40%)",
                  "radial-gradient(circle at 80% 20%, #E5B84C 0%, transparent 40%)",
                  "radial-gradient(circle at 20% 80%, #E5B84C 0%, transparent 40%)",
                  "radial-gradient(circle at 20% 20%, #E5B84C 0%, transparent 40%)",
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Glossy Overlay with Dynamic Light Follow */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 group-hover:border-gold/40 transition-all duration-500 rounded-[3rem] shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]" />
            
            {/* Content with high contrast */}
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <motion.div 
                  className="p-3 rounded-2xl bg-gold/20 text-gold shadow-[0_0_20px_rgba(229,184,76,0.3)]"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <BarChart3 size={24} />
                </motion.div>
                <div>
                  <div className="text-[10px] font-black text-gold tracking-[0.3em] uppercase mb-1">Performance</div>
                  <div className="text-[10px] font-bold text-white tracking-[0.1em] uppercase">ROI MÉDIO</div>
                </div>
              </div>
              
              <div className="flex items-end gap-3">
                <motion.div 
                  className="text-5xl font-black text-white tracking-tighter italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  whileHover={{ x: 5, color: "#E5B84C" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  3.5x
                </motion.div>
                <div className="mb-2 w-16 h-8 flex items-end gap-1">
                  {[40, 70, 50, 90, 60, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      className="flex-1 bg-gold/60 rounded-t-sm shadow-[0_0_10px_rgba(229,184,76,0.2)]"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ 
                        height: { delay: 2.5 + i * 0.1, duration: 0.5 },
                      }}
                      whileHover={{ backgroundColor: "#E5B84C", height: "110%" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Reach Widget - Social Channels */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[22%] right-[4%] hidden lg:block group cursor-pointer pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <div className="relative p-8 rounded-[3rem] overflow-hidden isolate">
            {/* Liquid Light Effect */}
            <motion.div 
              className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700"
              animate={{
                background: [
                  "radial-gradient(circle at 80% 20%, #E5B84C 0%, transparent 40%)",
                  "radial-gradient(circle at 20% 80%, #E5B84C 0%, transparent 40%)",
                  "radial-gradient(circle at 80% 20%, #E5B84C 0%, transparent 40%)",
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Glass Architecture */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 group-hover:border-gold/40 transition-all duration-500 rounded-[3rem] shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]" />

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <motion.div 
                  className="p-3 rounded-2xl bg-gold/20 text-gold shadow-[0_0_20px_rgba(229,184,76,0.3)]"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <Globe size={24} />
                </motion.div>
                <div className="text-[10px] font-black text-gold tracking-[0.3em] uppercase">Ecossistema</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Instagram size={16} />, label: "Insta" },
                  { icon: <Linkedin size={16} />, label: "Linked" },
                  { icon: <Twitter size={16} />, label: "TikTok" },
                  { icon: <Facebook size={16} />, label: "Ads" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.05] border border-white/5 hover:bg-gold/20 hover:border-gold/30 transition-all duration-300 backdrop-blur-md"
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="text-white group-hover:text-gold transition-colors">{item.icon}</div>
                    <span className="text-[10px] font-bold text-white/80 uppercase">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status Widget - Real-time pulse */}
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-[28%] right-[6%] p-5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md flex items-center gap-4 hidden lg:flex shadow-2xl shadow-gold/5 pointer-events-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
          </div>
          <span className="text-[10px] font-black text-white/80 tracking-[0.3em] uppercase">Estratégia Ativa</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        {/* Rich Typography Header */}
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-[-0.05em] leading-[0.85] flex flex-col items-center">
              <span className="text-white mix-blend-difference">HOUDI</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold to-gold/40">MEDIA</span>
            </h1>
          </motion.div>
        </div>

        {/* Kinetic Tagline (Calm UX Transitions) */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-6"
        >
          {taglineWords.map((word, i) => (
            <motion.div
              key={word.text}
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: word.delay, duration: 1, ease: "easeOut" }}
              className="group cursor-default relative"
            >
              <span className="text-white/40 text-sm md:text-xl tracking-[0.4em] font-light group-hover:text-white transition-all duration-500">
                {word.text}
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 h-[1px] bg-gold w-0 group-hover:w-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Progressive Disclosure CTA (Minimalist) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-20"
        >
          <button 
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/10 hover:border-gold/50 transition-all duration-500 shadow-2xl shadow-gold/5"
          >
            <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="relative flex items-center gap-3 text-white/80 group-hover:text-gold font-bold tracking-widest text-xs">
              EXPLORAR UNIVERSO
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Scroll Architecture (Micro-interaction) */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
      >
        <div className="relative h-16 w-[1px] bg-white/10 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{
              y: ["-100%", "200%"]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <span className="mt-4 text-[8px] font-bold text-white/20 tracking-[0.5em] uppercase">Scroll to flow</span>
      </motion.div>

      {/* Modern Framing */}
      <div className="fixed inset-8 border border-white/[0.03] pointer-events-none z-50 hidden md:block" />
    </section>
  );
}
