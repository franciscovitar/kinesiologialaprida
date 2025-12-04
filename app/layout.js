import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Tipografía principal */
const quicksand = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/* -------------------- */
/*   METADATOS NUEVOS   */
/* -------------------- */

export const metadata = {
  title: "Centro de Kinesiología Laprida | Rosario, Santa Fe",
  description:
    "Centro de Kinesiología Laprida en Rosario. Rehabilitación integral, hidroterapia, gimnasio terapéutico, fisioterapia, Pilates Reformer y tratamientos personalizados con profesionales matriculados.",
  keywords: [
    "Kinesiología Rosario",
    "Centro de Kinesiología Laprida",
    "Hidroterapia Rosario",
    "Discapacidad Rosario",
    "Rehabilitación Rosario",
    "Gimnasio terapéutico",
    "Fisioterapia  Rosario",
  ],
  authors: [{ name: "Centro de Kinesiología Laprida" }],
  robots: "index, follow",

  openGraph: {
    title:
      "Centro de Kinesiología Laprida | Rehabilitación Integral en Rosario",
    description:
      "Profesionales en Kinesiología y Fisiatría con más de 15 años de experiencia. Hidroterapia, fisioterapia, gimnasio terapéutico y programas de rehabilitación especializados.",
    url: "https://kinesiologialaprida.com",
    siteName: "Centro de Kinesiología Laprida",
    locale: "es_AR",
    type: "website",
  },
};

/* ------------------------ */
/*   LAYOUT PRINCIPAL APP   */
/* ------------------------ */

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.kinesiologialaprida.com/" />
        <meta
          name="google-site-verification"
          content="Zq2ki0kMgHXfymdjmC4kD53_7AzDOagHGag8R7CdqIU"
        />
      </head>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
