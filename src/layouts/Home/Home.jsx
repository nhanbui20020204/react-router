import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-1/6 bg-[#08948c]">
        <Navbar />
      </nav>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
