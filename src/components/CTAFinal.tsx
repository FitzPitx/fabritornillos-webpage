'use client';

import { motion } from 'framer-motion';

function GearSVG({ size = 120, className = '', style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path
        d="M60 20 L65 5 L75 10 L70 25 Q80 30 87 37 L102 32 L110 42 L97 50 Q100 57 100 60 Q100 63 97 70 L110 78 L102 88 L87 83 Q80 90 70 95 L75 110 L65 115 L60 100 L55 115 L45 110 L50 95 Q40 90 33 83 L18 88 L10 78 L23 70 Q20 63 20 60 Q20 57 23 50 L10 42 L18 32 L33 37 Q40 30 50 25 L45 10 L55 5 Z"
        fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2"
      />
      <circle cx="60" cy="60" r="18" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    </svg>
  );
}

export default function CTAFinal() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'var(--cta-gradient)' }}>
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 opacity-30 pointer-events-none">
        <GearSVG size={220} className="animate-spin-slow" />
      </div>
      <div className="absolute top-0 -right-16 opacity-20 pointer-events-none">
        <GearSVG size={280} className="animate-spin-slow" style={{ animationDirection: 'reverse' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-0 right-1/4 opacity-15 pointer-events-none">
        <GearSVG size={140} className="animate-spin-slow" />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 800px 400px at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            ¿Listo para Encontrar los Mejores
            <br />
            <span className="text-white/90">Productos Industriales?</span>
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Pide tu cotización y recibe una propuesta clara para tu operación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-(--color-primary) hover:bg-slate-100 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl text-base"
            >
              Solicitar Cotización
            </a>
            <a href="#productos" className="inline-flex items-center justify-center border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base">
              Ver Catálogo Completo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
