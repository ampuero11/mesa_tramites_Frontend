import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#022534] to-[#094f6e]">
      <AdminSidebar />
      <div className="flex flex-col flex-1 my-5 bg-white rounded-l-2xl shadow-xl overflow-hidden">
        <AdminHeader />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
