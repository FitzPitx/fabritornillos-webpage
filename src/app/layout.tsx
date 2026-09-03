import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "FabriTornillos SAS | Soluciones para la Industria Metalmecánica",
  description:
    "Fabricación y comercialización de tornillería, mangueras, soldadura y más — con calidad certificada y entrega a todo el país.",
  keywords:
    "tornillería, mangueras, soldadura, industria metalmecánica, ferretería industrial, Colombia",
  openGraph: {
    title: "FabriTornillos SAS",
    description: "Tu proveedor de confianza para la industria metalmecánica",
    locale: "es_CO",
    type: "website",
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
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
