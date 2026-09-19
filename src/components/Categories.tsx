'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Flame, Hammer, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

interface Category {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  image?: string;
  large?: boolean;
  targetHref: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Fabricación de Piezas Especiales',
    description: 'Tornillos, tuercas, arandelas y pernos para todo tipo de aplicación industrial.',
    icon: <Wrench size={28} />,
    gradient: 'from-(--color-primary)/90 via-blue-900/70 to-(--color-secondary)/90',
    image: '/img/categorias/tornilleria.jpg',
    large: true,
    targetHref: '#producto-fabricacion-especial',
  },
  {
    id: 2,
    title: 'Mangueras Industriales y Flexometálicas',
    description: 'Mangueras hidráulicas, neumáticas y tuberías para sistemas de fluidos.',
    icon: <Flame size={28} />,
    gradient: 'from-amber-900/85 via-orange-900/65 to-(--color-secondary)/90',
    image: '/img/categorias/mangueras.png',
    targetHref: '#producto-mangueras-s96',
  },
  {
    id: 3,
    title: 'Ferretería y Construcción',
    description: 'Artículos de ferretería, sujetadores y accesorios para múltiples usos.',
    icon: <Hammer size={28} />,
    gradient: 'from-indigo-900/85 via-blue-900/65 to-(--color-secondary)/90',
    image: '/img/categorias/ferreteria.jpg',
    targetHref: '#producto-ferreteria-industrial',
  },
  {
    id: 4,
    title: 'Institucionales y papelería',
    description: 'Artículos de oficina, papelería y suministros institucionales para empresas.',
    icon: <ShoppingBag size={28} />,
    gradient: 'from-slate-700/85 via-(--color-primary)/65 to-(--color-secondary)/90',
    targetHref: '#destacados',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

function InstitucionalArt() {
  return (
    <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="60" y="90" width="140" height="170" rx="6" fill="white" opacity="0.08" transform="rotate(-6 130 175)" />
      <rect x="90" y="70" width="140" height="170" rx="6" fill="white" opacity="0.12" transform="rotate(4 160 155)" />
      <rect x="120" y="60" width="140" height="170" rx="6" fill="white" opacity="0.18" />
      <line x1="140" y1="90" x2="240" y2="90" stroke="white" strokeWidth="3" opacity="0.35" />
      <line x1="140" y1="110" x2="220" y2="110" stroke="white" strokeWidth="3" opacity="0.25" />
      <line x1="140" y1="130" x2="230" y2="130" stroke="white" strokeWidth="3" opacity="0.25" />
      <path d="M255 210 L290 175 L305 190 L270 225 Z" fill="white" opacity="0.3" />
      <path d="M290 175 L300 165 L312 177 L302 187 Z" fill="white" opacity="0.4" />
      <rect x="55" y="230" width="230" height="8" rx="4" fill="white" opacity="0.15" />
    </svg>
  );
}

export default function Categories() {
  return (
    <section id="productos" className="py-24 bg-(--bg-surface-alt)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-(--color-primary-light) font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestro Catálogo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-heading) mb-4">
            Nuestra Categoría de Productos
          </h2>
          <p className="text-(--text-body) text-lg max-w-2xl mx-auto">
            Descubre una selección pensada para abastecer proyectos industriales con rapidez, orden y respaldo técnico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={cat.targetHref}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`relative group rounded-2xl overflow-hidden border border-white/10 hover:border-(--color-primary)/50 transition-all duration-500 hover:shadow-xl hover:shadow-(--color-primary)/10 cursor-pointer block ${
                cat.large ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              {cat.image ? (
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={cat.large}
                />
              ) : (
                <div className="absolute inset-0 bg-(--color-secondary)" />
              )}

              {!cat.image && <InstitucionalArt />}

              <div className={`absolute inset-0 bg-linear-to-br ${cat.gradient} transition-opacity duration-500 group-hover:opacity-90`} />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 bg-(--color-primary)/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col justify-end h-full p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors">
                    {cat.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-(--color-primary-light) transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-2">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-(--color-primary-light) group-hover:text-white font-semibold text-sm transition-colors">
                  Ver Productos
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
