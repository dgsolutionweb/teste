import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ error: "Nome e Email são obrigatórios" });
    }

    const { data, error } = await supabase.from("clientes").insert([{ nome, email }]);

    if (error) return res.status(400).json({ error: error.message });

    return res.status(201).json({ message: "Usuário cadastrado!", data });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
