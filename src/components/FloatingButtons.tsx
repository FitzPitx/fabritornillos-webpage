'use client';

import { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function FloatingButtons() {
  const [showWhatsappTip, setShowWhatsappTip] = useState(false);
  const [showInstagramTip, setShowInstagramTip] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-4">

      {/* Instagram button */}
      <div className="relative flex items-center gap-3">
        {/* Tooltip */}
        {showInstagramTip && (
          <div className="hidden md:block absolute right-[68px] bg-slate-800 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-xl border border-white/10 whitespace-nowrap">
            Síguenos en Instagram
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-slate-800 rotate-45 border-r border-t border-white/10" />
          </div>
        )}
        <a
          href="https://instagram.com/fabritornillos"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowInstagramTip(true)}
          onMouseLeave={() => setShowInstagramTip(false)}
          aria-label="Síguenos en Instagram"
          className="w-[50px] h-[50px] md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
          style={{
            background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
          }}
        >
          <FaInstagram size={22} className="text-white" />
        </a>
      </div>

      {/* WhatsApp button */}
      <div className="relative flex items-center gap-3">
        {/* Tooltip */}
        {showWhatsappTip && (
          <div className="hidden md:block absolute right-[68px] bg-slate-800 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-xl border border-white/10 whitespace-nowrap">
            Escríbenos por WhatsApp
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-slate-800 rotate-45 border-r border-t border-white/10" />
          </div>
        )}

        {/* Ping animation ring */}
        <span
          className="absolute inset-0 rounded-full bg-green-500/30 animate-ping-once"
          aria-hidden="true"
        />

        <a
          href="https://wa.me/573001234567?text=Hola%2C%20estoy%20interesado%20en%20sus%20productos"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowWhatsappTip(true)}
          onMouseLeave={() => setShowWhatsappTip(false)}
          aria-label="Escríbenos por WhatsApp"
          className="relative w-[50px] h-[50px] md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
          style={{ background: '#25D366' }}
        >
          <FaWhatsapp size={26} className="text-white" />
        </a>
      </div>

    </div>
  );
}
