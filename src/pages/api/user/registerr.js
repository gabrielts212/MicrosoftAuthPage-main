export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    const backendBase =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const backendUrl = `${backendBase.replace(/\/$/, "")}/api/user`;
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const resp = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await resp.text();
    const contentType = resp.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      const json = text ? JSON.parse(text) : {};
      res.status(resp.status).json(json);
      return;
    }

    res.status(resp.status).send(text);
    return;
  } catch (err) {
    console.error("Error proxying register:", err);
    res.status(500).json({ error: "Erro ao encaminhar para o backend" });
  }
}
