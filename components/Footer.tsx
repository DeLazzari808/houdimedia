import Link from "next/link";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-soft border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter">
                <span className="text-white">HOUDI</span>{" "}
                <span className="text-gold">MEDIA</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Transformamos marcas através de estratégias digitais inteligentes, 
              branding impactante e gestão de tráfego de alta performance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold/20 hover:text-gold transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold/20 hover:text-gold transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold/20 hover:text-gold transition-all">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Serviços</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Tráfego de Performance</Link></li>
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Social Media Estratégico</Link></li>
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Branding & Identity</Link></li>
              <li><Link href="#servicos" className="hover:text-gold transition-colors">Ecossistemas Web</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li>contato@houdimedia.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, SP — BR</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {currentYear} Houdi Media. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

