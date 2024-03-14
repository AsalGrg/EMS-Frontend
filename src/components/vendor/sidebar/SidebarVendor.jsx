import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

// Import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faCloudArrowDown,
  faPlus,
  faFolderOpen,
  faBars,
  faCalendar,
  faReceipt,
  
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@mantine/hooks";

const SidebarVendor = () => {
  // Sidebard collapse state
  const [collapsed, setCollapsed] = useState(true);
  const isOnSmall = useMediaQuery('(min-width: 56.25em)');

  // Get current location
  let location = useLocation();

  if(isOnSmall){
    console.log("here")
  }

  // Define a helper function for creating a MenuItem
  const createMenuItem = (icon, path, label) => {
    const isCurrentPath = location.pathname === path;
    console.log(location.pathname)
    const classes = isCurrentPath ? "active" : "fontawesome-custom";

    return (
      <MenuItem
        icon={<FontAwesomeIcon className={classes} icon={icon} />}
        component={<Link to={path} />}
      >
        <span> {label} </span>
      </MenuItem>
    );
  };

  return (
      <div className="sidebar-style h-100">
        <Sidebar collapsed={collapsed|| !isOnSmall}>
          <Menu iconShape="square">
            <MenuItem
              icon={<FontAwesomeIcon icon={faBars} />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            ></MenuItem>
            <hr />

            {createMenuItem(faGauge, "/admin/home", "Dashboard")}
            <SubMenu
              label="Exports"
              icon={<FontAwesomeIcon icon={faCloudArrowDown} />}
            >
              {createMenuItem(faPlus, "/export/new", "New")}
              {createMenuItem(faFolderOpen, "/export/old", "Previous")}
            </SubMenu>

            {createMenuItem(faCalendar, "/vendor/events", "Events")}
            {createMenuItem(faReceipt, "/vendor/orders", "Orders")}
          </Menu>
        </Sidebar>
      </div>
  );
};

export default SidebarVendor;
