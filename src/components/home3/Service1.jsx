import React from "react";
import { FaLinkedin } from "react-icons/fa";

const features = [
  {
    id: 4,
    imgSrc:
      "https://kahimm.com/wp-content/uploads/2024/02/cleaning--1200x801.jpg",
    title: "Nettoyage régulier de la maison",
    description:
      "We offer a free trial service without login. We provide many payment options including pay-as-you-go and subscription.",
    link: "/pricing",
  },
  {
    id: 5,
    imgSrc:
      "https://www.winmar.ca/wp-content/uploads/2022/03/WINMAR-Deep_Cleaning-Secondary-2-600x450-1.jpg",
    title: "Services de nettoyage en profondeur",
    description:
      "We offer many templates covering areas such as writing, education, lifestyle, and creativity to inspire your potential.",
    link: "/templates",
  },
  {
    id: 6,
    imgSrc:
      "https://kpmnettoyage.com/wp-content/uploads/2023/05/hauteurs-nettoyage-vitres-2.png",
    title: "Nettoyage de vitres cristallines",
    description:
      "Our product is compatible with multiple platforms including Web, Chrome, Windows, and Mac. You can use MagickPen anywhere.",
    link: "/download",
  },
];

const Service1 = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-4 md:px-8 py-20">
      <div id="features" className="mx-auto max-w-6xl ">
        <p className="text-center text-base font-semibold leading-7 text-primary-500 dark:text-gray-100 ">
          Nos services
        </p>
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-yellow-500 dark:text-slate-100 md:text-4xl">
          Redonner vie à la fraîcheur
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {features.map((feature) => (
            <div className="bg-white shadow-lg dark:bg-slate-800 rounded-xl p-4">
              <div className="w-full h-52 bg-gray-600 rounded-md overflow-hidden object-cover">
                <img src={feature.imgSrc} alt={feature.title} />
              </div>
              <div>
                <h3 className="my-3 font-bold text-xl font-display  text-slate-900 dark:text-slate-200">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-md text-slate-600 leading-6 text-secondary-500  dark:text-gray-200">
                  {feature.description}
                </p>
                <p className="mt-3 text-yellow-500 font-semibold">Read More</p>
              </div>
            </div>
            // <li key={feature.id} className="rounded-xl bg-white dark:bg-gray-900 px-6 py-8 shadow-sm dark:shadow-gray-700">
            //   <div className='w-full h-'>
            //     <img src={feature.imgSrc} alt="" className="mx-auto h-10 w-10" />
            //   </div>

            //   <h3 className="my-3 font-bold text-xl font-display  text-slate-900 dark:text-slate-200">{feature.title}</h3>
            //   <p className="mt-1.5 text-sm leading-6 text-secondary-500 dark:text-secondary-400">
            //     {feature.description}
            //   </p>

            //   <a href={feature.link} className="group">
            //     <h3 className="my-3 font-display font-medium text-slate-900 dark:text-slate-200 group-hover:text-primary-500 dark:group-hover:text-primary-400">
            //       {feature.title}
            //     </h3>
            //   </a>

            // </li>
          ))}
        </div>
        {/* <div className='w-full flex justify-center'>
          <button className='mt-10 mx-auto border bg-yellow-100 border-yellow-800 font-semibold py-2 px-10 rounded-xl text-slate-700'>Plus der service</button>
        </div> */}
      </div>
    </div>
  );
};

export default Service1;
