'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'FabriTornillos ha mantenido nuestro suministro crítico sin interrupciones. Respuesta rápida, calidad consistente y atención clara en cada pedido.',
    name: 'Carlos Rodríguez', role: 'Jefe de Compras', company: 'Constructora Arco S.A.', initials: 'CR', color: 'from-(--color-primary) to-(--color-primary-light)', stars: 5,
  },
  {
    quote: 'El equipo técnico nos ayudó a elegir la referencia correcta para cada aplicación. Se nota la experiencia y el enfoque en resolver.',
    name: 'Lucía Torres', role: 'Gerente de Operaciones', company: 'Minería Boyacá S.A.S.', initials: 'LT', color: 'from-blue-500 to-(--color-primary-light)', stars: 5,
  },
  {
    quote: 'Llevamos años trabajando con ellos porque entienden la urgencia del cliente industrial y responden con criterio.',
    name: 'Andrés Mejía', role: 'Director Técnico', company: 'Taller Automotriz Industrial', initials: 'AM', color: 'from-slate-700 to-(--color-primary)', stars: 5,
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#f0fdfa' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13,148,136,0.12) 1px, transparent 0)', backgroundSize: '28px 28px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block text-(--color-primary-light) font-semibold text-sm tracking-widest uppercase mb-3">Testimonios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Una buena landing también debe transmitir respaldo. Estas opiniones ayudan a hacerlo.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={cardVariants} className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:border-(--color-primary)/20 transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, s) => (<Star key={s} size={16} className="fill-amber-400 text-amber-400" />))}
              </div>
              <div className="text-5xl font-serif text-(--color-primary-light) leading-none mb-2 -mt-2">"</div>
              <p className="text-slate-600 italic leading-relaxed text-sm flex-1 mb-6">{t.quote}</p>
              <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                <div className={`w-11 h-11 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>{t.initials}</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
