import React, { useState } from "react";
import AdminNavbar from "../components/admin/navbar/AdminNavbar";
import SidebarVendor from "../components/vendor/sidebar/SidebarVendor";
import { Outlet } from "react-router";
import { IconBrandThreejs, IconMenu2 } from "@tabler/icons-react";

const VendorLayoutAlt = () => {
  const [collapsed, setcollapsed] = useState(false);
  const [toggled, settoggled] = useState(false);
  const [broken, setBroken] = useState(false);

  return (
    <section className="admin-page-container fonts">
      {/* common navbar for vendor and admin */}
      <AdminNavbar
        broken={broken}
        setcollapsed={setcollapsed}
        collapsed={collapsed}
        setBroken={setBroken}
        settoggled={settoggled}
        toggled={toggled}
      />
      <div className="d-flex">
        <SidebarVendor
          collapsed={collapsed}
          setBroken={setBroken}
          settoggled={settoggled}
          toggled={toggled}
        />

        <div className="w-100 mb-5 container-fluid">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorLayoutAlt;
