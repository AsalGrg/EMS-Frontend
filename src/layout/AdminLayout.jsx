import { Outlet } from "react-router";
import AdminSidebar from "../components/admin/sidebar/AdminSidebar";
import AdminNavbar from "../components/admin/navbar/AdminNavbar";

export default function AdminLayout() {
  return (
    <section className="admin-page-container">
      <AdminNavbar />
      <div className="d-flex">
        <AdminSidebar />

        <div className="w-100 mb-5"
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
}
