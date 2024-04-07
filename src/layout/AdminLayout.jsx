import { Outlet } from "react-router";
import AdminSidebar from "../components/admin/sidebar/AdminSidebar";
import AdminNavbar from "../components/admin/navbar/AdminNavbar";
import { useState } from "react";

export default function AdminLayout() {
  const [collapsed, setcollapsed] = useState(false);
  const [toggled, settoggled] = useState(false);
  const [broken, setBroken] = useState(false);

  return (
    <section className="admin-page-container fonts">
      <AdminNavbar />
      <div className="d-flex">
        <AdminSidebar
          collapsed={collapsed}
          setBroken={setBroken}
          settoggled={settoggled}
          toggled={toggled}
        />

        <div className="w-100 mb-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
