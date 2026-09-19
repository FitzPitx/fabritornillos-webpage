'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle2, MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  nombre: string;
  empresa: string;
  telefono: string;
  correo: string;
  mensaje: string;
}

const steps = [
  { number: '01', title: 'Cuéntanos tu necesidad', description: 'Escríbenos qué producto, servicio o solución estás buscando para tu operación.' },
  { number: '02', title: 'Buscamos la mejor solución', description: 'Revisamos disponibilidad, alternativa técnica o fabricación especial según el caso.' },
  { number: '03', title: 'Suministramos o fabricamos', description: 'Te entregamos la referencia correcta o desarrollamos lo que necesitas bajo pedido.' },
];

const inputClass = (hasError: boolean) =>
  `w-full bg-(--input-bg) border rounded-xl px-4 py-3 text-(--text-heading) placeholder-(--input-placeholder) focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-sm ${
    hasError ? 'border-red-500/60' : 'border-(--input-border) hover:border-(--color-primary)/30'
  }`;

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async () => {
    setIsSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSending(false);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-24" style={{ background: 'var(--contact-gradient)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-(--color-primary-light) font-semibold text-sm tracking-widest uppercase mb-3">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--text-heading) mb-4">
            ¿CÓMO PODEMOS AYUDARTE?
          </h2>
          <p className="text-(--text-body) text-lg max-w-2xl mx-auto">
            Déjanos tus datos y sigue un proceso simple para cotizar, consultar o fabricar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <div className="mb-6 rounded-2xl border border-(--border-subtle) bg-(--glass-bg) p-5">
              <div className="flex items-center gap-2 text-(--text-heading) font-semibold mb-4">
                <CheckCircle2 size={18} className="text-(--color-primary-light)" />
                Cómo trabajamos contigo
              </div>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center gap-3 rounded-xl border border-(--border-subtle) bg-(--bg-surface) px-4 py-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${index === 0 ? 'bg-(--color-primary)' : index === 1 ? 'bg-(--color-primary-light)' : 'bg-slate-500'} text-white text-xs font-bold`}>
                      {step.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-wide text-(--text-muted)">{step.title}</div>
                      <div className="text-sm font-semibold text-(--text-heading)">{step.description}</div>
                    </div>
                    <ArrowRight size={14} className="shrink-0 text-(--color-primary-light)" />
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-dark rounded-3xl p-8 border border-(--color-primary)/20">
              {sent && (
                <div className="mb-6 bg-(--color-primary)/10 border border-(--color-primary)/30 text-(--color-primary-light) rounded-xl px-5 py-4 text-sm font-medium">
                  ✅ ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-(--text-body) mb-2">Nombre completo *</label>
                  <input {...register('nombre', { required: 'El nombre es requerido' })} type="text" placeholder="Tu nombre" className={inputClass(!!errors.nombre)} />
                  {errors.nombre && <p className="mt-1 text-xs text-red-400">{errors.nombre.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-(--text-body) mb-2">Empresa *</label>
                  <input {...register('empresa', { required: 'La empresa es requerida' })} type="text" placeholder="Nombre de tu empresa" className={inputClass(!!errors.empresa)} />
                  {errors.empresa && <p className="mt-1 text-xs text-red-400">{errors.empresa.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-(--text-body) mb-2">Teléfono *</label>
                    <input {...register('telefono', { required: 'El teléfono es requerido' })} type="tel" placeholder="+57 314 282 0573" className={inputClass(!!errors.telefono)} />
                    {errors.telefono && <p className="mt-1 text-xs text-red-400">{errors.telefono.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-(--text-body) mb-2">Correo electrónico *</label>
                    <input
                      {...register('correo', { required: 'El correo es requerido', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo no válido' } })}
                      type="email"
                      placeholder="correo@empresa.com"
                      className={inputClass(!!errors.correo)}
                    />
                    {errors.correo && <p className="mt-1 text-xs text-red-400">{errors.correo.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-(--text-body) mb-2">Mensaje *</label>
                  <textarea
                    {...register('mensaje', { required: 'El mensaje es requerido', minLength: { value: 15, message: 'Mínimo 15 caracteres' } })}
                    rows={5}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    className={`${inputClass(!!errors.mensaje)} resize-none`}
                  />
                  {errors.mensaje && <p className="mt-1 text-xs text-red-400">{errors.mensaje.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-3 bg-(--color-primary) hover:bg-(--color-primary-light) disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-(--color-primary)/25 text-base"
                >
                  {isSending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 flex flex-col gap-6">
            <div id="disponibilidad" className="sr-only" aria-hidden="true" />

            <div className="glass-dark rounded-2xl p-7 border border-(--color-primary)/20 flex-1 flex flex-col h-full">
              <h3 className="text-lg font-bold text-(--text-heading) mb-6">Información de Contacto</h3>

              <ul className="space-y-5 mb-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-(--color-primary)/15 border border-(--color-primary)/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-(--color-primary-light)" />
                  </div>
                  <div>
                    <div className="text-xs text-(--text-muted) uppercase tracking-wide mb-1">Dirección</div>
                    <div className="text-(--text-body) text-sm">Cl. 7 #37 a 65, Puente Aranda, Bogotá, Cundinamarca</div>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-(--color-primary)/15 border border-(--color-primary)/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-(--color-primary-light)" />
                  </div>
                  <div>
                    <div className="text-xs text-(--text-muted) uppercase tracking-wide mb-1">Teléfono</div>
                    <a href="tel:+573153365823" className="text-(--text-body) text-sm hover:text-(--color-primary-light) transition-colors">+57 315 336 5823 - Soporte técnico</a>
                    <br />
                    <a href="tel:+573142820573" className="text-(--text-body) text-sm hover:text-(--color-primary-light) transition-colors">+57 314 282 0573 - Almacén ferretero</a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-(--color-primary)/15 border border-(--color-primary)/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-(--color-primary-light)" />
                  </div>
                  <div>
                    <div className="text-xs text-(--text-muted) uppercase tracking-wide mb-1">Correo</div>
                    <a href="mailto:ventas@fabritornillos.com" className="text-(--text-body) text-sm hover:text-(--color-primary-light) transition-colors">ventas@fabritornillos.com - Cotizaciones</a>
                    <br />
                    <a href="mailto:Fabritornillos@Fabritornillos.com" className="text-(--text-body) text-sm hover:text-(--color-primary-light) transition-colors">Fabritornillos@Fabritornillos.com - Corporativo</a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-(--color-primary)/15 border border-(--color-primary)/20 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-(--color-primary-light)" />
                  </div>
                  <div>
                    <div className="text-xs text-(--text-muted) uppercase tracking-wide mb-1">Horario</div>
                    <div className="text-(--text-body) text-sm">Lun–Vie: 8:00 am – 5:00 pm<br />Sáb: 8:30 am – 2:30 pm</div>
                  </div>
                </li>
              </ul>

              <div className="rounded-2xl overflow-hidden border border-(--color-primary)/20 shadow-lg flex-1 min-h-[260px] md:min-h-[320px] lg:min-h-0">
                <iframe
                  title="Ubicación FabriTornillos"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.886454642587!2d-74.1038969!3d4.614334100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9943b876f269%3A0xf189b40a91a3bf88!2sFABRITORNILLOS!5e0!3m2!1sen!2sco!4v1783617628805!5m2!1sen!2sco"
                  className="w-full h-full"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
