"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../styles/_galeria.scss";

import Imagen1 from "../../Image/imagen-1.jpeg";
import Imagen2 from "../../Image/imagen-2.jpeg";
import Imagen3 from "../../Image/imagen-3.jpeg";
import Imagen4 from "../../Image/imagen-4.jpeg";
import Imagen5 from "../../Image/imagen-5.jpeg";
import Imagen6 from "../../Image/imagen-6.jpeg";
import Imagen7 from "../../Image/imagen-7.jpeg";
import Imagen8 from "../../Image/imagen-8.jpeg";
import Imagen9 from "../../Image/imagen-9.jpeg";
import Imagen10 from "../../Image/imagen-10.jpeg";
import Imagen11 from "../../Image/imagen-11.jpeg";
import Imagen12 from "../../Image/imagen-12.jpeg";
import Imagen13 from "../../Image/imagen-13.jpeg";
import Imagen14 from "../../Image/imagen-14.jpeg";
import Imagen15 from "../../Image/imagen-15.jpeg";
import Imagen16 from "../../Image/imagen-16.jpeg";
import Imagen17 from "../../Image/imagen-17.jpeg";
import Imagen18 from "../../Image/imagen-18.jpeg";
import Imagen19 from "../../Image/imagen-19.jpeg";
import Imagen20 from "../../Image/imagen-20.jpeg";

const imagenes = [
  { src: Imagen1, alt: "Instalaciones del centro - imagen 1" },
  { src: Imagen2, alt: "Instalaciones del centro - imagen 2" },
  { src: Imagen3, alt: "Instalaciones del centro - imagen 3" },
  { src: Imagen4, alt: "Instalaciones del centro - imagen 4" },
  { src: Imagen5, alt: "Instalaciones del centro - imagen 5" },
  { src: Imagen6, alt: "Instalaciones del centro - imagen 6" },
  { src: Imagen7, alt: "Instalaciones del centro - imagen 7" },
  { src: Imagen8, alt: "Instalaciones del centro - imagen 8" },
  { src: Imagen9, alt: "Instalaciones del centro - imagen 9" },
  { src: Imagen10, alt: "Instalaciones del centro - imagen 10" },
  { src: Imagen11, alt: "Instalaciones del centro - imagen 11" },
  { src: Imagen12, alt: "Instalaciones del centro - imagen 12" },
  { src: Imagen13, alt: "Instalaciones del centro - imagen 13" },
  { src: Imagen14, alt: "Instalaciones del centro - imagen 14" },
  { src: Imagen15, alt: "Instalaciones del centro - imagen 15" },
  { src: Imagen16, alt: "Instalaciones del centro - imagen 16" },
  { src: Imagen17, alt: "Instalaciones del centro - imagen 17" },
  { src: Imagen18, alt: "Instalaciones del centro - imagen 18" },
  { src: Imagen19, alt: "Instalaciones del centro - imagen 19" },
  { src: Imagen20, alt: "Instalaciones del centro - imagen 20" },
];

function Galeria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const cerrar = () => setImagenSeleccionada(null);

  // cerrar con ESC
  useEffect(() => {
    if (!imagenSeleccionada) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") cerrar();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imagenSeleccionada]);

  return (
    <section className="galeria">
      <div className="galeria__container">
        <header className="galeria__header">
          <h2 className="galeria__title">Conocé nuestras instalaciones</h2>
          <p className="galeria__subtitle">
            Pileta climatizada, gimnasio terapéutico, consultorios privados,
            salas de espera cómodas y espacios diseñados para tu rehabilitación.
          </p>
        </header>

        <div className="galeria__grid">
          {imagenes.map((img, index) => (
            <motion.article
              key={index}
              className="galeria__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              viewport={{ once: true }}
              onClick={() => setImagenSeleccionada(img)}
            >
              <div className="galeria__image-wrapper">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="galeria__image"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* MODAL / LIGHTBOX */}
      <AnimatePresence>
        {imagenSeleccionada && (
          <motion.div
            className="galeria__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrar}
          >
            <motion.div
              className="galeria__lightbox-content"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="galeria__lightbox-close"
                onClick={cerrar}
                aria-label="Cerrar imagen ampliada"
              >
                ×
              </button>

              <div className="galeria__lightbox-image-wrapper">
                <Image
                  src={imagenSeleccionada.src}
                  alt={imagenSeleccionada.alt}
                  fill
                  className="galeria__lightbox-image"
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Galeria;
