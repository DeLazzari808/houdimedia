"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mensagem estruturada para o WhatsApp
    const saudacao = "Olá Houdi Media! Vim através do site e gostaria de um orçamento.";
    const corpo = `*Nome:* ${formData.nome}%0A*E-mail:* ${formData.email}%0A*Serviço:* ${formData.servico}%0A*Mensagem:* ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${saudacao}%0A%0A${corpo}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-40 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-gold" />
                <span className="text-gold font-black tracking-[0.5em] uppercase text-[10px]">Inicie o Fluxo</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-[0.85] tracking-tighter">
                Vamos <br />
                <span className="text-gold">Construir.</span>
              </h2>
              
              <p className="text-white/30 text-xl mb-20 leading-relaxed font-light max-w-sm">
                Sua marca merece uma interface de alto nível e estratégias que realmente convertem.
              </p>

              <div className="space-y-12">
                <div className="group cursor-default">
                  <div className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase mb-4 group-hover:text-gold transition-colors">Digital HQ</div>
                  <div className="text-xl text-white/60 group-hover:text-white transition-colors">contato@houdimedia.com.br</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase mb-4 group-hover:text-gold transition-colors">Location</div>
                  <div className="text-xl text-white/60 group-hover:text-white transition-colors">São Paulo, SP — BR</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              className="p-12 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Subtle glass background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors duration-1000" />

              <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase ml-1">IDENTIDADE</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors text-2xl font-light text-white placeholder:text-white/10"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase ml-1">CANAL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors text-2xl font-light text-white placeholder:text-white/10"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase ml-1">INTERESSE</label>
                  <select
                    name="servico"
                    required
                    value={formData.servico}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors text-2xl font-light text-white/60 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-dark">Selecione o serviço</option>
                    <option value="Branding" className="bg-dark text-white">Branding & Design</option>
                    <option value="Social Media" className="bg-dark text-white">Social Media</option>
                    <option value="Tráfego" className="bg-dark text-white">Tráfego de Alta Performance</option>
                    <option value="Web" className="bg-dark text-white">Web & Ecossistemas</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase ml-1">MANIFESTO</label>
                  <textarea
                    name="mensagem"
                    rows={1}
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-gold transition-colors text-2xl font-light text-white placeholder:text-white/10 resize-none min-h-[60px]"
                    placeholder="Conte sobre seu desafio..."
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-6 mt-12"
                >
                  <div className="h-20 w-20 rounded-full bg-gold flex items-center justify-center text-dark group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(229,184,76,0.2)]">
                    <MessageSquare size={28} />
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">
                    Iniciar Conversa
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
