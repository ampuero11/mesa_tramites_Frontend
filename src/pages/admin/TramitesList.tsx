import { User, FileText, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockData = [
  {
    id: "5064c52b-4ce1-46e9-9ab9-5f909965e2f2",
    code: "TRM-2025-0001",
    full_name: "Luis Fernando",
    document: "12345678",
    email: "luisfernando3chr@gmail.com",
    phone: "904479320",
    concept: "Solicitud de prueba",
    status: "in_process",
    created_at: "2025-08-24T17:57:32.007272Z",
  },
];

function TramitesList() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {mockData.map((tramite) => (
        <div
          key={tramite.id}
          className="rounded-xl border border-gray-200 bg-white transition transform hover:scale-[1.02] hover:border-sky-700"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="text-lg font-semibold">{tramite.code}</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                tramite.status === "in_process"
                  ? "bg-yellow-100 text-yellow-800"
                  : tramite.status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {tramite.status === "in_process" ? "En proceso" : tramite.status}
            </span>
          </div>

          <div className="px-4 py-3 space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{tramite.full_name}</span>
            </p>
            <p className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-green-500" />
              {tramite.concept}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              {new Date(tramite.created_at).toLocaleDateString()}
            </p>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => navigate(`/admin/tramites/${tramite.id}`)}
                className="px-3 py-1 text-sm font-medium rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition"
              >
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TramitesList;
