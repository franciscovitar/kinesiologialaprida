"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "../../Image/proposito.png";
import "../styles/_proposito.scss";

const fadeUp = {
  viewport: { once: true },
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Proposito() {
  return (
    <section id="proposito" className="nosotros2-container">
      <div className="fila">
        {/* IMAGEN */}
        <motion.div className="imagen" {...fadeUp}>
          <Image
            alt="Centro de Kinesiología Laprida"
            src={ProfileImage}
            className="img"
          />
        </motion.div>
        {/* TEXTO */}
        <motion.div {...fadeUp} className="texto">
          <h3 className="title">Nuestro Propósito</h3>
          <div className="line"></div>

          <p>
            Brindar tratamientos de <strong>rehabilitación física</strong>,
            combinando gimnasio terapéutico e hidroterapia, para ayudar a cada
            paciente a recuperar sus capacidades y retomar sus actividades con
            la mayor independencia posible.
          </p>

          <p>
            Nuestro objetivo es ofrecer un servicio integral, profesional y
            humano, donde cada persona se sienta acompañada durante todo su
            proceso de recuperación.
          </p>

          <h3 className="title2">Nuestros Pilares</h3>

          <ul className="pilares">
            <li>Profesionalismo</li>
            <li>Compromiso</li>
            <li>Calidez</li>
            <li>Seguridad</li>
            <li>Monitoreo constante</li>
            <li>Seriedad</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Proposito;
