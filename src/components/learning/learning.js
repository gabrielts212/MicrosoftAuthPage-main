import Imagehome from "../../assets/imagehome.png";
import Imagelateral from "../../assets/imagelateral.png";

const Learning = () => {
  return (
    <div className="relative bg-[#0c0c0c] text-white min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-16">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
        <div className="relative">
          <img
            src={Imagehome.src || Imagehome}
            alt="Background Image"
            width={550}
            height={550}
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-4 lg:p-12 lg:pl-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left max-w-md">
          Your Learning Journey Begins Here!
        </h2>
        <p className="text-gray-400 mb-6 text-center lg:text-left max-w-md">
          where knowledge meets convenience in the palm of your hand!
        </p>
        <button className="bg-green-500 text-black px-6 py-3 rounded-full mb-6 hover:bg-green-400 transition-colors duration-300 hover:scale-105 transition-transform duration-300 ease-in-out">
          Get Started
        </button>
        <div className="relative w-full flex justify-center lg:justify-end">
          <img
            src={Imagelateral.src || Imagelateral}
            alt="Right Image"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
