'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Registrar o erro em um serviço de monitoramento, se desejado
    console.error('Erro capturado:', error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-center text-2xl font-bold text-red-600">
        Algo deu errado!
      </h2>
      <p className="mt-2 text-center text-gray-600">
        Desculpe, não conseguimos carregar essa página. Por favor, tente
        novamente mais tarde.
      </p>
      <button
        className="mt-6 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={() => reset()} // Tentar recuperar a página
      >
        Tentar novamente
      </button>
    </main>
  );
}
