import { useState } from "react";
import { FileText, Download, PlusCircle } from "lucide-react";

function Actas() {
  const [loading, setLoading] = useState(false);
  const [actas, setActas] = useState([
    { id: 1, fecha: "2025-08-20", nombre: "Acta N°1" },
    { id: 2, fecha: "2025-08-21", nombre: "Acta N°2" },
  ]);

  const handleGenerarActa = () => {
    setLoading(true);
    setTimeout(() => {
      const nuevaActa = {
        id: actas.length + 1,
        fecha: new Date().toISOString().split("T")[0],
        nombre: `Acta N°${actas.length + 1}`,
      };
      setActas([...actas, nuevaActa]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="w-5 h-5 text-sky-600" />
          Lista de actas
        </h2>
        <button
          onClick={handleGenerarActa}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white text-sm rounded-lg hover:bg-sky-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
          ) : (
            <PlusCircle className="w-4 h-4" />
          )}
          {loading ? "Generando..." : "Generar acta"}
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-300">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                #
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Fecha
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600">
                Nombre
              </th>
              <th className="px-6 py-3 text-right font-medium text-gray-600">
                Acción
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {actas.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No hay actas registradas
                </td>
              </tr>
            ) : (
              actas.map((acta) => (
                <tr key={acta.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{acta.id}</td>
                  <td className="px-6 py-4">{acta.fecha}</td>
                  <td className="px-6 py-4">{acta.nombre}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition">
                      <Download className="w-4 h-4" />
                      Descargar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Actas;
