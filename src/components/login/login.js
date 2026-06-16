import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Toast from "../toast/toast";

const buildUserSession = (name, provider = "local") =>
  JSON.stringify({
    name,
    provider,
  });

const Login = () => {
  const { instance } = useMsal();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [toast, setToast] = useState({ type: "error", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const baseInputClass =
    "w-full rounded-2xl border px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500";

  const inputStateClass = (fieldName) =>
    fieldErrors[fieldName]
      ? "border-red-400/60 bg-red-500/10 focus:border-red-400 focus:ring-4 focus:ring-red-500/10"
      : "border-white/10 bg-slate-950/80 focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/10";

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const validateForm = () => {
    const nextErrors = {};
    const trimmedName = formData.name.trim();

    if (!trimmedName) {
      nextErrors.name = "Informe seu nome de usuário.";
    } else if (trimmedName.length < 3) {
      nextErrors.name = "O nome de usuário deve ter ao menos 3 caracteres.";
    }

    if (!formData.password) {
      nextErrors.password = "Informe sua senha.";
    } else if (formData.password.length < 6) {
      nextErrors.password = "A senha deve ter ao menos 6 caracteres.";
    }

    return nextErrors;
  };

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const nextErrors = validateForm();

      if (Object.keys(nextErrors).length > 0) {
        setFieldErrors(nextErrors);
        showToast("error", "Revise os campos destacados antes de continuar.");
        return;
      }

      setFieldErrors({});
      setIsSubmitting(true);

      const response = await fetch(`/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();
      if (response.status === 401) {
        setFieldErrors({
          name: "Credenciais inválidas.",
          password: "Credenciais inválidas.",
        });
        throw new Error("Credenciais invalidas.");
      }

      if (response.status !== 200) {
        throw new Error(
          json?.error ||
            json?.message ||
            "Erro ao conectar com backend, tente mais tarde.",
        );
      }

      setCookie("authorization", json?.token || json);
      setCookie("authUser", buildUserSession(formData.name.trim(), "local"));
      router.push("/home");
    } catch (err) {
      showToast("error", err.message || "Não foi possível entrar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = () => {
    instance
      .loginPopup({
        scopes: ["openid", "profile", "User.Read"],
      })
      .then(() => {
        const activeAccount = instance.getAllAccounts()[0];

        if (activeAccount) {
          setCookie("authorization", "microsoft-authenticated");
          setCookie(
            "authUser",
            buildUserSession(
              activeAccount.name ||
                activeAccount.username ||
                "Usuário Microsoft",
              "microsoft",
            ),
          );
          router.push("/home");
        }
      })
      .catch((e) => {
        console.error(e);
        showToast("error", "Não foi possível entrar com Microsoft.");
      });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <Toast
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ type: "error", message: "" })}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_0_26%),radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.16),transparent_0_24%),linear-gradient(180deg,#09111f_0%,#050816_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:grid-cols-[1fr_0.95fr]">
          <div className="relative hidden overflow-hidden bg-[#09101d] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_0_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_0_28%)]" />
            <div className="relative">
              <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Acesso seguro
              </div>

              <h1 className="mt-8 max-w-xl text-5xl font-semibold leading-tight text-white xl:text-6xl">
                Uma tela de login limpa, elegante e fácil de usar.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
                Um layout mais leve, com foco em legibilidade, contraste e uma
                entrada visual mais sofisticada para a sua aplicação.
              </p>
            </div>

            <div className="relative grid gap-4 text-sm text-slate-200">
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                Fluxo mantido, visual repensado para parecer mais moderno.
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                Interface clara com destaque para as ações principais.
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                Bom equilíbrio entre aparência profissional e simplicidade.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#09101d] p-5 sm:p-8 lg:p-10">
            <div className="w-full max-w-md">
              <div className="mb-8 lg:hidden">
                <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Acesso seguro
                </div>
                <h2 className="mt-6 text-3xl font-semibold leading-tight text-white">
                  Faça login na sua conta
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Use suas credenciais ou entre com a conta Microsoft para
                  continuar.
                </p>
              </div>

              <div className="mb-8 hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-base font-black text-white shadow-[0_16px_36px_rgba(16,185,129,0.18)]">
                    M
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      Microsoft Auth
                    </p>
                    <p className="text-lg font-semibold text-white">
                      Login Page
                    </p>
                  </div>
                </div>
                <h2 className="mt-6 text-3xl font-semibold leading-tight text-white">
                  Faça login na sua conta
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Entre com seu usuário e senha ou use a conta Microsoft para
                  continuar.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-[#0f172a] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)] sm:p-8">
                <form onSubmit={handleForm} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-200"
                    >
                      Nome de Usuário
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(event) => handleFormEdit(event, "name")}
                      placeholder="Digite seu nome de usuário"
                      className={`${baseInputClass} ${inputStateClass("name")}`}
                      required
                    />
                    {fieldErrors.name && (
                      <p className="mt-2 text-sm text-red-300">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-semibold text-slate-200"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={(event) => handleFormEdit(event, "password")}
                      placeholder="Digite sua senha"
                      className={`${baseInputClass} ${inputStateClass("password")}`}
                      required
                    />
                    {fieldErrors.password && (
                      <p className="mt-2 text-sm text-red-300">
                        {fieldErrors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-3.5 font-semibold text-white shadow-[0_18px_32px_rgba(34,197,94,0.18)] transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/15 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Entrando..." : "Entrar"}
                  </button>
                </form>

                <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                  <span className="h-px flex-1 bg-white/10" />
                  ou
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <button
                  onClick={handleLogin}
                  className="group flex w-full items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:border-emerald-400/20 hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-400/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition group-hover:bg-white/10">
                    <span className="grid h-6 w-6 grid-cols-2 gap-0.5">
                      <span className="rounded-[3px] bg-[#f25022]" />
                      <span className="rounded-[3px] bg-[#7fba00]" />
                      <span className="rounded-[3px] bg-[#00a4ef]" />
                      <span className="rounded-[3px] bg-[#ffb900]" />
                    </span>
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-base font-semibold text-white">
                      Entrar com Microsoft
                    </span>
                    <span className="block text-xs font-medium text-slate-400">
                      Login corporativo ou escolar
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition group-hover:border-emerald-400/20 group-hover:bg-emerald-400/10 group-hover:text-emerald-200">
                    →
                  </span>
                </button>

                <a
                  href="/registerpage"
                  className="mt-6 block text-center text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                >
                  Ainda não tem uma conta? Cadastre-se
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
