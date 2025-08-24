import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout: React.FC = () => {
  return (
    <div>
      <AdminSidebar />
      <div>
        <AdminHeader />
        <main style={{ padding: "20px", flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
