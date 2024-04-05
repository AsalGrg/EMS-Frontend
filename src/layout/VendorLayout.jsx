import React from 'react'
import AdminNavbar from '../components/admin/navbar/AdminNavbar'
import SidebarVendor from '../components/vendor/sidebar/SidebarVendor'
import { Outlet } from 'react-router'

const VendorLayout = () => {
  return (
    <section className="admin-page-container fonts">
        {/* common navbar for vendor and admin */}
      <AdminNavbar />
      <div className="d-flex">
        <SidebarVendor />

        <div className="w-100 mb-5"
        >
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default VendorLayout