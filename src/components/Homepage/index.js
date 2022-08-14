import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Root, Content } from "./Homepage.style";

export default function Homepage() {
  return (
    <Root>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Root>
  );
}
