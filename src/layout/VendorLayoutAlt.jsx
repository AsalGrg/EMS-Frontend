import React from "react";
import AdminNavbar from "../components/admin/navbar/AdminNavbar";
import SidebarVendor from "../components/vendor/sidebar/SidebarVendor";
import { Outlet } from "react-router";

const VendorLayoutAlt = () => {
  return (
    <section className="admin-page-container">
      {/* common navbar for vendor and admin */}
      <AdminNavbar />
      <div className="d-flex">
        <SidebarVendor />

        <div className="w-100 mb-5 container">
          <div className="ms-4 mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorLayoutAlt;
