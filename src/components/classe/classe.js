import React from 'react';

const Classe = () => {
  const mentors = [
    {
      name: "Jemy Durinto",
      title: "Logo Designer",
    },
    {
      name: "Seikoj De Loparto",
      title: "Logo Designer",
    },
    {
      name: "Miracle Panta",
      title: "UI/UX Designer",
    },
    {
      name: "Dery Franklin",
      title: "Motion Graphic",
    },
  ];

  return (
    <div className="bg-[#0c0c0c] text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            Professional Mentor
          </h2>
          <p className="text-gray-400 md:w-1/2">
            Are you looking to advance your career, gain industry insights, or
            receive expert guidance in your professional journey? Our
            Professional Mentor program is designed to connect you with seasoned
            experts who can provide invaluable mentorship.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4 bg-gray-700 rounded-full"></div>
              <h3 className="text-xl font-bold">{mentor.name}</h3>
              <p className="text-gray-400">{mentor.title}</p>
            </div>
            
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className=" hover:bg-green-400 bg-green-500  text-black px-6 py-2 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-400  hover:scale-105 transition-transform duration-300 ease-in-out">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Classe;
