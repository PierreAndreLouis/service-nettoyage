import React from "react";

const features = [
  {
    title: "Nettoyage complete",
    description:
      " plans de marketing éprouvés conçus pour vous aider à atteindre vos objectifs et surpasser vos concurrents.",
    img_icon:
      "https://github.com/LouisPierre-Andre/images/blob/main/Strategie%20Markeging/Strategie%20efficace-01.png?raw=true",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-rocket"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>
    ),
  },
  {
    title: "Support constant",
    description:
      "Une assistance continue qui garantit que toutes vos questions sont répondues et que vous êtes guidé tout au long du processus.",
    img_icon:
      "https://github.com/LouisPierre-Andre/images/blob/main/Strategie%20Markeging/support%20constant-01.png?raw=true",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bookmark-plus"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
        <line x1="12" x2="12" y1="7" y2="13"></line>
        <line x1="15" x2="9" y1="10" y2="10"></line>
      </svg>
    ),
  },
  {
    title: "Résultats mesurables",
    description:
      "Des rapports détaillés qui montrent vos progrès, expliquent ce qui fonctionne, et permettent d’ajuster les stratégies pour de meilleurs résultats.",
    img_icon:
      "https://github.com/LouisPierre-Andre/images/blob/main/Strategie%20Markeging/result%20mesurable-01.png?raw=true",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-video"
      >
        <path d="m22 8-6 4 6 4V8Z"></path>
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
      </svg>
    ),
  },
  // {
  //   title: 'Advanced Quiz Generation',
  //   description: 'Take your knowledge testing to the next level with advanced quiz generation, providing more customization options for your quizzes.',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="lucide lucide-file-question"
  //     >
  //       <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
  //       <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
  //       <path d="M12 17h.01"></path>
  //     </svg>
  //   ),
  // },
];

const Service4 = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-200 py-20">
      <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl text-yellow-500  dark:text-gray-300 font-semibold text-center sm:text-3xl">
            Ce que vous recevrez de nous
          </h2>
          <p className="max-w-3xl text-gray-600 dark:text-gray-400 mx-auto mt-4 text-md text-center">
            Découvrez les avantages que nous offrons pour maximiser vos
            résultats.{" "}
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-yellow-400 ">
                      {/* {feature.icon} */}
                      <img className="w-[70%] " src={feature.img_icon} alt="" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-700 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-slate-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <img
              width="600"
              // height="600"

              // src="https://www.dynamique-mag.com/wp-content/uploads/436926f74b76d7c3e5cb958227b46407.jpg"
              src="https://www.meticulositycleaning.com/wp-content/uploads/2024/08/asian-young-woman-cleaning-the-washing-machine-in-1536x1024.jpg"
              className="lg:h-96 object-cover mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              alt="Learning features"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service4;
