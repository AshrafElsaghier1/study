import React from "react";
import CustomComponent from "../../customComponents/CustomComponent";
import Banner from "../banner/Banner";
import BusinessComp from "../businesscomp/BusinessComp";
import Clients from "../clients/Clients";
import PlatformOverviewComp from "../overview/PlatformOverviewComp";
import Report from "../report/Report";
import SolutionsComp from "../solutionComp/SolutionsComp";
import TechnoComp from "../technoComp/TechnoComp";

const LayoutComponent = () => {
  return (
    <>
      <Banner />
      <Clients />
      <SolutionsComp />
      <Report />
      <PlatformOverviewComp />
      <TechnoComp />
      <BusinessComp />
    </>
  );
};

export default LayoutComponent;
