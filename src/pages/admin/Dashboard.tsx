/* eslint-disable @typescript-eslint/no-explicit-any */
import { User, FileText, CheckCircle, XCircle } from "lucide-react";
import { useTramitesEstadisticas } from "../../hooks/useTramitesEstadisticas";

function Dashboard() {
  const { estados: apiStats, loading, error } = useTramitesEstadisticas();

  const statusConfig: Record<string, { icon: any; color: string; bg: string }> =
    {
      Recibido: {
        icon: FileText,
        color: "text-blue-700",
        bg: "bg-blue-100",
      },
      "En Proceso": {
        icon: User,
        color: "text-yellow-700",
        bg: "bg-yellow-100",
      },
      Atendido: {
        icon: CheckCircle,
        color: "text-green-700",
        bg: "bg-green-100",
      },
      Rechazado: {
        icon: XCircle,
        color: "text-red-700",
        bg: "bg-red-100",
      },
    };

  if (loading) {
    return <p>...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  const stats = apiStats?.map((stat) => {
    const config = statusConfig[stat.label] || {
      icon: FileText,
      color: "text-gray-700",
      bg: "bg-gray-100",
    };
    return {
      ...stat,
      ...config,
    };
  });

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, cantidad, icon: Icon, color, bg }) => (
          <div
            key={label}
            className={`flex items-center gap-4 p-6 h-40 rounded-xl shadow-md hover:shadow-lg transition ${bg}`}
          >
            <div className="p-4 bg-white/40 rounded-lg">
              <Icon className={`w-10 h-10 ${color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">{label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{cantidad}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Bienvenido al sistema de mesa de partes
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Este sistema de mesa de partes permite la gestión eficiente de actas y
          trámites realizados por los usuarios. Aquí podrás realizar el
          seguimiento de solicitudes, controlar su estado y organizar mejor los
          procesos administrativos.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
