import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";

const UserPersonalPagesLayout = () => {
  return (
    <section>
      <Navbar />
      <div className="container"
      style={{
        paddingTop: '50px'
      }}
      >
        <Outlet />
      </div>
    </section>
  );
};

export default UserPersonalPagesLayout;
