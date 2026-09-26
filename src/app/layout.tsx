import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const SITE_URL = "https://fabritornillos.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "FabriTornillos SAS | Miscelánea Industrial en Bogotá",
    template: "%s | FabriTornillos SAS",
  },

  description:
    "Más de 30 años suministrando tornillería, mangueras industriales, soldadura, ferretería y fabricación de piezas especiales para la industria metalmecánica en Bogotá y toda Colombia. Cotiza por WhatsApp.",

  keywords: [
    "fabritornillos",
    "tornillería industrial Bogotá",
    "mangueras industriales Colombia",
    "ferretería industrial Bogotá",
    "fabricación de piezas especiales",
    "soldadura industrial",
    "miscelánea industrial",
    "proveedor industria metalmecánica Colombia",
    "mangueras flexometálicas S96",
    "tornillos y tuercas industriales",
    "Puente Aranda Bogotá",
  ],

  authors: [{ name: "FabriTornillos SAS", url: SITE_URL }],
  creator: "FabriTornillos SAS",
  publisher: "FabriTornillos SAS",
  category: "Industria y Manufactura",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "FabriTornillos SAS",
    title: "FabriTornillos SAS | Miscelánea Industrial en Bogotá",
    description:
      "Suministro, fabricación y comercialización de tornillería, mangueras, soldadura y ferretería industrial. Más de 30 años de experiencia atendiendo a la industria colombiana.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FabriTornillos SAS - Miscelánea Industrial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FabriTornillos SAS | Miscelánea Industrial en Bogotá",
    description:
      "Más de 30 años suministrando soluciones industriales: tornillería, mangueras, soldadura, ferretería y fabricación especial.",
    images: ["/img/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0B3D91",
      },
    ],
  },

  manifest: "/site.webmanifest",

  // Verificación alterna por meta tag (opcional).
  // Ya verificaste el dominio por registro TXT en el DNS, así que este campo
  // es redundante y puedes dejarlo comentado. Si en el futuro necesitas
  // verificar por HTML/meta tag en lugar de DNS, descomenta esta línea:
  // verification: {
  //   google: "9rr7nqbig-BbcvI2ERdivVnfZUdG3gKihM1K1fSN-Gw",
  // },

  other: {
    "geo.region": "CO-DC",
    "geo.placename": "Bogotá, Cundinamarca",
    "geo.position": "4.614334;-74.103897",
    ICBM: "4.614334, -74.103897",
  },
};

// Datos estructurados (JSON-LD) — ayudan a Google a mostrar tu negocio
// correctamente en resultados de búsqueda, Maps y el panel de conocimiento.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: "FabriTornillos SAS",
  alternateName: "FabriTornillos - Miscelánea Industrial",
  description:
    "Empresa con más de 30 años de experiencia en suministro industrial, fabricación de piezas especiales y comercialización de tornillería, mangueras, soldadura y ferretería para la industria metalmecánica.",
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo-fabritornillos-jukebox-bg-removed.png`,
  image: `${SITE_URL}/img/og-image.jpg`,
  telephone: ["+57 315 336 5823", "+57 314 282 0573"],
  email: "ventas@fabritornillos.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cl. 7 #37 a 65",
    addressLocality: "Bogotá",
    addressRegion: "Cundinamarca",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 4.614334,
    longitude: -74.103897,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "14:30",
    },
  ],
  sameAs: [
    "https://www.instagram.com/fabritornillos",
    "https://www.facebook.com/Fabritornillos",
    "https://www.linkedin.com/company/fabritornillos",
  ],
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = window.localStorage.getItem('fabritornillos-theme');
    var theme = stored === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="light">
      <head>
        <meta name="apple-mobile-web-app-title" content="Fabritornillos" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} antialiased bg-(--bg-page) text-(--text-heading)`}
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        {children}
      </body>
    </html>
  );
}