import React, { useState } from "react";
import { Search as SearchIcon, FileText, User, Mail, Hash } from "lucide-react";
import { useTramitePublic } from "../hooks/useTramitePublic";
import { STATUS_LABELS } from "../constants/states";

const SearchPublic: React.FC = () => {
  const { data, loading, error, getTramiteByCode } = useTramitePublic();
  const [codeInput, setCodeInput] = useState("");

  const handleSearch = () => {
    if (codeInput.trim()) {
      getTramiteByCode(codeInput.trim());
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center
        bg-gradient-to-br from-[#022534] to-[#094f6e] p-6"
    >
      <div className="max-w-md w-full bg-white bg-opacity-90 shadow-xl rounded-xl p-6">
        <div className="flex justify-center mb-4">
          <SearchIcon className="w-12 h-12 text-sky-700" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Buscar Trámite
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Ingresa código del trámite"
            className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-sky-700 text-white px-4 rounded hover:bg-sky-800 transition"
          >
            Buscar
          </button>
        </div>
        {loading && (
          <div className="space-y-2 animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        )}
        {error && (
          <p className="text-red-500 text-center">No se encontro el trámite</p>
        )}
        {data && (
          <div className="mt-4 bg-white rounded-lg shadow-md p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl font-bold text-sky-700">
                {STATUS_LABELS[data.status as keyof typeof STATUS_LABELS] ||
                  data.status}
              </span>
              <Hash className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="font-medium">{data.code}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <User className="w-4 h-4 text-gray-500" />
              <span>{data.full_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              <span>{data.concept}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPublic;
