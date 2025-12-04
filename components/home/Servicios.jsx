"use client";

import "../styles/_servicios.scss";
import React from "react";
import { motion } from "framer-motion";
import {
  FaWater,
  FaWalking,
  FaWeight,
  FaDumbbell,
  FaLeaf,
  FaHandsHelping,
  FaBone,
  FaHeartbeat,
} from "react-icons/fa";

function Servicios() {
  return (
    <div className="contenedor-principal-PE" id="servicios">
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
      >
        Especialidades
      </motion.h2>
      <div className="line"></div>

      <motion.p
        className="description"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        Desde el 2010 acompañando a nuestros pacientes con técnicas de
        rehabilitación especializadas. Trabajamos con todas las obras sociales
        para pacientes con certificado único de discapacidad.
      </motion.p>

      <div className="contenedor-especialidades">
        {/* 1 */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaWater className="material-symbols-outlined" size={60} />
          <h3>Hidroterapia</h3>
          <p>
            Mejora movilidad y alivia dolores mediante ejercicios terapéuticos
            realizados en el agua.
          </p>
        </motion.div>

        {/* 2 — CAMBIADO */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaWalking className="material-symbols-outlined" size={60} />
          <h3>Rehabilitación neurológica</h3>
          <p>
            Tratamiento integral para recuperar funciones motoras tras ACV, TEC
            u otras afecciones neurológicas.
          </p>
        </motion.div>

        {/* 3 */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaWeight className="material-symbols-outlined" size={60} />
          <h3>Tratamiento de obesidad</h3>
          <p>
            Ejercicios y acompañamiento funcional para mejorar fuerza, salud y
            capacidad física.
          </p>
        </motion.div>

        {/* 4 */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaDumbbell className="material-symbols-outlined" size={60} />
          <h3>Gimnasio terapéutico</h3>
          <p>
            Entrenamiento guiado para recuperar movilidad, fuerza y
            funcionalidad de manera progresiva.
          </p>
        </motion.div>

        {/* 5 — CAMBIADO */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaLeaf className="material-symbols-outlined" size={60} />
          <h3>Terapia ocupacional</h3>
          <p>
            Intervenciones para mejorar autonomía, habilidades funcionales y
            actividades de la vida diaria.
          </p>
        </motion.div>

        {/* 6 */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaHandsHelping className="material-symbols-outlined" size={60} />
          <h3>Fisioterapia / RPG</h3>
          <p>
            Corrección postural y recuperación global mediante estiramientos
            activos y técnicas específicas.
          </p>
        </motion.div>

        {/* 7 — CAMBIADO */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaBone className="material-symbols-outlined" size={60} />
          <h3>Rehabilitación traumatológica</h3>
          <p>
            Recuperación especializada después de fracturas, cirugías o
            traumatismos osteoarticulares.
          </p>
        </motion.div>

        {/* 8 */}
        <motion.div
          className="especialidad"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <FaHeartbeat className="material-symbols-outlined" size={60} />
          <h3>Rehabilitación cardiovascular</h3>
          <p>
            Ejercicios controlados para mejorar rendimiento cardíaco y capacidad
            aeróbica.
          </p>
        </motion.div>
      </div>
      <a href="/galeria">Ver galería de fotos</a>
    </div>
  );
}

export default Servicios;
