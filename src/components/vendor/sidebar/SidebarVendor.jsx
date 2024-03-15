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
            <MenuItem icon={<IconDashboard />}>Dashboard</MenuItem>
            <MenuItem icon={<IconCalendar />}>Events</MenuItem>
            <MenuItem icon={<IconReceipt />}>Orders</MenuItem>
          </Menu>

          <Menu>
            <MenuItem
              icon={<IconCalendar />}
              suffix={<Badge variant="success">New</Badge>}
            >
              Calendar
            </MenuItem>
            <MenuItem icon={<IconBook />}>Documentation</MenuItem>
            <MenuItem disabled icon={<IconHotelService />}>
              Examples
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarVendor;
