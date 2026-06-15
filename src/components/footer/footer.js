import Link from "next/link";
import Logofooter from "../../assets/logofooter.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F241F] text-white py-4">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2  mt-6   mb-6 ">
          <Link href="/" passHref>
            <img
              src={Logofooter.src || Logofooter}
              alt="Logo"
              width={150}
              height={150}
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <nav className="flex space-x-4">
            <Link href="/">
              <span className="hover:text-green-500 cursor-pointer">Home</span>
            </Link>
            <Link href="/">
              <span className="hover:text-green-500 cursor-pointer">
                Features
              </span>
            </Link>
            <Link href="/">
              <span className="hover:text-green-500 cursor-pointer">
                Pricing
              </span>
            </Link>
            <Link href="/">
              <span className="hover:text-green-500 cursor-pointer">Class</span>
            </Link>
            <Link href="/">
              <span className="hover:text-green-500 cursor-pointer">
                About Us
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-center md:flex-row mt-6   space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center md:items-start">
            <label className="mb-4 text-gray-500 pl-2">Newsletter</label>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full bg-gray-800 text-white focus:outline-none"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-full hover:bg-green-600 focus:ring-2 focus:ring-green-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 text-end text-gray-500 text-sm">
          &copy; 2024 Lerntolern. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
