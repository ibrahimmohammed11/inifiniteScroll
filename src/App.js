import React, { Component, Fragment } from "react";

import "./App.css";
// import InifinteScrolling from "./Components/InifinteScrolling";
import Pagination from "./Components/Pagination";
// import SeeMore from "./Components/SeeMore";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <SeeMore /> */}
        {/* <InifinteScrolling /> */}
        <Pagination itemsPerPage={4} />
      </Fragment>
    );
  }
}
