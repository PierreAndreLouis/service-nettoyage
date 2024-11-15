import React, { useContext, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidLocationPlus } from "react-icons/bi";
import { RiShutDownLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { TbLock } from "react-icons/tb";
import { TbLockOpen } from "react-icons/tb";

function Liste_options({}) {
  const {
    vehicleData,
    vehicleDetails,
    currentVehicule,
    isLoading,
    fetchVehicleDetails,
    showListeOption,
    setShowListOption,
    setLoadingHistoriqueFilter,
    fetchHistoriqueVehicleDetails,
    firstCallHistoriqueData,
    envoyerSMS,
    smsError,
    setSmsError,
    setCurrentVehicule,
    donneeFusionneeForRapport,
    setSelectedVehicle,
    setVehiclueHistoriqueDetails
  } = useContext(DataContext); // fetchVehicleDetails importée du contexte

  const [showAccessCode, setAccessCode] = useState(false);
  <h1 className="px-3">Toyota Land Cruser Prada</h1>;
  const [showControlePupup, setshowControlePupup] = useState(false);

  const handleClick = () => {
    const deviceID = currentVehicule.deviceID;

    // Recherche du véhicule correspondant dans la liste
    const foundVehicle = donneeFusionneeForRapport.find(
      (v) => v.deviceID === deviceID
    );

    if (foundVehicle) {
      setCurrentVehicule(foundVehicle); // Définit le véhicule actuel
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",foundVehicle.vehiculeDetails)
      setVehiclueHistoriqueDetails(foundVehicle.vehiculeDetails);
      setSelectedVehicle(foundVehicle.deviceID); // Met à jour la sélection
      setShowListOption(false); // Affiche la liste d'options si nécessaire
      console.log("Véhicule sélectionné", foundVehicle);
    } else {
      console.error("Véhicule introuvable avec le deviceID :", deviceID);
    }

    // console.log("CurrentVehicule", currentVehicule);
    // console.log("donneeFusionneeForRapport", donneeFusionneeForRapport);
  };

  //   // exemple de donneer dans la base de donnee
  //   // const TimeFrom = "2011-01-07 10:29:34";
  //   // const TimeTo = "2024-01-07 10:29:34";
  //   // Définir TimeTo et TimeFrom en fonction de la date actuelle

  // const firstCallHistoriqueData = () => {
  //   setShowListOption(false);

  //   const now = new Date();
  //   const TimeTo = `${now.getFullYear()}-${(now.getMonth() + 1)
  //     .toString()
  //     .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")} ${now
  //     .getHours()
  //     .toString()
  //     .padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}:${now
  //     .getSeconds()
  //     .toString()
  //     .padStart(2, "0")}`;

  //   const startOfDay = new Date();
  //   startOfDay.setHours(0, 0, 0, 0);

  //   const TimeFrom = `${startOfDay.getFullYear()}-${(startOfDay.getMonth() + 1)
  //     .toString()
  //     .padStart(2, "0")}-${startOfDay
  //     .getDate()
  //     .toString()
  //     .padStart(2, "0")} 00:00:00`;

  //     fetchHistoriqueVehicleDetails(currentVehicule.deviceID, TimeFrom, TimeTo);

  // };

  const test = () => {
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", vehicleDetails);
  };
  return (
    <div className="bg-black/50 fixed z-[111111] inset-0 flex justify-center items-center">
      {/*  */}
      {showControlePupup && (
        <div className="fixed flex justify-center items-center z-[1] inset-0 bg-black/50">
          <div className="relative w-[80vw] max-w-[40rem] bg-white overflow-hidden rounded-lg">
            <IoMdClose
              onClick={() => {
                setshowControlePupup(false);
              }}
              className="absolute cursor-pointer top-3 right-3 text-2xl text-red-500"
            />
            <div className="h-20 bg-orange-100 shadow-md text-gray-800 text-xl font-semibold text-center flex flex-col justify-center items-center px-2">
              <h1 className="px-3">{currentVehicule?.description}</h1>
            </div>
            <div
              //   onClick={() => {setshowControlePupup(false)}}
              className="p-4  flex flex-col gap-4 py-6 pb-10"
            >
              {smsError && (
                <p className="flex items-start gap-3 bg-red-100 text-red-700 text-lg px-4 py-1 rounded-md text-center ">
                  <span>
                    <MdErrorOutline className="text-2xl mt-0.5" />
                  </span>
                  {smsError}
                </p>
              )}

              <div
                onClick={() => {
                  envoyerSMS("1234567890", "Bonjour, ceci est un test");
                }}
                className="shadow-md cursor-pointer hover:bg-orange-100 bg-orange-50 p-2 rounded-md flex items-center gap-4"
              >
                <TbLock className="text-[1.82rem] text-orange-400 " />
                <h2 className="font-semibold text-orange-900">
                  Bloquer le vehicule
                </h2>
              </div>
              {/* <div className="shadow-md cursor-pointer hover:bg-orange-100 bg-orange-50 p-2 rounded-md flex items-center gap-4">
              <img
                className="w-[1.92rem]"
                src="/img/cars/parcoure.png"
                alt=""
              />{" "}
              <h2 className="font-semibold text-orange-900">
                Trajet du vehicule
              </h2>
            </div> */}
              <div
                onClick={() => {
                  envoyerSMS(
                    currentVehicule.simPhoneNumber,
                    "Bonjour, ceci est un test"
                  );
                }}
                className="shadow-md cursor-pointer hover:bg-orange-100 bg-orange-50 p-2 rounded-md flex items-center gap-4"
              >
                <TbLockOpen className="text-[2rem] min-w-8 text-orange-400 " />
                <h2 className="font-semibold text-orange-900">
                  Debloquer le vehicule
                </h2>
              </div>

              {/* <div className="shadow-md cursor-pointer hover:bg-orange-100 bg-orange-50 p-2 rounded-md flex items-center gap-4">
              <img
                className="w-[1.92rem]"
                src="/img/cars/orange_group_position.png"
                alt=""
              />{" "}
              <h2 className="font-semibold text-orange-900">
                Tous les vehicules en deplacement
              </h2>
            </div> */}
            </div>
          </div>
        </div>
      )}
      {/*  */}
      <div className="border min-w-[90vw] sm:min-w-[30rem] bg-white mx-4 rounded-xl overflow-hidden">
        <div className="p-4 py-6 pt-10 bg-orange-200/50 relative">
          <h2 className="text-xl text-center font-semibold">
            {currentVehicule?.description}
          </h2>
          <IoMdClose
            onClick={() => {
              setShowListOption(false);
            }}
            className="absolute cursor-pointer top-3 right-3 text-2xl text-red-500"
          />
        </div>

        <div className="grid text-gray-600 grid-cols-2 gap-4  p-4 py-8">
          <Link
            onClick={() => {
              setShowListOption(false);
            }}
            to="/Groupe_vehicule_location"
            className=" col-span-2--- rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <FaLocationDot className="text-4xl" />
            {/* <BiSolidLocationPlus className="text-4xl" /> */}
            <h3>Localisation</h3>
          </Link>

          <Link
            to="/modifier_vehicule"
            onClick={() => {
              setShowListOption(false);
            }}
            className=" row-start-2--- rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <FaEdit className="text-3xl" />
            <h3>Modifier</h3>
          </Link>

          <div
            onClick={() => {
              setshowControlePupup(true);
            }}
            className=" row-start-2---- rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <RiShutDownLine className="text-3xl" />
            <h3>Controle</h3>
          </div>

          <div
            onClick={() => {
              setAccessCode(true);
            }}
            className=" row-start-2--- rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <FaMicrophone className="text-3xl" />
            <h3>Ecouter</h3>
          </div>

          <Link
            onClick={() => {
              {
                handleClick();
              }
            }}
            to="/voiture_historique"
            className=" row-start-3---- rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <IoStatsChartSharp className="text-3xl" />
            <h3>Historique</h3>
          </Link>

          <Link
            onClick={() => {
              setShowListOption(false);
            }}
            to="/voiture_details"
            className=" row-start-3--- rounded-md shadow-md hover:text-orange-600 cursor-pointer p-3 flex flex-col items-center"
          >
            <FaInfoCircle className="text-3xl" />
            <h3>Informations</h3>
          </Link>
        </div>
      </div>
      {/* ---------------------------------------------------- */}

      {showAccessCode && (
        <div className="fixed z-10 flex justify-center items-center inset-0 bg-black/50">
          <div className="bg-white max-w-[25rem] p-6 rounded-xl w-[80vw]">
            <div>
              <label
                htmlFor="username"
                className="block text-lg  leading-6 text-gray-500 mb-3"
              >
                Veuillez entrer votre code d'acces
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="code d'acces"
                  required
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 --------focus:ring-2 --------focus:ring-inset --------focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-5">
              <button
                onClick={() => {
                  setAccessCode(false);
                }}
                className="py-1 px-5 text-orange-500 rounded-lg font-semibold border border-orange-500"
              >
                Annuler
              </button>
              <button className="py-1 px-5 bg-orange-500 rounded-lg text-white">
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Liste_options;
