import { useState } from "react";
import { Search } from "lucide-react";

function TramiteSearch() {
  const [code, setCode] = useState("");

  const handleSearch = () => {
    if (!code.trim()) return;
    console.log("Buscando trámite con código:", code);
    // Aquí iría la lógica para buscar en tu backend
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full mt-24 max-w-lg rounded-2xl bg-white p-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Seguimiento de trámite
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-96 border border-gray-300 rounded-lg px-3 py-4 focus-within:ring-2 focus-within:ring-sky-400">
            <Search className="w-6 h-6 text-gray-400 mr-2" />
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Ingrese el código de su trámite"
              className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-sky-600 text-white text-sm rounded-lg hover:bg-sky-800 transition"
          >
            Buscar
          </button>
        </div>

        {/* Texto auxiliar */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Ingrese el <span className="font-medium">código</span> de su trámite
          para ver el estado actual.
        </p>
      </div>
    </div>
  );
}

export default TramiteSearch;
