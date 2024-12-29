import React from "react";
import { TiInputChecked } from "react-icons/ti";

export default function About() {
  return (
    <div className=" px-4 py-20 bg-slate-100 dark:bg-gray-900">
      <div className=" flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto ">
        <div className=" max-w-xl mx-auto borer ">
          <img
            className="w-full h-full object-cover"
            src="https://www.meticulositycleaning.com/wp-content/uploads/2024/08/happy-woman-cleaning-house-housekeeping-and-clean-2023-07-14-06-42-00-utc-1536x1024.jpg"
            alt=""
          />
        </div>
        <div className=" lg:pt-0 pt-4 ">
          <h3 className="font-semibold text-yellow-500 text-lg mt-0 pt-0">
            À propos de nous
          </h3>
          <h1 className="text-slate-700 text-3xl font-bold dark:text-gray-300">
            Là où la propreté est à côté de la piété
          </h1>
          <p className="text-gray-600 mt-3 dark:text-gray-400">
            Le client est très important, le client sera suivi par le client.
            C'est un élément de stress, mais un élément de temps. Enée a mis la
            masse de vie sur mon doux levain. Le test de grossesse le plus
            important.
          </p>
          <div className="mt-6 grid gap-4  md:grid-cols-2 md:gap-5">
            <div className="flex gap-3 ">
              <div className="min-w-10 h-10 bg-yellow-400 rounded-full"> </div>
              <div>
                <h4 className="font-semibold dark:text-gray-200 text-slate-700">
                  Prêt à être appelé 24h/24 et 7j/7
                </h4>
                <p className="dark:text-gray-400">
                  {" "}
                  Le client est très content.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="min-w-10 h-10 bg-yellow-400 rounded-full"> </div>
              <div>
                <h4 className="font-semibold dark:text-gray-200 text-slate-700">
                  garantie de satisfaction au travail
                </h4>
                <p className="dark:text-gray-400"> Merci beaucoup.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="bg-yellow-500 text-white p-4 text-xl font-semibold rounded-xl">
              <h3>
                Appelez-nous à tout moment comme vous le souhaitez{" "}
                <span className="text-slate-800 font-bold inline-block">
                  {" "}
                  +123-456-7890
                </span>{" "}
              </h3>
            </div>
            <div className="mt-6 text-gray-600 dark:text-gray-300 ">
              <p className="mb-3">
                Le client est très important, le client sera suivi par le
                client.{" "}
              </p>
              <ul>
                <li className="flex gap-2 items-center">
                  <TiInputChecked className="text-xl text-slate-800 dark:text-slate-500" />
                  Massage depuis le lit
                </li>
                <li className="flex gap-2 items-center">
                  <TiInputChecked className="text-xl text-slate-800 dark:text-slate-500" />
                  Je suis enceinte
                </li>
                <li className="flex gap-2 items-center">
                  <TiInputChecked className="text-xl text-slate-800 dark:text-slate-500" />
                  Maquillage pour enfants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
