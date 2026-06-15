import Imageaboutus from "../../assets/imageaboutus.png";

const Aboutus = () => {
  return (
    <div className="bg-[#0c0c0c] text-white py-1 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen">
        <div className="relative w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0 space-y-6 md:space-y-0">
          <button className="hover:bg-green-400 absolute left-0 bg-green-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-green-400">
            <span className="text-3xl">{"<"}</span>
          </button>
          <div className="relative">
            <img
              src={Imageaboutus.src || Imageaboutus}
              alt="Logo"
              width={260}
              height={260}
              style={{ objectFit: "cover" }}
            />
          </div>
          <button className="hover:bg-green-400 absolute right-0 bg-green-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-green-400">
            <span className="text-3xl">{">"}</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 text-center md:text-left pb-10">
          <h2 className="text-5xl font-bold mb-8">
            What Our Students Are Saying
          </h2>
          <p className="text-3xl font-semibold mb-4">Maryam Jessica</p>
          <p className="text-gray-400 text-xl">
            The flexibility of online courses allowed me to balance my studies
            with my job and family life. The resources and materials were
            top-notch, and the interactive discussions were a highlight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
