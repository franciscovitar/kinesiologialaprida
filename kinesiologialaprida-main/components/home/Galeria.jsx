"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../styles/_galeria.scss";

import Galeria01 from "../../Image/galeria-01.jpg";
import Galeria02 from "../../Image/galeria-02.jpg";
import Galeria03 from "../../Image/galeria-03.jpg";
import Galeria04 from "../../Image/galeria-04.jpg";
import Galeria05 from "../../Image/galeria-05.jpg";
import Galeria06 from "../../Image/galeria-06.jpg";
import Galeria07 from "../../Image/galeria-07.jpg";
import Galeria08 from "../../Image/galeria-08.jpg";
import Galeria09 from "../../Image/galeria-09.jpg";
import Galeria10 from "../../Image/galeria-10.jpg";
import Galeria11 from "../../Image/galeria-11.jpg";
import Galeria12 from "../../Image/galeria-12.jpg";
import Galeria13 from "../../Image/galeria-13.jpg";
import Galeria14 from "../../Image/galeria-14.jpg";
import Galeria15 from "../../Image/galeria-15.jpg";
import Galeria16 from "../../Image/galeria-16.jpg";
import Galeria17 from "../../Image/galeria-17.jpg";
import Galeria18 from "../../Image/galeria-18.jpg";
import Galeria19 from "../../Image/galeria-19.jpg";
import Galeria20 from "../../Image/galeria-20.jpg";
import Galeria21 from "../../Image/galeria-21.jpg";

const imagenes = [
  { src: Galeria01, alt: "Instalaciones del centro - imagen 1" },
  { src: Galeria02, alt: "Instalaciones del centro - imagen 2" },
  { src: Galeria03, alt: "Instalaciones del centro - imagen 3" },
  { src: Galeria04, alt: "Instalaciones del centro - imagen 4" },
  { src: Galeria05, alt: "Instalaciones del centro - imagen 5" },
  { src: Galeria06, alt: "Instalaciones del centro - imagen 6" },
  { src: Galeria07, alt: "Instalaciones del centro - imagen 7" },
  { src: Galeria08, alt: "Instalaciones del centro - imagen 8" },
  { src: Galeria09, alt: "Instalaciones del centro - imagen 9" },
  { src: Galeria10, alt: "Instalaciones del centro - imagen 10" },
  { src: Galeria11, alt: "Instalaciones del centro - imagen 11" },
  { src: Galeria12, alt: "Instalaciones del centro - imagen 12" },
  { src: Galeria13, alt: "Instalaciones del centro - imagen 13" },
  { src: Galeria14, alt: "Instalaciones del centro - imagen 14" },
  { src: Galeria15, alt: "Instalaciones del centro - imagen 15" },
  { src: Galeria16, alt: "Instalaciones del centro - imagen 16" },
  { src: Galeria17, alt: "Instalaciones del centro - imagen 17" },
  { src: Galeria18, alt: "Instalaciones del centro - imagen 18" },
  { src: Galeria19, alt: "Instalaciones del centro - imagen 19" },
  { src: Galeria20, alt: "Instalaciones del centro - imagen 20" },
  { src: Galeria21, alt: "Instalaciones del centro - imagen 21" },
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
