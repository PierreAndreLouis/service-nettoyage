import React from 'react';
import { Link } from 'react-router-dom';



const Hero2 = () => {
  return (
    <div className=' dark:bg-gray-900 bg-[#042848] '>


      <div className="flex flex-col lg:flex-row min-h-screen   pt-16 max-w-7xl mx-auto">
        <div className="w-full  mb-10  flex justify-center">
          <div className="container  h-full sm:p-10 xl:p-0 ">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0   ">
              <div className="w-full max-w-3xl mx-auto">
                <h1 className=" text-5xl lg:text-start lg:text-6xl  sm:text-5xl  font-bold text-gray-100 text-center dark:text-gray-200">
                  Votre service de <span className="text-yellow-400 dark:text-yellow-400 ">nettoyage</span> sur mesure
                </h1>
                <p className="text-lg lg:text-start pt-6 text-center mb-10 text-gray-400 dark:text-gray-300">
                  Transforme ton espace avec notre service de nettoyage professionnel. Rapide, fiable et toujours impeccable, nous t’aidons à garder ton environnement propre et agréable. 
                </p>
                <div className='w-full  flex'>
                  <Link
                    to='/reservation'
                    className="bg-yellow-400 lg:mx-0 mx-auto  text-black dark:text-gray-900 text-lg font-medium px-4 py-2 rounded shadow">
                    Prendre Rendez-vous
                  </Link>
                </div>
              </div>
            </header>
          </div>
        </div>


        <div className='flex justify-center items-center  mx-auto max-w-2xl lg:max-w-screen-sm  xl:w-[77rem]'>
          <div className=' rounded-t-full overflow-hidden  h-full w-full '>
            <img
              src="https://www.meticulositycleaning.com/wp-content/uploads/2024/08/couple-of-housekeeping-staff-cleaning-house-house-2023-07-11-01-25-23-utc.png"
              alt="Leafs"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero2;
