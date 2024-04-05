import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <section className="fonts">
      <Navbar />
      <div 
      >
        <Outlet />
      </div>
    </section>
  );
}
