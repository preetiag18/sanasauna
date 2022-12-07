import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";

const Main = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Main;
