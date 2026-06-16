import { useEffect } from "react";

const toneClasses = {
  error: {
    wrapper: "border-red-500/30 bg-[#2a1820]/95 text-red-50",
    badge: "bg-red-500/15 text-red-200 ring-1 ring-red-400/20",
    icon: "bg-red-500/15 text-red-200",
    close: "text-red-100/70 hover:text-white",
    title: "Erro",
  },
  success: {
    wrapper: "border-emerald-500/30 bg-[#10261f]/95 text-emerald-50",
    badge: "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/20",
    icon: "bg-emerald-500/15 text-emerald-200",
    close: "text-emerald-100/70 hover:text-white",
    title: "Sucesso",
  },
};

const ToastIcon = ({ type }) => {
  if (type === "success") {
    return (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7L10 17L5 12"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8V12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 16H12.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10.29 3.86002L1.82002 18C1.64539 18.3024 1.55274 18.645 1.55127 18.9934C1.5498 19.3418 1.63956 19.6852 1.81164 19.9891C1.98372 20.293 2.23202 20.5468 2.53197 20.7255C2.83192 20.9042 3.1732 21.0017 3.52127 21.008H20.4613C20.8093 21.0017 21.1506 20.9042 21.4506 20.7255C21.7505 20.5468 21.9988 20.293 22.1709 19.9891C22.343 19.6852 22.4327 19.3418 22.4313 18.9934C22.4298 18.645 22.3371 18.3024 22.1625 18L13.6925 3.86002C13.5119 3.56611 13.2589 3.32342 12.9576 3.15496C12.6562 2.9865 12.3167 2.89807 11.9715 2.89807C11.6263 2.89807 11.2868 2.9865 10.9854 3.15496C10.6841 3.32342 10.4311 3.56611 10.2505 3.86002H10.29Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Toast = ({ type = "error", message, onClose }) => {
  const tone = toneClasses[type] || toneClasses.error;

  useEffect(() => {
    if (!message) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      onClose();
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  if (!message) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-[100] max-w-md">
      <div
        className={`pointer-events-auto flex items-start gap-3 rounded-[24px] border px-4 py-4 shadow-[0_22px_55px_rgba(0,0,0,0.38)] backdrop-blur-xl ${tone.wrapper}`}
      >
        <div
          className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}
        >
          <ToastIcon type={type} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] ${tone.badge}`}
            >
              {tone.title}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-white/90">{message}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className={`text-base font-semibold transition ${tone.close}`}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
