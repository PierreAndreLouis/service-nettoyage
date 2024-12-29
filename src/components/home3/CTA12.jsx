// import { Button } from 'flowbite-react'
import React from "react";
import { Link } from "react-router-dom";

export default function CTA12() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/close-up-group-different-colored-bottles-with-smoke-generative-ai_901275-40099.jpg?w=996)",
        backgroundPosition: "right",
      }}
      className="object-right   relative py-72 bg-fixed bg-cover bg-center"
    >
      <div
        className="absolute inset-0 z-[2]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.80)" }}
      ></div>

      <div
        className="flex flex-col px-2 md:px-10 
           justify-center items-center absolute inset-0 z-[3]"
      >
        <p className="text-center text-gray-300 mt-10 text-md leading-6 lg:text-md max-w-3xl">
          Nous nettoyons, vous vous détendez{" "}
        </p>
        <h1 className="text-white text-3xl  sm:text-3xl text-center font-bold lg:text-4xl max-w-4xl leading-10">
          Etes vous a la recherche de
          <span className="text-yellow-400"> service de nettoyage </span> pour
          une activite?
        </h1>
        <p className="text-center text-gray-300 mt-10 text-md leading-6 lg:text-md max-w-3xl">
          nous offrons des solutions sur mesure qui répondent à vos besoins
          spécifiques, avec un soutien constant pour garantir votre succès. Nous
          faisons en sorte que chaque stratégie soit efficace et adaptée à vos
          objectifs.
        </p>
        <Link
          to="/reservation"
          className="border border-yellow-400 text-yellow-400 rounded-md mt-12 p-3 px-8 font-bold text-md"
        >
          Contactez nous
        </Link>
      </div>
    </div>
  );
}
