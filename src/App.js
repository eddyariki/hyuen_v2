import React from "react";
import ResponsiveHome from "./components/home/ResponsiveHome";
import Monolith from "./components/desktop/albums/Monolith";
// import { createGlobalStyle } from "styled-components";
import GlobalStyle from "./global.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={ResponsiveHome} exact />
        <Route path="/monolith" exact component={Monolith} />
      </Switch>
    </Router>
  );
}
