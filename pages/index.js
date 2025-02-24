import { useEffect, useState } from "react";

export default function Home() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("/api/clientes")
      .then(res => res.json())
      .then(data => setClientes(data));
  }, []);

  return (
    <div>
      <h1>Clientes do Supabase</h1>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>{cliente.nome} - {cliente.email}</li>
        ))}
      </ul>
    </div>
  );
}
