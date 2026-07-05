"use client";

import "../styles/_reseñas.scss";
import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const lineVariants = {
  viewport: { once: true },
  initial: { width: 0 },
  whileInView: { width: 100, transition: { duration: 2 } },
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const trabajos = [
  {
    nombre: "Marcela Strasberg",
    reseña:
      "Excelente equipo de trabajo. Acompañan con profesionalismo y calidez en todo el proceso de rehabilitación. No podría haber elegido un lugar mejor.",
    estrellas: 5,
  },
  {
    nombre: "Web Rosario",
    reseña: "Lo conozco hace más de 25 años. Siempre de excelencia.",
    estrellas: 5,
  },
  {
    nombre: "Ale Perez",
    reseña:
      "Lo recomiendo con los ojos cerrados. Excelentes profesionales y un trato humano increíble. Gracias Georgina por tu amabilidad.",
    estrellas: 5,
  },
  {
    nombre: "Susana Volcoff",
    reseña:
      "Es un placer cada sesión con las kinesiólogas. Salgo renovada. Profesionalismo y dedicación en cada paciente.",
    estrellas: 5,
  },
  {
    nombre: "Analia De Lorenzi",
    reseña:
      "Atención personalizada y de calidad humana. Hidroterapia de excelencia y gimnasio con supervisión profesional.",
    estrellas: 5,
  },
  {
    nombre: "Jimena Cavalieri",
    reseña:
      "Llevo a mi abuela hace tiempo y siempre vuelve feliz. Atención cálida y amorosa. Gracias!",
    estrellas: 5,
  },
  {
    nombre: "Karina Raparo",
    reseña: "Excelente atención, siempre amables y puntuales.",
    estrellas: 5,
  },
  {
    nombre: "Roberto Baño",
    reseña:
      "El mejor centro de rehabilitación de la ciudad. Profesionales altamente calificados y una gran calidez humana.",
    estrellas: 5,
  },
  {
    nombre: "Jere Obelar",
    reseña: "Súper recomendable. Excelentes profesionales.",
    estrellas: 5,
  },
  {
    nombre: "Ani Sacardo",
    reseña:
      "La rehabilitación en la pileta fue excelente. Volvería por la calidad de las kinesiólogas.",
    estrellas: 5,
  },
  {
    nombre: "Viviana Schenone",
    reseña:
      "Excelente atención. La pileta es impecable y los profesionales también.",
    estrellas: 5,
  },
  {
    nombre: "Romy Gonzalez",
    reseña: "Muy buena atención.",
    estrellas: 5,
  },
  {
    nombre: "Maria Laura Moreno",
    reseña: "Excelente atención. Muy recomendable.",
    estrellas: 5,
  },
  {
    nombre: "Sebastián Bertazzo",
    reseña: "Excelente atención y puntualidad.",
    estrellas: 5,
  },
  {
    nombre: "Agustina Llanes",
    reseña: "Excelente experiencia en el centro.",
    estrellas: 5,
  },
  {
    nombre: "Lorena Pierani",
    reseña: "Excelente atención.",
    estrellas: 5,
  },

  {
    nombre: "Eliana Noemi Benitez",
    reseña: "",
    estrellas: 4,
  },
];

function renderStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<i key={i} className="bi bi-star-fill"></i>);
  }
  return stars;
}

function Reseñas() {
  return (
    <div id="opiniones" className="contenedor-principal-Trabajos">
      <div className="titulo">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="m-0"
        >
          Experiencias de clientes
        </motion.h2>
        <motion.div
          {...lineVariants}
          className="line m-auto mt-2 mb-5"
        ></motion.div>
        {/* <motion.h3
          className="description"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          Experiencias de clientes
        </motion.h3> */}
      </div>
      <Slider className="elSlider" {...settings}>
        {trabajos.map((trabajo, index) => (
          <div key={index} className="trabajos">
            <div className="trabajo">
              <div className="npmyest">
                <div className="estrellas">
                  {renderStars(trabajo.estrellas)}
                </div>
                <h4> &quot;{trabajo.nombre}&quot;</h4>
              </div>
              {trabajo.reseña ? <p>- &quot;{trabajo.reseña}&quot;</p> : ""}
            </div>
          </div>
        ))}
      </Slider>
      <a href="https://api.whatsapp.com/send/?phone=5493415403917">
        <motion.button className="boton">¡Contactanos!</motion.button>
      </a>
    </div>
  );
}

export default Reseñas;
