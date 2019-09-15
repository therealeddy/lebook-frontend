import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "../assets/css/";
import "react-circular-progressbar/dist/styles.css";

import Login from "../pages/Login/";
import Register from "../pages/Register/";
import Browse from "../pages/Browse";

export default function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/browse" component={Browse} />
      </Switch>
    </BrowserRouter>
  );
}
