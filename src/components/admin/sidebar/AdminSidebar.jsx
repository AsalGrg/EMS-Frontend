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

const AdminSidebar = ({collapsed, toggled, settoggled, setBroken}) => {


  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => settoggled(false)}
      onBreakPoint={setBroken}
      breakPoint="md"
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, marginBottom: "32px" }}>
          <Menu>

              <MenuItem icon={<IconDashboard/>}>Dashboard</MenuItem>
              <MenuItem icon ={<IconCalendar/>}>Events</MenuItem>
              <MenuItem icon={<IconReceipt/>}>Orders</MenuItem>

            <SubMenu label="Maps" icon={<IconGlobe />}>
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme" icon={<IconBottle />}>
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>

            <SubMenu label="Components" icon={<IconDiamond />}>
              <MenuItem> Grid</MenuItem>
              <MenuItem> Layout</MenuItem>

              <SubMenu label="Forms">
                <MenuItem> Input</MenuItem>
                <MenuItem> Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem> CheckBox</MenuItem>
                  <MenuItem> Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
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

export default AdminSidebar;
