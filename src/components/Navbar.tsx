'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-(--bg-navbar) backdrop-blur-md shadow-lg shadow-(--color-primary)/8 border-b border-(--border-subtle)'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <a href="#inicio" className="group relative flex items-center shrink-0" aria-label="Ir al inicio de FabriTornillos">
            <Image
              src="/img/logo-fabritornillos-jukebox-bg-removed.png"
              alt="FabriTornillos SAS - Miscelánea Industrial"
              width={520}
              height={135}
              priority
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-(--text-body) hover:text-(--color-primary-light) font-medium text-sm tracking-wide transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-(--color-primary-light) transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href="https://wa.me/573001234567?text=Hola%2C%20estoy%20interesado%20en%20sus%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-(--color-primary) hover:bg-(--color-primary-light) text-white font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-(--color-primary)/25 text-sm whitespace-nowrap"
            >
              Solicitar Cotización
            </a>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-(--text-body) hover:text-(--text-heading) hover:bg-(--glass-bg) transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-(--border-subtle) bg-(--bg-navbar-mobile)"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-(--text-body) hover:text-(--color-primary-light) hover:bg-(--glass-bg) px-4 py-3 rounded-lg font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/573001234567?text=Hola%2C%20estoy%20interesado%20en%20sus%20productos"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 bg-(--color-primary) hover:bg-(--color-primary-light) text-white font-semibold px-5 py-3 rounded-full transition-all text-center text-sm"
              >
                Solicitar Cotización
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
