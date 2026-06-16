import Link from "next/link";
// using plain <img> for static assets to avoid next/image fetchPriority warnings
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import Logofooter from "../../assets/logofooter.png";
import Imagehome from "../../assets/imagehome.png";
import Imagelateral from "../../assets/imagelateral.png";
import Imageaboutus from "../../assets/imageaboutus.png";
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
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Features", href: "/home#features" },
    { label: "Pricing", href: "/home#pricing" },
    { label: "Class", href: "/home#class" },
    { label: "About Us", href: "/home#about-us" },
  ];

  const profileImages = [Imagehome, Imagelateral, Imageaboutus];

  useEffect(() => {
    const savedUser = getCookie("authUser");

    if (!savedUser) {
      return;
    }

    try {
      const parsedUser = JSON.parse(savedUser);

      if (parsedUser?.name) {
        setUserName(parsedUser.name);
      }
    } catch {
      setUserName("");
    }
  }, []);

  const firstName = userName.split(" ").filter(Boolean)[0] || "Conta ativa";
  const userInitials = userName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((namePart) => namePart[0]?.toUpperCase())
    .join("");

  const renderProfileAvatar = (suffix = "desktop") => (
    <div className="relative h-11 w-11 shrink-0 rounded-full border border-emerald-400/20 bg-[#08111f] p-[3px] shadow-[0_8px_18px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
      <div className="relative h-full w-full overflow-hidden rounded-full">
        {profileImages.map((imageSource, index) => (
          <div
            key={`${imageSource.src || imageSource}-${suffix}-${index}`}
            className={`absolute inset-y-0 overflow-hidden ${
              index === 0
                ? "left-0 w-[38%]"
                : index === 1
                  ? "left-[31%] w-[38%]"
                  : "right-0 w-[38%]"
            }`}
          >
            <img
              src={imageSource.src || imageSource}
              alt="Imagem do perfil"
              className={`h-full w-full object-cover opacity-85 ${
                index === 1 ? "scale-125" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-[#050816]/30" />
          </div>
        ))}

        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-0.5">
          <span className="rounded-full bg-[#050816]/85 px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-[0.18em] text-emerald-200">
            {userInitials || "UA"}
          </span>
        </div>
      </div>
    </div>
  );

  const handleLogout = () => {
    deleteCookie("authorization");
    deleteCookie("authUser");
    setIsOpen(false);
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/95 text-white backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" passHref>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex items-center"
            >
              <img
                src={Logofooter.src || Logofooter}
                alt="Logo"
                width={150}
                height={150}
                className="h-12 w-auto transition-transform duration-300 ease-in-out hover:scale-[1.03]"
              />
            </motion.div>
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} passHref>
              <span className="relative cursor-pointer text-sm font-medium text-slate-300 transition duration-200 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all after:duration-200 hover:after:w-full">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] pl-1 pr-2 py-1 shadow-[0_10px_22px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            {renderProfileAvatar()}

            <div className="min-w-0">
              <p className="max-w-[72px] truncate text-[11px] font-semibold text-white">
                {firstName}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-red-400/30 bg-red-500/10 px-3.5 py-2 text-[11px] font-semibold text-red-200 transition duration-200 hover:border-red-300 hover:bg-red-500/20 hover:text-white"
          >
            Sair
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-emerald-400/10 lg:hidden"
          aria-label="Abrir menu"
        >
          <svg
            className="h-5 w-5"
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

        <div
          className={`absolute left-0 top-full w-full border-b border-white/10 bg-[#050816]/98 px-4 pb-4 pt-2 backdrop-blur-xl lg:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.24)]">
            <div className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-slate-950/60 p-3">
              {renderProfileAvatar("mobile")}

              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-emerald-300/90">
                  Perfil
                </p>
                <p className="truncate text-sm font-semibold text-white">
                  {firstName}
                </p>
              </div>
            </div>

            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} passHref>
                  <span className="cursor-pointer rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 font-semibold text-red-200 transition hover:border-red-300 hover:bg-red-500/20 hover:text-white sm:col-span-2"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
