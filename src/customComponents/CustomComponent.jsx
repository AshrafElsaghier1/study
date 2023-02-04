import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./CustomComponent.scss";
const CustomComponent = ({ children, text, text1, link }) => {
  return (
    <div className="custom__inner">
      <h2 className="mb-3">{children} </h2>
      <p className="mb-0"> {text} </p>
      <p className="mb-3">{text1}</p>
      <div className="custom__btn-container">
        <Link to="/">
          {link}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CustomComponent;
