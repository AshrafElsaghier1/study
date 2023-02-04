import React from "react";
import CustomComponent from "../../customComponents/CustomComponent";
import Banner from "../banner/Banner";
import Clients from "../clients/Clients";
import SolutionsComp from "../solutionComp/SolutionsComp";

const LayoutComponent = () => {
  return (
    <>
      <Banner />
      <Clients />
      <SolutionsComp />
    </>
  );
};

export default LayoutComponent;
