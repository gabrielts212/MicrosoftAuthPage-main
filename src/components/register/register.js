import { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

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
        router.push("/loginpage");
        return;
      }

      if (response.status === 409) {
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
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4">
      <div className="bg-black bg-opacity-90 rounded-md max-w-md w-full p-6 sm:p-8 border border-gray-700 shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-green-500  text-center">
          Crie a sua conta
        </h2>
        <form onSubmit={handleForm} className="space-y-6 w-full">
          <div className={`form-control ${error ? "is-invalid" : ""}`}>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
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
              className="mt-1 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {success && <p className="text-green-400 mt-2">{success}</p>}
          </div>
          <div className={`form-control ${error ? "is-invalid" : ""}`}>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
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
              className="mt-1 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className={`form-control ${error ? "is-invalid" : ""}`}>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-white"
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
              className="mt-1 block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
        <p className="mt-4 text-center">
          <a href="/loginpage" className="text-green-500 hover:text-green-400">
            Já possui uma conta?
          </a>
        </p>
        {success && (
          <button
            type="button"
            onClick={() => router.push("/loginpage")}
            className="mt-4 w-full p-3 rounded-md border border-green-500 text-green-400 font-semibold hover:bg-green-500 hover:text-white"
          >
            Ir para login
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
