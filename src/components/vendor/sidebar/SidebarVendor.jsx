import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

// Import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@mantine/core";
import {
  IconBarcode,
  IconBook,
  IconBottle,
  IconCalendar,
  IconDashboard,
  IconDiamond,
  IconGlobe,
  IconHotelService,
  IconReceipt,
} from "@tabler/icons-react";

const SidebarVendor = ({ collapsed, toggled, settoggled, setBroken }) => {
  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => settoggled(false)}
      onBreakPoint={setBroken}
      breakPoint="md"
      className="bg-white"
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, marginBottom: "32px" }}>
          <Menu>
            <MenuItem icon={<IconDashboard />}
            component={<Link to="/vendor/home"/>}>Dashboard</MenuItem>
            <MenuItem icon={<IconCalendar />}
            component={<Link to="/vendor/events"/>}
            >Events</MenuItem>
            <MenuItem icon={<IconReceipt />}
            component={<Link to="/vendor/orders"/>}
            >Orders</MenuItem>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarVendor;
