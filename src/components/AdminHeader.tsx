import { User } from "lucide-react";

const AdminHeader: React.FC = () => {
  return (
    <header className="w-full border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">
          Administrador del sistema de trámites
        </p>
        <h1 className="text-2xl font-bold text-sky-900">
          MUNICIPALIDAD DISTRITAL DE SABAINO
        </h1>
      </div>
      <div className="flex items-center">
        <div className="p-2 rounded-full border hover:bg-sky-50 cursor-pointer transition">
          <User className="w-6 h-6 text-sky-700" strokeWidth={2} />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
