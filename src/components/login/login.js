import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

const Login = () => {
  const { instance } = useMsal();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      setError("");
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
      router.push("/");
    } catch (err) {
      setError(err.message);
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
        if (instance.getAllAccounts().length > 0) {
          router.push("/");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <div className="bg-black bg-opacity-90 rounded-md max-w-md w-full p-6 sm:p-10 border border-gray-700 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-green-500 text-center">
          Faça login na sua conta
        </h2>
        <form onSubmit={handleForm} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium   mb-2">
              Nome de Usuário
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(event) => handleFormEdit(event, "name")}
              placeholder="Nome de Usuário"
              className="bg-gray-800 text-white w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium  mb-2"
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
              className="bg-gray-800 text-white w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 text-white w-full p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 font-semibold"
          >
            {isSubmitting ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 font-semibold"
        >
          Entrar com Microsoft
        </button>
        <a
          href="/registerpage"
          className="block mt-6 text-center text-green-500 hover:text-green-400 text-base"
        >
          Ainda não tem uma conta? Cadastre-se
        </a>
      </div>
    </div>
  );
};

export default Login;
