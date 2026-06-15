export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const backendBase =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const backendUrl = `${backendBase.replace(/\/$/, "")}/api/auth/login`;
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    try {
      const json = text ? JSON.parse(text) : {};
      res.status(response.status).json(json);
      return;
    } catch {
      res.status(response.status).send(text);
      return;
    }
  } catch (error) {
    console.error("Error proxying login:", error);
    res.status(500).json({
      error: "Erro ao conectar com backend, tente mais tarde.",
    });
  }
}
