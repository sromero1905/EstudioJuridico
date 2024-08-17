// components/hero.tsx
"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

export function Hero() {
  return (
    <div className="relative w-full h-screen max-w-4xl mx-auto pb-20 flex items-center justify-center">
      {/* Contenedor de Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-lg"
        src="/path-to-your-video.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay para oscurecer el video si es necesario */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Contenido del Hero */}
      <div className="relative z-10 text-center">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var">
          Hero waves are cool
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var">
          Leverage the power of canvas to create a beautiful hero section
        </p>
        <div className="flex justify-center mt-20">
          <FaChevronDown className="text-white text-3xl animate-bounce" />
        </div>
      </div>
    </div>
  );
}
