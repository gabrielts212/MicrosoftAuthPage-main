import { useState } from "react";
import { useRouter } from "next/router";
import Toast from "../toast/toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [toast, setToast] = useState({ type: "error", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const baseInputClass =
    "mt-1 block w-full rounded-2xl border px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500";

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
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      nextErrors.name = "Informe seu nome de usuário.";
    } else if (trimmedName.length < 3) {
      nextErrors.name = "O nome deve ter ao menos 3 caracteres.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Informe seu e-mail.";
    } else if (!emailRegex.test(trimmedEmail)) {
      nextErrors.email = "Informe um e-mail válido.";
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
      setSuccess("");
      setIsSubmitting(true);

      const response = await fetch(`/api/user/registerr`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          passwordHash: formData.password,
        }),
      });

      const json = await response.json();
      if (response.status === 201) {
        setSuccess(
          "Cadastro realizado com sucesso. Redirecionando para o login...",
        );
        showToast("success", "Cadastro realizado com sucesso.");
        setTimeout(() => {
          router.push("/loginpage");
        }, 1200);
        return;
      }

      if (response.status === 409) {
        setFieldErrors({ email: "Este e-mail já está cadastrado." });
        throw new Error("Email ja cadastrado.");
      }

      if (response.status === 400) {
        throw new Error(json?.error || json?.message || "Dados invalidos.");
      }

      throw new Error(
        json?.error ||
          json?.message ||
          "Erro ao conectar com backend, tente mais tarde.",
      );
    } catch (err) {
      showToast(
        "error",
        err.message || "Não foi possível concluir o cadastro.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
                Novo acesso
              </div>

              <h1 className="mt-8 max-w-xl text-5xl font-semibold leading-tight text-white xl:text-6xl">
                Crie sua conta com uma experiência mais clara e moderna.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
                O cadastro segue o mesmo visual refinado da tela de login, com
                foco em contraste, hierarquia e leitura rápida.
              </p>
            </div>

            <div className="relative grid gap-4 text-sm text-slate-200">
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                Campos organizados para facilitar o preenchimento.
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                Feedback visual melhor para erros e sucesso.
              </div>
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur">
                Aparência consistente com a tela de login.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#09101d] p-5 sm:p-8 lg:p-10">
            <div className="w-full max-w-md">
              <div className="mb-8 lg:hidden">
                <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Novo acesso
                </div>
                <h2 className="mt-6 text-3xl font-semibold leading-tight text-white">
                  Crie a sua conta
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Preencha seus dados para criar o cadastro e continuar.
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
                      Register Page
                    </p>
                  </div>
                </div>
                <h2 className="mt-6 text-3xl font-semibold leading-tight text-white">
                  Crie a sua conta
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Preencha seus dados para criar o cadastro e continuar.
                </p>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-[#0f172a] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)] sm:p-8">
                <form onSubmit={handleForm} className="space-y-5 w-full">
                  <div className="form-control">
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
                      onChange={(e) => handleFormEdit(e, "name")}
                      placeholder="Digite seu Nome"
                      className={`${baseInputClass} ${inputStateClass("name")}`}
                      required
                    />
                    {fieldErrors.name && (
                      <p className="mt-2 text-sm text-red-300">
                        {fieldErrors.name}
                      </p>
                    )}
                    {success && (
                      <p className="mt-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                        {success}
                      </p>
                    )}
                  </div>

                  <div className="form-control">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleFormEdit(e, "email")}
                      placeholder="Digite seu Email"
                      className={`${baseInputClass} ${inputStateClass("email")}`}
                      required
                    />
                    {fieldErrors.email && (
                      <p className="mt-2 text-sm text-red-300">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="form-control">
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
                      placeholder="Digite sua Senha"
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
                    {isSubmitting ? "Cadastrando..." : "Cadastrar"}
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-400">
                  Já possui uma conta?{" "}
                  <a
                    href="/loginpage"
                    className="font-medium text-emerald-300 transition hover:text-emerald-200"
                  >
                    Entre agora
                  </a>
                </p>

                {success && (
                  <button
                    type="button"
                    onClick={() => router.push("/loginpage")}
                    className="mt-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 font-semibold text-white transition hover:border-emerald-400/20 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-emerald-400/10"
                  >
                    Ir para login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
