import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

// Import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Tooltip } from "@mantine/core";
import { IconCalendar, IconCirclePlus, IconDashboard, IconHome, IconLayersSubtract, IconReceipt } from "@tabler/icons-react";

const AdminSidebar = ({ collapsed, toggled, settoggled, setBroken }) => {
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
                icon={<IconHome />}
                component={<Link to="/admin/home" />}
              >
                Dashboard
              </MenuItem>
            </Tooltip>

            <Tooltip label="Event requests" position="right">
              <MenuItem
                icon={<IconCirclePlus/>}
                component={<Link to="/admin/eventRequests" />}
              >
                Events
              </MenuItem>
            </Tooltip>

            <Tooltip label="Collections" position="right">
              <MenuItem
                icon={<IconLayersSubtract />}
                component={<Link to="/admin/collections" />}
              >
                Collections
              </MenuItem>
            </Tooltip>

            <Tooltip label="Orders" position="right">
              <MenuItem
                icon={<IconReceipt />}
                // component={<Link to="/admin/home" />}
              >
                Collections
              </MenuItem>
            </Tooltip>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
};

export default AdminSidebar;
