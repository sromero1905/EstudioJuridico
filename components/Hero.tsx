"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmooth"; // Asegúrate de que la ruta sea correcta

export function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Contenedor de Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-auto h-full min-w-full object-cover filter blur-sm transform -translate-x-1/2 -translate-y-1/2"
          src="/buildings.mp4" // Reemplaza con la ruta real de tu video
          autoPlay
          loop
          muted
        ></video>
      </div>

      {/* Overlay para oscurecer el video si es necesario */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center max-w-4xl mx-auto pb-20">
        <TypewriterEffectSmoothDemo />
        <div className="flex justify-center mt-20">
          <FaChevronDown className="text-white text-3xl animate-bounce" />
        </div>
      </div>
    </div>
  );
}
