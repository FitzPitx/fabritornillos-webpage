'use client';

import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const quickLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

const categories = [
  'Tornillería',
  'Mangueras y Tuberías',
  'Soldaduras',
  'Varillas',
  'Herramientas',
  'Ferretería General',
];

export default function Footer() {
  return (
    <footer
      style={{ background: 'linear-gradient(180deg, #081123 0%, #040812 100%)' }}
      className="border-t border-(--color-primary)/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — Logo + description + social */}
          <div className="col-span-1">
            <a
              href="#inicio"
              className="inline-flex items-center mb-5 group"
              aria-label="Ir al inicio de FabriTornillos"
            >
              <Image
                src="/img/logo-fabritornillos-jukebox-bg-removed.png"
                alt="FabriTornillos SAS - Miscelánea Industrial"
                width={520}
                height={135}
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Más de 30 años ofreciendo soluciones industriales para la manufactura,
              mantenimiento, construcción y proyectos especiales.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-(--color-primary-light) hover:border-(--color-primary)/40 transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>

              <a
                href="https://instagram.com/fabritornillos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-(--color-primary-light) hover:border-(--color-primary)/40 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://linkedin.com/company/fabritornillos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-(--color-primary-light) hover:border-(--color-primary)/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-(--color-primary-light) text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-(--color-primary) group-hover:bg-(--color-primary-light) transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Categories */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Categorías
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#productos"
                    className="text-gray-400 hover:text-(--color-primary-light) text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-(--color-primary) group-hover:bg-(--color-primary-light) transition-colors" />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact data */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contacto
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                  Dirección
                </div>
                Cl. 7 #37 a 65, Puente Aranda, Bogotá, Cundinamarca
              </li>

              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                  Teléfono
                </div>
                <a
                  href="tel:+573153365823"
                  className="hover:text-(--color-primary-light) transition-colors"
                >
                  +57 315 336 5823 - Soporte técnico       
                </a>
                <br />
                <a
                  href="tel:+573142820573"
                  className="hover:text-(--color-primary-light) transition-colors"
                >    
                  +57 314 282 0573 - Almacén ferretero
                </a>
              </li>

              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                  Email
                </div>
                <a
                  href="mailto:ventas@fabritornillos.com"
                  className="hover:text-(--color-primary-light) transition-colors"
                >
                   ventas@fabritornillos.com - Cotizaciones
                </a>
                <br />
                <a
                  href="mailto:Fabritornillos@Fabritornillos.com"
                  className="hover:text-(--color-primary-light) transition-colors"
                >
                  Fabritornillos@Fabritornillos.com - Corporativo
                </a>
              </li>

              <li>
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                  Horario
                </div>
                Lun–Vie: 8:00 am – 5:00 pm<br />
                Sáb: 8:30 am – 2:30 pm
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-(--color-primary)/25 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Fabritornillos SAS. Todos los derechos reservados.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="text-gray-600 hover:text-(--color-primary-light) transition-colors text-xs"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-(--color-primary-light) transition-colors text-xs"
            >
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}