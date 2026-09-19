'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import ProjectDetailModal, { projectDetails, type ProjectDetail } from './ProjectDetailModal';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    id: 1,
    category: 'Acueducto de Bogotá',
    title: 'Adaptación y Diseño Interior de Estación de Trabajo para Carros Taller',
    description: 'Reestructuración y diseño interior de carros taller para consorcios del Acueducto de Bogotá.',
    tags: ['Diseño Interior', 'Adecuación', 'Infraestructura'],
    image: '/img/proyectos/acueducto-bogota-1.png',
    gradient: 'from-(--color-primary)/85 via-(--color-secondary)/40 to-(--color-secondary)/95',
    badge: 'bg-(--color-primary)/25 text-white border-(--color-primary)/40',
  },
  {
    id: 2,
    category: 'Pollo Andino S.A.S. · Pixie',
    title: 'Acompañamiento a Equipos de Mantenimiento y Compras',
    description: 'Servicios de taller, mecanizado y asesoría en compras para operaciones industriales del sector avícola y alimentos.',
    tags: ['Mantenimiento', 'Mecanizado', 'Abastecimiento'],
    image: '/img/proyectos/mantenimiento-industrial.jpg',
    gradient: 'from-amber-900/80 via-(--color-secondary)/40 to-(--color-secondary)/95',
    badge: 'bg-amber-500/25 text-white border-amber-400/40',
  },
  {
    id: 3,
    category: 'Sector Audiovisual',
    title: 'Reconstrucción y Mantenimiento de Equipos Audiovisuales',
    description: 'Reconstrucción y fabricación de piezas de precisión para cámaras, trípodes, drones y equipos de iluminación.',
    tags: ['Precisión', 'Reconstrucción', 'Audiovisual'],
    image: '/img/proyectos/sector-audiovisual.png',
    gradient: 'from-indigo-900/80 via-(--color-secondary)/40 to-(--color-secondary)/95',
    badge: 'bg-indigo-500/25 text-white border-indigo-400/40',
  },
];

export default function ProjectsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  const openDetails = (id: number) => {
    const detail = projectDetails.find((p) => p.id === id) ?? null;
    setActiveProject(detail);
  };

  return (
    <section id="proyectos" className="py-24 bg-(--section-alt-bg-2) overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-heading) mb-3">
              Nuestros Proyectos
            </h2>
            <p className="text-(--text-body) text-lg max-w-xl">
              Casos reales de acompañamiento técnico, mantenimiento y fabricación de soluciones a la medida.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="glass w-12 h-12 rounded-xl flex items-center justify-center text-(--text-body) border border-(--border-subtle) hover:border-(--color-primary)/50 hover:text-(--color-primary-light) transition-all"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="glass w-12 h-12 rounded-xl flex items-center justify-center text-(--text-body) border border-(--border-subtle) hover:border-(--color-primary)/50 hover:text-(--color-primary-light) transition-all"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={false}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          breakpoints={{ 640: { slidesPerView: 1 }, 900: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
          className="pb-12!"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="group relative rounded-2xl overflow-hidden border border-(--border-subtle) hover:border-(--color-primary)/40 transition-all duration-300 hover:shadow-xl hover:shadow-(--color-primary)/10 h-115 flex flex-col justify-end">
                {/* Imagen de fondo real */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradiente de marca sobre la imagen para legibilidad del texto */}
                <div className={`absolute inset-0 bg-linear-to-t ${project.gradient}`} />
                <div className="absolute inset-0 grid-pattern opacity-20" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-sm ${project.badge}`}>
                    {project.category}
                  </span>
                </div>

                {/* Card body — texto sobre la imagen */}
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/10 text-white border border-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => openDetails(project.id)}
                    className="inline-flex items-center gap-1.5 text-white hover:text-(--color-primary-light) font-semibold text-sm transition-colors group/link"
                  >
                    Ver proyecto completo
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProjectDetailModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}