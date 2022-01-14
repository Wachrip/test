import React from "react";

import "./main.scss";
import TechContainer from "../techsType/techsContainer";
import { PagesContainer } from "../pages/pagesContainer";

const Main = () => {
  return (
    <div className="Main">
      <TechContainer />
      {/* <PagesContainer /> */}
    </div>
  );
};

export default Main;
