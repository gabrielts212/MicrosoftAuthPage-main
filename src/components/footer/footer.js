import Link from "next/link";
import Logofooter from "../../assets/logofooter.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_0_28%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_0_20%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <Link href="/" passHref>
                <img
                  src={Logofooter.src || Logofooter}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="h-11 w-auto transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              <Link href="/">
                <span className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-emerald-300">
                  Home
                </span>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-emerald-300">
                  Features
                </span>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-emerald-300">
                  Pricing
                </span>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-emerald-300">
                  Class
                </span>
              </Link>
              <Link href="/">
                <span className="cursor-pointer text-sm font-medium text-slate-300 transition hover:text-emerald-300">
                  About Us
                </span>
              </Link>
            </div>

            <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-400 lg:mx-0 lg:text-left">
              Plataforma de login e cadastro com aparência mais limpa, escura e
              consistente em toda a experiência.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-5">
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Newsletter
              </p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Receba novidades e atualizações diretamente no seu e-mail.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/10"
              />
              <button className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-400/15">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-slate-500">
            &copy; 2024 Lerntolern. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for a cleaner login and onboarding experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
