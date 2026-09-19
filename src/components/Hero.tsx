'use client';

import { motion } from 'framer-motion';
import { Zap, ChevronDown } from 'lucide-react';

const stats = [
  { icon: '🏭', value: '+30 años', label: 'De experiencia' },
  { icon: '🔧', value: 'Fabricación', label: 'Especial bajo plano' },
  { icon: '🤝', value: '100%', label: 'Atención personalizada' },
  { icon: '⚙️', value: 'Integral', label: 'Soluciones industriales' },
];

const fade = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/img/hero-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: 'brightness(0.55) saturate(0.9) contrast(1.05)' }}
      >
        <source src="/video/hero-industrial.mp4" type="video/mp4" />
        <source src="/video/hero-industrial.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-overlay)' }} />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-150 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, color-mix(in srgb, var(--color-primary) 22%, transparent) 0%, transparent 70%)' }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-(--color-secondary)/95 via-(--color-secondary)/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fade} className="mb-8">
            <span className="inline-flex items-center gap-2 bg-(--color-primary)/12 border border-(--color-primary)/35 text-(--color-primary-light) text-sm font-semibold px-4 py-2 rounded-full">
              <Zap size={14} className="fill-(--color-primary-light) text-(--color-primary-light)" />
              Más de 30 años de experiencia
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.08] mb-6"
          >
            SOLUCIONES INDUSTRIALES PARA{' '}
            <span className="text-(--color-primary-light)">CADA PROYECTO</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fade}
            className="text-lg md:text-xl text-(--color-steel-light) max-w-2xl mb-10 leading-relaxed"
          >
            Más de 30 años suministrando productos industriales, fabricación de piezas especiales y soluciones para mantenimiento, manufactura y construcción.
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fade} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#productos"
              className="inline-flex items-center justify-center bg-(--color-primary) hover:bg-(--color-primary-light) text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-(--color-primary)/30 text-base"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20estoy%20interesado%20en%20sus%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-(--color-steel)/70 text-(--color-steel-light) hover:bg-(--color-primary)/12 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
            >
              Conoce Nuestros Servicios
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center border border-(--color-primary)/20 hover:border-(--color-primary-light)/40 transition-all duration-300 hover:shadow-lg hover:shadow-(--color-primary)/10">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-(--color-primary-light)">{stat.value}</div>
              <div className="text-xs text-white mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-(--color-steel-light) hidden md:block"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
