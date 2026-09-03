'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
  { name: 'Truper', src: '/img/brands/truper-logo.png' },
  { name: 'Dewalt', src: '/img/brands/dewalt-logo.png' },
  { name: 'Grival', src: '/img/brands/grival-seeklogo.png' },
  { name: 'Corona', src: '/img/brands/corona-seeklogo.png' },
  { name: 'Sata', src: '/img/brands/banner-sata.png' },
  { name: 'Kanuf', src: '/img/brands/kanuf-seeklogo.png' },
  { name: 'Simoniz', src: '/img/brands/simoniz-seeklogo.png' },
  { name: 'Supermastick', src: '/img/brands/supermastick.jpg' },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Brands() {
  return (
    <section
      id="marcas"
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #081123 0%, #0b152d 100%)',
      }}
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        className="text-center mb-14 px-4"
      >
        <span className="inline-block text-(--color-primary-light) font-semibold text-sm tracking-widest uppercase mb-3">
          Marcas Aliadas
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          TRABAJAMOS CON LAS MEJORES MARCAS
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Distribuimos productos de marcas líderes en el sector industrial, ferretero y de mantenimiento.
        </p>
      </motion.div>

      {/* Carrusel infinito */}
      <div className="relative">
        {/* Fades laterales para transición suave */}
        <div className="absolute left-0 top-0 h-full w-16 md:w-32 z-10 bg-linear-to-r from-(--color-secondary) to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 md:w-32 z-10 bg-linear-to-l from-(--color-secondary) to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12 shrink-0 pr-8 md:pr-12"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="glass-dark flex items-center justify-center shrink-0 w-40 h-24 md:w-48 md:h-28 rounded-2xl border border-(--color-primary)/15 hover:border-(--color-primary-light)/40 transition-all duration-300 px-6 py-4"
              >
                <Image
                  src={brand.src}
                  alt={`Logo de ${brand.name}`}
                  width={140}
                  height={80}
                  className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}