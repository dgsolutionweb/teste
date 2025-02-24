import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("/api/clientes")
      .then((res) => res.json())
      .then((data) => setClientes(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Lista de Clientes
        </h1>
        {clientes.length > 0 ? (
          <ul className="space-y-3">
            {clientes.map((cliente) => (
              <li
                key={cliente.id}
                className="bg-gray-200 p-4 rounded-lg text-gray-700 flex justify-between"
              >
                <span className="font-medium">{cliente.nome}</span>
                <span className="text-sm text-gray-500">{cliente.email}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">Nenhum cliente cadastrado.</p>
        )}

        <div className="mt-6 flex justify-center">
          <Link href="/cadastrar">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              Cadastrar Novo Cliente
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
