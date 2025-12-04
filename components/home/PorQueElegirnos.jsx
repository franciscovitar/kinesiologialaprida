"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "../../Image/imagen-7.jpeg";
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

function PorQueElegirnos() {
  return (
    <section id="porque" className="nosotros2-container">
      <div className="fila">
        {/* TEXTO */}
        <motion.div {...fadeUp} className="texto">
          <h3 className="title">¿Por qué Elegirnos?</h3>
          <div className="line"></div>

          <p>
            En el Centro de Kinesiología Laprida priorizamos la calidad humana y
            la experiencia del paciente como eje central de nuestro trabajo.
            Combinamos <strong>tecnología actualizada</strong>, un equipo
            altamente capacitado y un acompañamiento cercano que garantiza
            tratamientos seguros, personalizados y efectivos.
          </p>

          <p>
            Nuestro enfoque está orientado a la mejora continua: evaluamos la
            evolución de cada persona mediante un sistema organizado de
            seguimiento y atención, asegurando así una experiencia confiable,
            profesional y de <strong>alto nivel</strong>.
          </p>

          <p>
            Ofrecemos programas especializados en rehabilitación traumatológica,
            entrenamiento funcional, manejo del dolor y rehabilitación
            neurológica — incluyendo ACV, TEC, Parkinson, ELA, Esclerosis
            Múltiple y otras condiciones— brindando contención y{" "}
            <strong>resultados reales</strong> en cada etapa del proceso.
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

export default PorQueElegirnos;
