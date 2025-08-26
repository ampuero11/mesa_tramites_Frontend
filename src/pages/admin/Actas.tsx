import { useEffect, useState } from "react";
import { FileText, Download, PlusCircle } from "lucide-react";
import { useActas } from "../../hooks/useActas";
import { BASE_URL } from "../../constants/api";
import { formatDateTime } from "../../utils/date";

function Actas() {
  const { getActas, generateActa } = useActas();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        await getActas.fetchData();
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  const handleGenerarActa = async () => {
    setLoading(true);
    try {
      await generateActa.fetchData();
      await getActas.fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (file: string) => {
    if (file) {
      const fullUrl = `${BASE_URL}${file}`;
      window.open(fullUrl, "_blank");
    }
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
      <div className="overflow-x-auto overflow-y-auto max-h-[680px] bg-white rounded-lg border border-gray-300">
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
            {getActas.loading ? (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  Cargando...
                </td>
              </tr>
            ) : getActas.data && getActas.data.length > 0 ? (
              getActas.data.map((acta) => (
                <tr key={acta.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{acta.id}</td>
                  <td className="px-6 py-4">
                    {formatDateTime(acta.created_at)}
                  </td>
                  <td className="px-6 py-4">{acta.created_by.email}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDownload(acta.file)}
                      className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700 transition"
                    >
                      <Download className="w-4 h-4" />
                      Descargar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                  No hay actas registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Actas;
