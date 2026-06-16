import React from "react";
import Imagehome from "../../assets/imagehome.png";
import Imagelateral from "../../assets/imagelateral.png";
import Slider from "../../assets/slider.png";
import Featuresimage from "../../assets/featuresimage.png";
import Imageaboutus from "../../assets/imageaboutus.png";

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

const HomeSections = () => {
  return (
    <>
      <section
        id="learning"
        className="relative overflow-hidden bg-[#050816] px-4 py-16 text-white lg:px-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_0_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_0_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="flex items-center justify-center p-4 lg:p-0">
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <img
                src={Imagehome.src || Imagehome}
                alt="Background Image"
                width={550}
                height={550}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4 text-center lg:items-start lg:text-left lg:p-12 lg:pl-16">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Learning
            </div>
            <h2 className="mt-6 max-w-md text-3xl font-semibold leading-tight sm:text-5xl">
              Your Learning Journey Begins Here!
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
              where knowledge meets convenience in the palm of your hand!
            </p>
            <button className="mt-8 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(34,197,94,0.18)] transition hover:bg-emerald-400 hover:scale-105">
              Get Started
            </button>
            <div className="relative mt-10 flex w-full justify-center lg:justify-end">
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
      </section>

      <section
        id="features"
        className="relative overflow-hidden bg-[#050816] px-6 py-16 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_0_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_0_24%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Features
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              Study Anywhere Easily Online
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Discover the freedom of online learning. Our platform empowers you
              to access quality education from the comfort of your home or on
              the go.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <img
                  src={Slider.src || Slider}
                  alt="Left Image"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative max-w-[560px] rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-3xl" />
              <img
                src={Featuresimage.src || Featuresimage}
                alt="Right Image"
                width={550}
                height={550}
                className="relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative overflow-hidden bg-[#050816] px-6 py-16 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_0_28%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.1),transparent_0_24%)]" />
        <div className="relative mx-auto max-w-7xl pb-8">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Favorite Class
            </div>
            <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">
              Favorite Class
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/20"
              >
                <div className="relative mx-auto mb-5 h-32 w-32 rounded-full border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-inner" />
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {classItem.title}
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-400">
                  {classItem.description}
                </p>
                <div className="flex items-center justify-center gap-3 text-sm">
                  <span className="text-emerald-300">★ {classItem.rating}</span>
                  <span className="text-slate-400">{classItem.lessons}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(34,197,94,0.18)] transition hover:bg-emerald-400 hover:scale-105">
              Show All Class
            </button>
          </div>
        </div>
      </section>

      <section
        id="class"
        className="relative overflow-hidden bg-[#050816] px-6 py-16 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_0_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_0_22%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Mentors
              </div>
              <h2 className="mt-6 text-3xl font-semibold sm:text-5xl">
                Professional Mentor
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:w-1/2 md:text-right">
              Are you looking to advance your career, gain industry insights, or
              receive expert guidance in your professional journey? Our
              Professional Mentor program is designed to connect you with
              seasoned experts who can provide invaluable mentorship.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-5 text-center shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/20"
              >
                <div className="relative mx-auto mb-5 h-32 w-32 rounded-full border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-inner" />
                <h3 className="text-xl font-semibold text-white">
                  {mentor.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{mentor.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-[0_14px_30px_rgba(34,197,94,0.18)] transition hover:bg-emerald-400 hover:scale-105">
              Show More
            </button>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="relative overflow-hidden bg-[#050816] px-6 py-16 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.14),transparent_0_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_0_24%)]" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center gap-10 md:flex-row">
          <div className="relative flex w-full items-center justify-center md:w-1/2">
            <button className="absolute left-0 rounded-full border border-white/10 bg-white/5 p-3 text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition hover:border-emerald-400/20 hover:bg-emerald-400/10 focus:outline-none focus:ring-4 focus:ring-emerald-400/10">
              <span className="text-2xl">{"<"}</span>
            </button>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <img
                src={Imageaboutus.src || Imageaboutus}
                alt="Logo"
                width={260}
                height={260}
                style={{ objectFit: "cover" }}
              />
            </div>
            <button className="absolute right-0 rounded-full border border-white/10 bg-white/5 p-3 text-white shadow-[0_12px_30px_rgba(0,0,0,0.22)] transition hover:border-emerald-400/20 hover:bg-emerald-400/10 focus:outline-none focus:ring-4 focus:ring-emerald-400/10">
              <span className="text-2xl">{">"}</span>
            </button>
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Testimonials
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              What Our Students Are Saying
            </h2>
            <p className="mt-6 text-2xl font-semibold text-white">
              Maryam Jessica
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              The flexibility of online courses allowed me to balance my studies
              with my job and family life. The resources and materials were
              top-notch, and the interactive discussions were a highlight.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections;
