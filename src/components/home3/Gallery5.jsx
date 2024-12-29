import React, { useState } from "react";

// Sample data
const images = [
  {
    id: 1,
    titre: "This is image 1",
    category: "Filter 1",
    src: "https://www.pronet-azur.com/ressources/images/bureau-nettoyage-personne-service-n_9df4_xl.webp",
  },
  {
    id: 2,
    titre: "This is image 2",
    category: "Filter 2",
    src: "https://www.pronet-azur.com/ressources/images/shutterstock-1393690481_fe61_xl.webp",
  },
  {
    id: 3,
    titre: "This is image 3",
    category: "Filter 2",
    src: "https://www.pronet-azur.com/ressources/images/personne-service-nettoyage-professi_8979_xl.webp",
  },
  {
    id: 4,
    titre: "This is image 4",
    category: "Filter 2",
    src: "https://www.pronet-azur.com/ressources/images/vue-personne-service-nettoyage-prof_ce1a_xl.webp",
  },
  {
    id: 5,
    titre: "This is image 5",
    category: "Filter 3",
    src: "https://www.pronet-azur.com/ressources/images/serviteur-homme-nettoyant-maison-23_c588_xl.webp",
  },
  {
    id: 6,
    titre: "This is image 6",
    category: "Filter 3",
    src: "https://www.pronet-azur.com/ressources/images/homme-faisant-service-nettoyage-dom_e437_xl.webp",
  },
  {
    id: 7,
    titre: "This is image 7",
    category: "Filter 3",
    src: "https://www.pronet-azur.com/ressources/images/lp-support-shutterstock-2094671245_7213_lg.webp",
  },
  {
    id: 8,
    titre: "This is image 8",
    category: "Filter 3",
    src: "https://www.pronet-azur.com/ressources/images/lp-support-shutterstock-1887369340_e88b_lg.webp",
  },
  {
    id: 9,
    titre: "This is image 9",
    category: "Filter 3",
    src: "https://www.pronet-azur.com/ressources/images/lp-support-shutterstock-235845361_3b3b_lg.webp",
  },
];
const buttonStyles =
  "px-4 py-2 text-white rounded hover:bg-opacity-80 transition";
const activeButtonStyles = "bg-yellow-400";
const defaultButtonStyles = "bg-gray-400";

const Gallery5 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [transitioning, setTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    titre: "",
    src: "",
    index: 0,
  });

  // Extract unique categories from images data
  const categories = ["all", ...new Set(images.map((image) => image.category))];

  const handleFilter = (category) => {
    setTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setTransitioning(false);
    }, 300); // Duration should match the CSS transition time
  };

  const handleClick = (index) => {
    setModalContent({
      titre: images[index].titre,
      src: images[index].src,
      index: index,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setModalContent((prev) => {
      const nextIndex = (prev.index + 1) % images.length;
      return {
        titre: images[nextIndex].titre,
        src: images[nextIndex].src,
        index: nextIndex,
      };
    });
  };

  const handlePrev = () => {
    setModalContent((prev) => {
      const prevIndex = (prev.index - 1 + images.length) % images.length;
      return {
        titre: images[prevIndex].titre,
        src: images[prevIndex].src,
        index: prevIndex,
      };
    });
  };

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="bg-yellow-50 dark:bg-gray-900 py-10 pt-20 ">
      <div className="">
        <h2 className="text-yellow-500  text-3xl font-bold text-center sm:text-3xl">
          Découvrez Nos Réalisations
        </h2>
        <p className="max-w-3xl mx-auto mt-2 text-lg text-gray-600 dark:text-gray-500 text-center">
          Explorez les projets réussis qui témoignent de notre expertise et
          créativité.{" "}
        </p>
      </div>
      <div className="p-4 max-w-6xl mx-auto px-4 py-20 pt-14">
        <div className="flex justify-center mb-4 gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`${buttonStyles} ${
                selectedCategory === category
                  ? activeButtonStyles
                  : defaultButtonStyles
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-md transform transition-transform duration-300 ${
                transitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
              style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
            >
              <img
                src={image.src}
                alt={image.titre}
                className="relative w-full h-[15rem] object-cover cursor-pointer"
              />
              <div
                onClick={() => handleClick(index)}
                className="flex justify-center cursor-pointer items-end pb-4 text-xl absolute z-10 inset-0 opacity-0 hover:bg-black hover:opacity-50 transition-all"
              >
                <h1 className="text-white  font-bold">{image.titre}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="z-20 fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="w-[90%] flex flex-col justify-center  h-[80%] relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden   p-4">
            <img
              src={modalContent.src}
              alt={modalContent.titre}
              className="h-full object-contain mx-auto"
            />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {modalContent.titre}
            </h2>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 text-white px-4 py-2 rounded-full"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 text-white px-4 py-2 rounded-full"
            >
              Next
            </button>
            <button
              onClick={handleCloseModal}
              className="text-red-500 absolute top-4 right-4 text-4xl "
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery5;
