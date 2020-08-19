import React from "react";

import Aux from "../../hoc/Aux";
import classes from "./components/Layout/Layout";
const layout = props => (
  <Aux>
    <div className={classes.Content}>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
