import React from "react";

const PricingClass = () => {
  const classes = [
    {
      title: "Logo Branding Guideline",
      description:
        "Your trusted resource for maintaining consistent and impactful logo representation",
      rating: "5.0",
      lessons: "20 Lessons",
    },
    {
      title: "Movie Maker",
      description:
        "Unleash your creativity and produce stunning videos with our step-by-step guideline",
      rating: "4.8",
      lessons: "22 Lessons",
    },
    {
      title: "UI Wireframe and Flow",
      description:
        "Our comprehensive guideline is your roadmap to crafting seamless and user-friendly digital experiences.",
      rating: "4.8",
      lessons: "10 Lessons",
    },
  ];

  return (
    <div className="bg-[#0c0c0c] text-white py-12 px-6 ">
      <div className="container mx-auto  pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Favorite Class</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4 bg-gray-700 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {classItem.title}
              </h3>
              <p className="text-gray-400 text-center mb-4">
                {classItem.description}
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">★ {classItem.rating}</span>
                <span className="text-gray-400">{classItem.lessons}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className=" hover:bg-green-400 bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-400  hover:scale-105 transition-transform duration-300 ease-in-out">
            Show All Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingClass;
