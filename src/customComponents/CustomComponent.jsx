import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./CustomComponent.scss";
const CustomComponent = ({ children, text, text1, link, button }) => {
  return (
    <div className="custom__inner">
      <h2 className={`${button ? "" : "heading"} mb-3`}>{children} </h2>
      <span className="mb-0 d-block"> {text} </span>
      <span className="mb-3">{text1}</span>

      {button ? (
        <Link to="/study" className="link__btn d__flex-center ">
          About us
        </Link>
      ) : (
        <div className="custom__btn-container mt-2">
          <Link to="/study">
            {link}
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CustomComponent;
