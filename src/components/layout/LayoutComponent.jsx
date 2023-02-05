import React from "react";
import Banner from "../banner/Banner";
import BusinessComp from "../businesscomp/BusinessComp";
import Clients from "../clients/Clients";
import { Features } from "../features/Features";
import Footer from "../footer/Footer";
import PlatformOverviewComp from "../overview/PlatformOverviewComp";
import Report from "../report/Report";
import SolutionsComp from "../solutionComp/SolutionsComp";
import TechnoComp from "../technoComp/TechnoComp";
import Testimonial from "../testimonial/Testimonial";

const LayoutComponent = () => {
  return (
    <>
      <Banner />
      <Clients />
      <SolutionsComp />
      <Report />
      <PlatformOverviewComp />
      {/* <TechnoComp /> */}
      <BusinessComp />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
};

export default LayoutComponent;
