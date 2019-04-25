import React from "react";

import { Route } from "react-router-dom";

import AppBar from "./AppBar";
import SideDrawer from "./SideDrawer";
import Content from "./Content";
import Stories from "./Stories";

const CyoaApp = () => (
  <div style={{ display: "flex" }}>
    <AppBar title="Storytime" />
    <SideDrawer />
    <Content>
      <Route path="/stories" component={Stories} />
    </Content>
  </div>
);

export default CyoaApp;
