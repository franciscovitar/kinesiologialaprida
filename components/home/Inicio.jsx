"use client";
import React from "react";
import { motion } from "framer-motion";
import "../styles/_inicios.scss";

const fadeUp = {
  viewport: { once: true },
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  viewport: { once: true },
  initial: { opacity: 0, scale: 0.9 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function HomeWelcome() {
  return (
    <section id="inicio" className="HomeWelcome-container">
      <div className="overlay" />

      <div className="content">
        <motion.h1 {...fadeUp} className="titulo-principal">
          Centro de Kinesiología y Rehabilitación Avanzada
        </motion.h1>

        {/* <motion.h3 {...fadeUp} className="subtitulo">
          {" "}
          Movimiento. Salud. Vida Plena.
        </motion.h3> */}

        <motion.p {...fadeUp} className="descripcion">
          Transformamos tu bienestar con tecnología de vanguardia, atención
          profesional y un enfoque centrado en tu recuperación integral.
        </motion.p>

        <div className="botones">
          <motion.a
            {...buttonVariants}
            href="https://api.whatsapp.com/send/?phone=5493415403917"
            target="_blank"
            className="btn-primary"
          >
            Agenda tu Consulta
          </motion.a>

          <motion.a
            {...buttonVariants}
            href="#nosotros"
            className="btn-secondary"
          >
            Conocé a nuestros Especialistas
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default HomeWelcome;
