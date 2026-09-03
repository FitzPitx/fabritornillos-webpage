'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export interface ProductDetail {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  status: string;
  image: string;
  paragraphs: string[];
  expectations: string[];
}

export const productDetails: ProductDetail[] = [
  {
    id: 1,
    slug: 'mangueras-s96',
    name: 'Mangueras S96',
    tagline: 'Soluciones flexibles para aplicaciones exigentes',
    status: 'Disponible',
    image: '/img/productos_destacados/manguera_s96.jpeg',
    paragraphs: [
      'Las mangueras flexometálicas S96 están diseñadas para aplicaciones que requieren resistencia, flexibilidad y confiabilidad. Fabricadas en acero inoxidable, son una solución versátil para diferentes sectores y condiciones de trabajo.',
      'Ofrecemos asesoría y adaptación según cada necesidad, incluyendo el diseño y fabricación de acoples y conexiones especiales. Nuestro objetivo es ayudarte a encontrar una solución funcional para tu proceso, equipo o instalación.',
    ],
    expectations: [
      'Acompañamiento técnico',
      'Adaptación a requerimientos específicos',
      'Soluciones pensadas para cada aplicación',
    ],
  },
  {
    id: 2,
    slug: 'fabricacion-especial',
    name: 'Fabricaciones Especiales',
    tagline: 'Si no existe en el mercado, buscamos la forma de fabricarlo',
    status: 'Fabricación especial',
    image: '/img/productos_destacados/fabricaciones_especiales.jpg',
    paragraphs: [
      'Desarrollamos piezas, soportes, componentes y soluciones especiales según las necesidades de cada cliente. No nos limitamos únicamente a fabricar una pieza: buscamos entender el problema, analizar las opciones y aportar nuestra experiencia para encontrar una solución adecuada.',
      'Podemos acompañarte desde la identificación de una necesidad y la definición de una idea, hasta el diseño, ajuste y fabricación de la pieza requerida.',
    ],
    expectations: [
      'Asesoría cercana',
      'Criterio técnico',
      'Soluciones desarrolladas según las necesidades reales de tu proyecto',
    ],
  },
  {
    id: 3,
    slug: 'ferreteria-industrial',
    name: 'Ferretería Industrial',
    tagline: 'Más productos, menos complicaciones para tu operación',
    status: 'Disponible',
    image: '/img/productos_destacados/ferreteria-industrial.jpg',
    paragraphs: [
      'Contamos con un amplio portafolio para atender necesidades de mantenimiento, industria, construcción y operación. Encontrarás productos de ferretería general, herramientas, eléctricos, tubería y accesorios PVC, acoples, racores, mangueras, pinturas, elementos de protección personal, productos institucionales y aseo industrial, entre otras líneas.',
      'Pero nuestro servicio va más allá del suministro. Si tienes varios requerimientos, especificaciones poco claras o necesitas orientación para identificar el producto y las cantidades adecuadas, nuestro equipo puede ayudarte a evaluar las opciones y encontrar una alternativa conveniente para tu necesidad.',
    ],
    expectations: [
      'Variedad',
      'Asesoramiento',
      'Un aliado para facilitar tus procesos de compra y abastecimiento',
    ],
  },
  {
    id: 4,
    slug: 'tornilleria',
    name: 'Tornillería',
    tagline: 'La fijación correcta también es parte de la solución',
    status: 'Bajo pedido',
    image: '/img/productos_destacados/tornilleria.jpg',
    paragraphs: [
      'La tornillería puede parecer sencilla, pero una medida, material, rosca o especificación incorrecta puede afectar todo un montaje. Por eso contamos con un amplio surtido y brindamos asesoría para ayudarte a identificar la opción adecuada según tu aplicación.',
      'Trabajamos con diferentes medidas, especificaciones y elementos de fijación. Y si la referencia que necesitas no se encuentra fácilmente en el mercado tradicional, también evaluamos alternativas de adaptación o fabricación de tornillos, espárragos, tuercas y piezas especiales.',
    ],
    expectations: [
      'Surtido',
      'Orientación técnica',
      'Búsqueda de soluciones incluso para requerimientos fuera de lo convencional',
    ],
  },
];

interface ProductDetailModalProps {
  product: ProductDetail | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
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
            aria-labelledby="product-modal-title"
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-(--bg-surface) border border-(--border-subtle) shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar detalles del producto"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-(--glass-bg) border border-(--border-subtle) flex items-center justify-center text-(--text-body) hover:text-(--color-primary) hover:border-(--color-primary)/40 transition-all"
            >
              <X size={18} />
            </button>

            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--bg-surface) via-black/10 to-black/30" />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-(--color-primary) text-white">
                  {product.status}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 id="product-modal-title" className="text-2xl sm:text-3xl font-bold text-(--text-heading) mb-1">
                {product.name}
              </h3>
              <p className="text-(--color-primary-light) font-semibold italic text-sm sm:text-base mb-6">
                {product.tagline}
              </p>

              <div className="space-y-4 mb-6">
                {product.paragraphs.map((p, i) => (
                  <p key={i} className="text-(--text-body) text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="rounded-2xl border border-(--border-subtle) bg-(--bg-surface-alt) p-5 mb-8">
                <p className="text-xs uppercase tracking-wide font-bold text-(--color-primary-light) mb-3">
                  Puedes esperar
                </p>
                <ul className="space-y-2">
                  {product.expectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-(--text-heading)">
                      <CheckCircle2 size={16} className="text-(--color-primary-light) shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/573001234567?text=${encodeURIComponent(
                  `Hola, estoy interesado en ${product.name}. ¿Me pueden dar más información?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-(--color-primary) hover:bg-(--color-primary-light) text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-(--color-primary)/25"
              >
                <MessageCircle size={18} />
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
