"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImage from "../../Image/instalaciones.png";
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

function Instalaciones() {
  return (
    <section id="instalaciones" className="nosotros1-container">
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
          <h3 className="title">Nuestras Instalaciones</h3>
          <div className="line"></div>

          <p>
            Contamos con un edificio accesible y totalmente equipado, diseñado
            para ofrecer <strong>comodidad</strong>, <strong>seguridad</strong>{" "}
            y un entorno adecuado para cada tratamiento. Disponemos de
            recepción, salas de espera, consultorios, cinco boxes individuales,
            baños adaptados, ascensor y ambientes climatizados para una atención
            confortable y segura.
          </p>

          <p>
            Nuestro <strong>gimnasio terapéutico</strong> incluye máquinas
            multifuncionales, bicicletas computarizadas, cintas, poleas,
            elementos de propiocepción y equipamiento específico para
            rehabilitación física. La piscina climatizada está preparada para
            realizar hidroterapia con sistemas de apoyo y traslado
            reglamentarios.
          </p>

          <p>
            Además, el área de fisioterapia está equipada con{" "}
            <strong>tecnología de última generación</strong>:
            electroestimulación, TENS, magnetoterapia, ultrasonido, presoterapia
            y lámparas infrarrojas, permitiendo brindar tratamientos completos
            en un mismo espacio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Instalaciones;
