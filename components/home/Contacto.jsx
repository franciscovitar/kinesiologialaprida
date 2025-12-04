"use client";

import React from "react";
import { motion } from "framer-motion";
import "../styles/_contacto.scss";
import Image from "next/image";
import Logo from "../../Image/logo.jpg";

const fadeUp = {
  viewport: { once: true },
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function Contacto() {
  return (
    <section id="contacto" className="contacto-container">
      <div className="contacto-card">
        {/* LOGO */}
        <motion.div {...fadeUp} className="logo-container">
          <Image
            alt="Centro de Kinesiología Laprida"
            className="logo"
            src={Logo}
          />
          <div className="line"></div>
        </motion.div>

        {/* INFO PRINCIPAL */}
        <motion.div {...fadeUp} className="info">
          <h3>Centro de Kinesiología Laprida</h3>

          <p>
            <strong>Dirección:</strong> Laprida 1633, Rosario, Santa Fe
          </p>
          {/* <p>
            <strong>Teléfono:</strong> 341 5403917
          </p> */}
          <p>
            <strong>Instagram:</strong> @kinesiologialaprida
          </p>
          <p>
            <strong>Facebook:</strong> Centro de Kinesiología Laprida
          </p>
        </motion.div>

        {/* ICONOS */}
        <motion.div {...fadeUp} className="iconos">
          <a
            href="https://www.instagram.com/kinesiologialaprida/"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/cklaprida/?locale=es_LA"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5493415403917"
            target="_blank"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacto;
