import { NavLink } from "react-router-dom";
import { LayoutDashboard, FileText, Search, ClipboardList } from "lucide-react";

const AdminSidebar: React.FC = () => {
  const links = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/tramites", label: "Lista de Trámites", icon: FileText },
    { to: "/admin/buscar", label: "Buscar Trámite", icon: Search },
    { to: "/admin/actas/list", label: "Lista de Actas", icon: ClipboardList },
  ];

  return (
    <aside className="w-64 min-h-screen">
      <div className="p-6">
        <h2 className="text-3xl mt-10 font-bold text-white">Admin Panel</h2>
      </div>
      <nav className="px-4 space-y-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 my-10 rounded-lg font-medium transition 
              hover:bg-sky-100 hover:text-sky-900
              ${isActive ? "bg-sky-50 text-sky-900" : "text-gray-50"}`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
