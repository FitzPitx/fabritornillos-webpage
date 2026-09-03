'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    badge: 'Disponible',
    badgeColor: 'bg-(--color-primary) text-white',
    name: 'Mangueras S96',
    ref: 'Líneas hidráulicas y aplicaciones industriales',
    status: 'Disponible',
    description: 'Soluciones para presión, conducción y reemplazo rápido en operación continua.',
    image: '/img/productos_destacados/manguera_s96.jpeg',
    gradient: 'from-(--color-primary)/80 to-(--color-secondary)',
    featured: true,
  },
  {
    id: 2,
    badge: 'Fabricación especial',
    badgeColor: 'bg-(--color-primary-light) text-white',
    name: 'Fabricación especiales',
    ref: 'Piezas, soportes y componentes bajo plano',
    status: 'Fabricación especial',
    description: 'Desarrollo a medida para proyectos que requieren ajuste técnico y respuesta puntual.',
    image: '/img/productos_destacados/fabricaciones_especiales.jpg',
    gradient: 'from-blue-900/70 to-(--color-secondary)',
    featured: true,
  },
  {
    id: 3,
    badge: 'Disponible',
    badgeColor: 'bg-(--color-primary) text-white',
    name: 'Ferretería industrial',
    ref: 'Sujeción, fijación y suministro general',
    status: 'Disponible',
    description: 'Inventario listo para abastecer mantenimiento, producción y obra civil.',
    image: '/img/productos_destacados/ferreteria-industrial.jpg',
    gradient: 'from-slate-700/70 to-(--color-secondary)',
    featured: true,
  },
  {
    id: 4,
    badge: 'Bajo pedido',
    badgeColor: 'bg-(--color-primary-light) text-white',
    name: 'Tornillería',
    ref: 'Grados, medidas y acabados industriales',
    status: 'Bajo pedido',
    description: 'Atención para surtidos específicos y referencias que requieren confirmación previa.',
    image: '/img/productos_destacados/tornilleria.jpg',
    gradient: 'from-amber-900/70 to-(--color-secondary)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[color:var(--color-secondary)]" id="destacados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-(--color-primary-light) font-semibold text-sm tracking-widest uppercase mb-3">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Productos Destacados
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Mangueras S96, fabricación especial, ferretería industrial y tornillería con marcas comerciales de respaldo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-(--color-primary)/40 transition-all duration-300 hover:shadow-xl hover:shadow-[color:var(--color-primary)]/10 flex flex-col ${p.featured ? 'ring-1 ring-(--color-primary)/20' : ''}`}
            >
              {/* Product image area */}
              <div className={`h-48 relative bg-linear-to-br ${p.gradient} overflow-hidden`}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover mix-blend-luminosity opacity-90 transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-linear-to-br ${p.gradient} opacity-60`} />
                <div className="absolute inset-0 grid-pattern opacity-20" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-(--color-primary)/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-(--color-primary) transition-colors leading-snug">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-3">{p.ref}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 size={14} className="text-(--color-primary-light)" />
                  {p.status}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <a
                    href="#disponibilidad"
                    className="flex-1 flex items-center justify-center text-center border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary)/5 text-xs font-semibold py-2.5 px-2 rounded-xl transition-colors"
                  >
                    Ver detalles
                  </a>
                  <a
                    href={`https://wa.me/573001234567?text=Hola%2C%20estoy%20interesado%20en%20el%20producto%20${encodeURIComponent(p.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 text-center bg-(--color-primary) hover:bg-(--color-primary-light) text-white text-xs font-semibold py-2.5 px-2 rounded-xl transition-colors"
                  >
                    <MessageCircle size={13} className="shrink-0" />
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#disponibilidad"
            className="inline-flex items-center gap-2 bg-(--color-secondary) hover:bg-(--color-primary) text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[color:var(--color-primary)]/20"
          >
            Consultar disponibilidad
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}