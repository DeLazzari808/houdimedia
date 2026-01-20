"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Serviços", href: "#servicos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Portfolio", href: "#portfolio" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] max-w-4xl",
          isScrolled ? "top-4" : "top-8"
        )}
      >
        <motion.div
          className={cn(
            "relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border border-white/5",
            isScrolled 
              ? "bg-dark/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "bg-transparent"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-dark font-black text-xs">
              H
            </div>
            <span className="text-sm font-bold tracking-tighter text-white group-hover:text-gold transition-colors hidden sm:inline">
              HOUDI MEDIA
            </span>
          </Link>

          {/* Navigation - Minimalist */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA - Floating Style */}
          <div className="flex items-center gap-4">
            <Link
              href="#contato"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full bg-white text-dark text-[10px] font-bold uppercase tracking-wider hover:bg-gold transition-all"
            >
              Falar agora
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu - Calm UX Disclosure */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[90] bg-dark/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-bold text-white hover:text-gold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="#contato"
                  className="mt-8 px-10 py-4 rounded-full bg-gold text-dark font-black uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
