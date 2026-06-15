import React from "react";
import Slider from "../../assets/slider.png";
import Featuresimage from "../../assets/featuresimage.png";
import Backgroundtext from "../../assets/backgroundtext.png";

const Features = () => {
  return (
    <div className="relative bg-[#0c0c0c] text-white py-12 px-6 flex justify-center">
      <div className="absolute inset-0   ">
        <img
          src={Backgroundtext.src || Backgroundtext}
          alt="Background"
          width={150}
          height={120}
        />
      </div>
      <div className="relative max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between ">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8">
          <h2 className="text-4xl font-bold mb-4">
            Study Anywhere Easily Online
          </h2>
          <p className="text-gray-400 mb-6">
            Discover the freedom of online learning. Our platform empowers you
            to access quality education from the comfort of your home or on the
            go.
          </p>
          <div className="flex justify-center lg:justify-start">
            <img
              src={Slider.src || Slider}
              alt="Left Image"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Featuresimage.src || Featuresimage}
            alt="Right Image"
            width={550}
            height={550}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
