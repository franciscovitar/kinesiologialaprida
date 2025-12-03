"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "../../Image/pileta2.png";
import "../styles/_seccion2.scss";

const fadeUp = {
  viewport: { once: true },
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Seccion2() {
  return (
    <section id="nosotros" className="nosotros1-container">
      <div className="fila">
        {/* TEXTO */}
        <motion.div {...fadeUp} className="texto">
          <h3 className="title">¿Quiénes Somos?</h3>
          <div className="line"></div>

          <p>
            El <strong>Centro de Kinesiología Laprida</strong> nació con el
            propósito de mejorar la calidad de vida de las personas mediante un
            acompañamiento profesional, humano y centrado en el bienestar
            integral.
          </p>
          <p>
            Trabajamos con un <strong>equipo interdisciplinario</strong>{" "}
            especializado en Kinesiología, Hidroterapia, Fonoaudiología,
            Psicología y otras áreas de la salud, brindando una{" "}
            <strong>rehabilitación integral</strong> con compromiso, dedicación
            y calidez.
          </p>

          <p>
            Nuestro enfoque combina <strong>confianza</strong>,{" "}
            <strong>contención</strong> y <strong>profesionalismo</strong>,
            acompañando el fortalecimiento físico y el equilibrio emocional de
            cada paciente.
          </p>

          <p>
            Contamos con un <strong>espacio físico único en Rosario</strong>,
            diseñado para ofrecer comodidad, accesibilidad y tratamientos de
            alto nivel para toda la región.
          </p>
        </motion.div>

        {/* IMAGEN */}
        <motion.div className="imagen" {...fadeUp}>
          <Image
            alt="Centro de Kinesiología Laprida"
            src={ProfileImage}
            className="img"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Seccion2;
