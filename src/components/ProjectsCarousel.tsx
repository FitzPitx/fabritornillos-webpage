'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    id: 1,
    category: 'Proyecto Industrial',
    title: 'Suministro Metalmecánico — Planta ACME Colombia',
    description: 'Suministro integral de tornillería y elementos de fijación para planta de manufactura.',
    tags: ['Tornillería', 'Fijación', 'Industrial'],
    gradient: 'from-(--color-primary)/80 to-(--color-secondary)/90',
    badge: 'bg-(--color-primary)/20 text-(--color-primary-light) border-(--color-primary)/30',
  },
  {
    id: 2,
    category: 'Infraestructura Vial',
    title: 'Kit de Fijación — Proyecto Vial Bogotá Norte',
    description: 'Provisión de varillas roscadas y pernos estructurales para proyecto de infraestructura vial.',
    tags: ['Varillas', 'Pernos', 'Construcción'],
    gradient: 'from-blue-900/80 to-(--color-secondary)/90',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  },
  {
    id: 3,
    category: 'Minería',
    title: 'Mangueras Hidráulicas — Sector Minero Boyacá',
    description: 'Suministro de mangueras hidráulicas de alta presión para equipos de extracción minera.',
    tags: ['Mangueras', 'Hidráulica', 'Minería'],
    gradient: 'from-amber-900/80 to-(--color-secondary)/90',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  },
  {
    id: 4,
    category: 'Automotriz',
    title: 'Soldadura Industrial — Taller Automotriz Medellín',
    description: 'Dotación de consumibles de soldadura MIG/TIG para taller de reparación industrial.',
    tags: ['Soldadura', 'MIG/TIG', 'Automotriz'],
    gradient: 'from-red-900/80 to-(--color-secondary)/90',
    badge: 'bg-red-500/20 text-red-300 border-red-500/30',
  },
  {
    id: 5,
    category: 'Construcción',
    title: 'Ferretería Especializada — Constructora Arco S.A.',
    description: 'Suministro completo de ferretería y herrajes para proyecto residencial de gran escala.',
    tags: ['Ferretería', 'Herrajes', 'Construcción'],
    gradient: 'from-purple-900/80 to-(--color-secondary)/90',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  },
];

export default function ProjectsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="proyectos" className="py-24 bg-slate-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="inline-block text-(--color-primary-light) font-semibold text-sm tracking-widest uppercase mb-3">
              Portafolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Nuestros Proyectos
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Ejemplos de entregas y soluciones que muestran nuestra capacidad de respuesta.
            </p>
          </div>
          {/* Custom nav arrows */}
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="glass w-12 h-12 rounded-xl flex items-center justify-center text-gray-300 border border-white/10 hover:border-(--color-primary)/50 hover:text-(--color-primary-light) transition-all"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="glass w-12 h-12 rounded-xl flex items-center justify-center text-gray-300 border border-white/10 hover:border-(--color-primary)/50 hover:text-(--color-primary-light) transition-all"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12!"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group rounded-2xl overflow-hidden border border-white/10 hover:border-(--color-primary)/40 transition-all duration-300 bg-(--color-secondary) hover:shadow-xl hover:shadow-(color:--color-primary)/10">
                {/* Image area */}
                <div
                  className="h-70 relative overflow-hidden"
                  style={{ background: '#0f172a' }}
                >
                  {/* Gradient placeholder — replace with actual project images */}
                  <div className={`absolute inset-0 bg-linear-to-br ${project.gradient}`} />
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <div className="text-3xl">🏭</div>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${project.badge}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-(--color-primary-light) transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-(--color-primary)/10 text-(--color-primary-light) border border-(--color-primary)/20 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-(--color-primary-light) hover:text-white font-semibold text-sm transition-colors group/link"
                  >
                    Ver Detalle
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
