'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export interface ProjectDetail {
  id: number;
  slug: string;
  category: string;
  title: string;
  client?: string;
  image: string;
  paragraphs: string[];
  highlights: string[];
  tagline: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    slug: 'acueducto-bogota',
    category: 'Infraestructura · Acueducto de Bogotá',
    title: 'Adaptación y Diseño Interior de Estación de Trabajo para Carros Taller',
    image: '/img/proyectos/acueducto-bogota-3.jpg',
    paragraphs: [
      'Realizamos el acompañamiento a diferentes consorcios del Acueducto de Bogotá para la reestructuración y diseño interior de los carros taller, adaptando y adecuando maquinaria, herramientas y equipo de oficina según el tamaño y requerimiento específico de cada proyecto, de acuerdo con las dimensiones de la maquinaria y el trabajo a realizar.',
    ],
    highlights: [
      'Diseño personalizado',
      'Optimización de espacios',
      'Adaptación a diferentes tipos de vehículos',
      'Seguridad y funcionalidad en operación',
      'Organización y almacenamiento de herramientas',
      'Adecuación de maquinaria y equipos especializados',
    ],
    tagline: 'Espacio para equipo de oficina y elementos de trabajo.',
  },
  {
    id: 2,
    slug: 'mantenimiento-industrial',
    category: 'Mantenimiento Industrial · Pollo Andino S.A.S. / Pixie',
    title: 'Acompañamiento y Asesoramiento a Equipos de Mantenimiento y Compras',
    image: '/img/proyectos/mantenimiento-industrial.jpg',
    paragraphs: [
      'Brindamos acompañamiento integral a equipos de mantenimiento y compras de empresas de diferentes sectores, entre ellas Pollo Andino S.A.S., del sector avícola, y Pixie, empresa dedicada a la producción de alimentos para mascotas.',
      'Nuestro trabajo incluye servicios de taller, mecanizados, mantenimiento general en mecánica y fabricación o adaptación de piezas, además de asesoramiento en la selección y adquisición de herramientas, elementos de ferretería e insumos necesarios para la operación.',
      'Buscamos entender las necesidades de cada empresa y aportar soluciones prácticas que faciliten sus procesos de mantenimiento, abastecimiento y operación.',
    ],
    highlights: [
      'Servicios de taller y mecanizado',
      'Mantenimiento y soluciones mecánicas',
      'Fabricación y adaptación de piezas',
      'Asesoramiento en compras y abastecimiento',
      'Identificación de herramientas e insumos según cada necesidad',
    ],
    tagline: 'Una alianza técnica y comercial para apoyar el mantenimiento y la operación de nuestros clientes.',
  },
  {
    id: 3,
    slug: 'sector-audiovisual',
    category: 'Reconstrucción de Precisión · Sector Audiovisual',
    title: 'Reconstrucción y Mantenimiento de Equipos para el Sector Audiovisual',
    image: '/img/proyectos/sector-audiovisual.png',
    paragraphs: [
      'Hemos trabajado de la mano con diferentes productoras y empresas especializadas en equipos audiovisuales, brindando soluciones de reconstrucción, reparación y fabricación de piezas para cámaras profesionales, trípodes, porta lentes, drones, videoproyectores, equipos de iluminación y otros elementos especializados.',
      'Este tipo de equipos requiere especial cuidado debido a su valor, precisión, exclusividad y delicadeza. En algunos casos, además, se trata de equipos vintage o de colección, donde conservar sus características originales es parte fundamental del trabajo.',
      'Por eso desarrollamos soluciones mecánicas buscando recuperar, mantener o reconstruir componentes, procurando conservar al máximo la funcionalidad, precisión y características originales del equipo. En FABRITORNILLOS SAS ofrecemos un aliado técnico para esos requerimientos que necesitan más que un repuesto: análisis, precisión y una solución mecánica desarrollada para cada caso.',
    ],
    highlights: [
      'Cámaras y accesorios profesionales',
      'Trípodes y sistemas de soporte',
      'Porta lentes y componentes mecánicos',
      'Drones y equipos especializados',
      'Equipos de iluminación y videoproyectores',
      'Reconstrucción y fabricación de piezas especiales',
      'Recuperación y adaptación de componentes',
    ],
    tagline: 'Cuando reemplazar no es una opción, buscamos la forma de recuperar.',
  },
];

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-(--bg-surface) border border-(--border-subtle) shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar detalles del proyecto"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-(--glass-bg) border border-(--border-subtle) flex items-center justify-center text-(--text-body) hover:text-(--color-primary) hover:border-(--color-primary)/40 transition-all"
            >
              <X size={18} />
            </button>

            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--bg-surface) via-black/10 to-black/30" />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-(--color-primary) text-white">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-(--text-heading) mb-4 leading-snug">
                {project.title}
              </h3>

              <div className="space-y-4 mb-6">
                {project.paragraphs.map((p, i) => (
                  <p key={i} className="text-(--text-body) text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="rounded-2xl border border-(--border-subtle) bg-(--bg-surface-alt) p-5 mb-6">
                <p className="text-xs uppercase tracking-wide font-bold text-(--color-primary-light) mb-3">
                  Alcance del proyecto
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-(--text-heading)">
                      <CheckCircle2 size={16} className="text-(--color-primary-light) shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-(--color-primary-light) font-semibold italic text-sm sm:text-base mb-8 border-l-2 border-(--color-primary) pl-4">
                {project.tagline}
              </p>

              <a
                href={`https://wa.me/573001234567?text=${encodeURIComponent(
                  `Hola, vi el proyecto "${project.title}" y quiero una asesoría similar para mi operación.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-(--color-primary) hover:bg-(--color-primary-light) text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-(--color-primary)/25"
              >
                <MessageCircle size={18} />
                Quiero una solución similar
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}