// components/hero.tsx
"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FaChevronDown } from "react-icons/fa";

export function Hero() {
  return (
    <WavyBackground
      className="max-w-4xl mx-auto pb-20" // Incrementa el padding-bottom para mover la flecha hacia abajo
      speed="fast"
      colors={["#f5f5f5", "#dcdcdc", "#a9a9a9", "#808080", "#696969"]} // Colores grises y blancos
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center ">
        Leverage the power of canvas to create a beautiful hero section
      </p>
      <div className="flex justify-center mt-20">
        {" "}
        {/* Aumenta el margen superior */}
        <FaChevronDown className="text-white text-3xl animate-bounce" />
      </div>
    </WavyBackground>
  );
}
