import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./assets/css/style.css";
import 'react-circular-progressbar/dist/styles.css';
import Views from "./views";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Routes from "./routes";
const { Dashboard } = Views;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Routes.RouteWithSidebar
          path={"/dashboard/:id"}
          component={<Dashboard />}
        />
        <Route exact path="/">
          <Redirect to="/dashboard/1" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")

);