'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Phone } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  'Más de 15 años de experiencia en el sector',
  'Fabricaciones especiales sin cantidad mínima',
  'Asesoría técnica especializada sin costo',
  'Envíos a todo el país con guía de rastreo',
];

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-24 overflow-hidden" style={{ background: 'var(--aboutus-gradient)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center text-xs font-bold tracking-widest text-(--color-primary-light) uppercase border border-(--color-primary)/30 bg-(--color-primary)/10 px-4 py-1.5 rounded-full mb-6">
              Sobre FabriTornillos
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-heading) leading-tight mb-6">
              Líderes en Soluciones{' '}
              <span className="text-(--color-primary-light)">Industriales</span>{' '}
              para tu operación
            </h2>

            <p className="text-(--text-body) text-lg leading-relaxed mb-8">
              FabriTornillos SAS acompaña a constructoras, plantas industriales y talleres con
              suministro confiable, asesoría técnica y productos para tornillería, soldadura,
              mangueras, ferretería y piezas especiales.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-(--text-heading)"
                >
                  <CheckCircle2 size={20} className="text-(--color-primary-light) shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <a href="#contacto" className="inline-flex items-center gap-2 bg-(--color-primary) hover:bg-(--color-primary-light) text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-(--color-primary)/25">
              Conócenos Más
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden border-l-4 border-(--color-primary-light) h-120 lg:h-135 w-full">
              <Image src="/img/local.jpeg" alt="Instalaciones de FabriTornillos" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
              <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-t from-(--color-secondary)/50 via-transparent to-transparent pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 glass-dark rounded-2xl p-5 border border-(--color-primary)/30 shadow-2xl shadow-(--color-primary)/10 max-w-60"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-(--color-primary)/20 border border-(--color-primary)/30 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-(--color-primary-light)" />
                </div>
                <div>
                  <div className="text-xs text-(--color-primary-light) font-semibold uppercase tracking-wide mb-1">Soporte Técnico</div>
                  <div className="text-(--text-heading) font-bold text-sm leading-snug">
                    Llámanos al<br />
                    <span className="text-(--color-primary-light)">+57 315 336 5823</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-(--color-primary)/30 rounded-tl-2xl" />
            <div className="absolute -bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-(--color-primary)/30 rounded-br-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
