'use client';

import { motion } from 'framer-motion';
import { Truck, Box, Phone, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Truck size={32} className="text-(--color-primary-light)" />,
    title: 'FABRICACIÓN ESPECIAL',
    description: 'Fabricamos piezas bajo plano o muestra.',
    accent: 'border-(--color-primary)/20 hover:border-(--color-primary-light)/40',
  },
  {
    icon: <Box size={32} className="text-(--color-primary-light)" />,
    title: 'AMPLIO PORTAFOLIO',
    description: 'Productos para industria y construcción.',
    accent: 'border-(--color-primary)/20 hover:border-(--color-primary-light)/40',
  },
  {
    icon: <Phone size={32} className="text-(--color-primary-light)" />,
    title: 'ASESORÍA ESPECIALIZADA',
    description: 'Acompañamiento técnico personalizado.',
    accent: 'border-(--color-primary)/20 hover:border-(--color-primary-light)/40',
  },
  {
    icon: <ShieldCheck size={32} className="text-(--color-primary-light)" />,
    title: 'SOLUCIONES INTEGRALES',
    description: 'Si no existe, buscamos la mejor alternativa para el cliente.',
    accent: 'border-(--color-primary)/20 hover:border-(--color-primary-light)/40',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WhyChooseUs() {
  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden"
      style={{ background: '#0f172a' }}
    >
      {/* Blueprint pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 900px 500px at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-(--color-primary-light) font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestros diferenciadores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MÁS DE 30 AÑOS CONSTRUYENDO SOLUCIONES INDUSTRIALES
          </h2>
          <p className="text-(--color-primary-light) text-lg font-medium">
            Operamos con criterio técnico, respuesta rápida y foco en continuidad operativa.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`glass-dark rounded-2xl p-8 border ${f.accent} transition-all duration-300 hover:shadow-xl hover:shadow-[color:var(--color-primary)]/10 group`}
            >
              <div className="w-14 h-14 rounded-xl bg-(--color-primary)/10 border border-(--color-primary)/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-(--color-primary-light) transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
