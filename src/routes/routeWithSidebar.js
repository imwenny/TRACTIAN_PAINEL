import React, { useState,createContext } from "react";
import Components from "./../components";
import { Route } from "react-router-dom";
import {Slide,Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const { Sidebar } = Components;
export default function RouteWithSidebar(props) {

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Route {...props}>
      <Components.Navbar setShowSidebar={setShowSidebar} />
      {props.component}
      {
        showSidebar
        &&
        <Components.Sidebar/>
      }
    </Route>
  );

}