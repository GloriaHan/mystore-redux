import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { Root } from "./Contents.style";

export default function Contents() {
  return (
    <Root>
      <Sidebar />
      <Outlet />
    </Root>
  );
}
