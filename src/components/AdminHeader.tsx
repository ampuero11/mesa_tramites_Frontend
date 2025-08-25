import { User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowModal(false);
    navigate("/");
  };

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
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowModal(true)}
          className="text-sm text-gray-600 hover:text-red-600 underline transition"
        >
          Cerrar sesión
        </button>
        <div className="p-2 rounded-full border hover:bg-sky-50 cursor-pointer transition">
          <User className="w-6 h-6 text-sky-700" strokeWidth={2} />
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              ¿Seguro que deseas cerrar sesión?
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Se cerrará tu sesión actual y regresarás al inicio.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
