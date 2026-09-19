'use client';

import { motion } from 'framer-motion';
import { Truck, Box, Phone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Truck size={30} />,
    title: 'FABRICACIÓN ESPECIAL',
    description: 'Fabricamos piezas bajo plano o muestra.',
    image: '/img/nosotros/fabricacion-especial.png',
    gradient: 'from-(--color-secondary)/95 via-(--color-secondary)/70 to-(--color-primary)/30',
  },
  {
    icon: <Box size={30} />,
    title: 'AMPLIO PORTAFOLIO',
    description: 'Productos para industria y construcción.',
    image: '/img/nosotros/amplio-portafolio.jpeg',
    gradient: 'from-(--color-secondary)/95 via-(--color-secondary)/70 to-amber-900/30',
  },
  {
    icon: <Phone size={30} />,
    title: 'ASESORÍA ESPECIALIZADA',
    description: 'Acompañamiento técnico personalizado.',
    image: '/img/nosotros/asesoria-especializada.png',
    gradient: 'from-(--color-secondary)/95 via-(--color-secondary)/70 to-indigo-900/30',
  },
  {
    icon: <ShieldCheck size={30} />,
    title: 'SOLUCIONES INTEGRALES',
    description: 'Si no existe, buscamos la mejor alternativa para el cliente.',
    image: '/img/nosotros/soluciones-integrales.png',
    gradient: 'from-(--color-secondary)/95 via-(--color-secondary)/70 to-(--color-primary)/30',
  },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardVariants = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function WhyChooseUs() {
  return (
    <section id="servicios" className="relative py-24 overflow-hidden bg-(--section-alt-bg)">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 900px 500px at 50% 50%, rgba(13,148,136,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-heading) mb-4">
            MÁS DE 30 AÑOS CONSTRUYENDO SOLUCIONES INDUSTRIALES
          </h2>
          <p className="text-(--color-primary-light) text-lg font-medium">
            Operamos con criterio técnico, respuesta rápida y foco en continuidad operativa.
          </p>
        </motion.div>

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
              className="group relative rounded-2xl overflow-hidden border border-(--color-primary)/20 hover:border-(--color-primary-light)/40 transition-all duration-300 hover:shadow-xl hover:shadow-(--color-primary)/10 h-72"
            >
              {/* Imagen de fondo */}
              <Image
                src={f.image}
                alt={f.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradiente de marca sobre la imagen para legibilidad */}
              <div className={`absolute inset-0 bg-linear-to-t ${f.gradient}`} />
              <div className="absolute inset-0 grid-pattern opacity-20" />

              {/* Contenido sobre la imagen */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 text-(--color-primary-light) group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}