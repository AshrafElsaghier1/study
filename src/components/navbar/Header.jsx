import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import { linksList } from "../../dummyData/dummyData";
import "./header.scss";
const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      sticky="top"
      expand="lg"
      id="header__navbar"
      className={` navbar__container w-100  ${active ? "active" : ""}`}
    >
      <Container className="h-100">
        <div className="logo">
          <NavLink to="/study" className="logo__link">
            <h2 className="mb-0">
              St<span>v</span> dy
            </h2>
          </NavLink>
        </div>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className="menubar border-0 d-flex d-lg-none justify-content-around align-items-center flex-column"
        >
          <span> </span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          className="offcanvasNavbar__container"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-lg`}
              className="offcanvas__title"
            >
              <div className="logo">
                <NavLink to="/study" className="logo__link">
                  <h2 className="mb-0">
                    St<span>v</span> dy
                  </h2>
                </NavLink>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=" mt-3 mt-lg-0">
            <Nav className="justify-content-center flex-grow-1 pe-3 gap-3 align-items-lg-center">
              {linksList.map(({ link, id }) => (
                <NavLink
                  key={id}
                  to="/study"
                  className="d-flex align-items-start align-items-lg-center "
                >
                  {link}
                </NavLink>
              ))}
            </Nav>
            <Nav className="link__btn-container mt-2 mt-lg-0">
              <Link to="/study" className="d__flex-center link__btn-btn  w-100">
                About us
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
