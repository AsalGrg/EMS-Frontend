import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

// Import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Tooltip } from "@mantine/core";
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
      collapsed
      toggled={toggled}
      onBackdropClick={() => settoggled(false)}
      onBreakPoint={setBroken}
      breakPoint="md"
      className="bg-white"
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, marginBottom: "32px" }}>
          <Menu>
            <Tooltip label="Dashboard" position="right">
              <MenuItem
                icon={<IconDashboard />}
                component={<Link to="/vendor/home" />}
              >
                Dashboard
              </MenuItem>
            </Tooltip>

            <Tooltip label="Events" position="right">
              <MenuItem
                icon={<IconCalendar />}
                component={<Link to="/vendor/events" />}
              >
                Events
              </MenuItem>
            </Tooltip>

            <Tooltip label="Orders" position="right">
              <MenuItem
                icon={<IconReceipt />}
                component={<Link to="/vendor/orders" />}
              >
                Orders
              </MenuItem>
            </Tooltip>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarVendor;
