import Link from "next/link";
// using plain <img> for static assets to avoid next/image fetchPriority warnings
import { useState } from "react";
import Logofooter from "../../assets/logofooter.png";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Link href="/" passHref>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <img
                src={Logofooter.src || Logofooter}
                alt="Logo"
                width={150}
                height={150}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          </Link>
        </div>

        <div className="block lg:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto`}
        >
          <Link href="/" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">
              Features
            </span>
          </Link>
          <Link href="/" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">
              Pricing
            </span>
          </Link>
          <Link href="/" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">
              Class
            </span>
          </Link>
          <Link href="/" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">
              About Us
            </span>
          </Link>
        </nav>
        <div
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto mt-4 lg:mt-0 ml-[-10px]`}
        >
          <Link href="/loginpage" passHref>
            <button className="block lg:inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mb-3 lg:mb-0 lg:mr-2  hover:scale-105 transition-transform duration-300 ease-in-out">
              Sign in
            </button>
          </Link>
          <Link href="/registerpage" passHref>
            <button className="block lg:inline-block border border-green-500 text-green-500 hover:text-green-400 hover:border-green-400 font-bold py-2 px-4 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
