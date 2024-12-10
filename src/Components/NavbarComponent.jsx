import React, { useState, useEffect } from "react";
import "../styles/Navbar.css"; // Keep your existing CSS as is
import logo from "../assets/logo.png"; // Import your logo as before

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="navbar-container">
      <div id="navbar-background"></div>

      <div id="navbar-logo-image">
        <img src={logo} alt="Logo" />
      </div>

      <div id="navbar-items">
        <div id="navbar-item-home">Home</div>
        <div id="navbar-item-why-us">Why Us</div>
        <div id="navbar-item-fleet">Fleet</div>
        <div id="navbar-item-about">About</div>
        <div id="navbar-item-policies">Policies</div>
        <div id="navbar-item-policies">Policies</div>

        <div className="menu">
          <div className="item">
            <a href="#" className="link">
              <span>More</span>
              <svg viewBox="0 0 360 360" xmlSpace="preserve">
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
            </a>

            <div className="submenu">
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  Development
                </a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  Design
                </a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  Marketing
                </a>
              </div>
              <div className="submenu-item">
                <a href="#" className="submenu-link">
                  SEO
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="navbar-item-us">Contact Us</div>
      </div>

      {isMobile && (
        <div
          id="hamburger-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          &#9776;
        </div>
      )}

      {isMobile && (
        <div id="mobile-menu" className={isMenuOpen ? "show" : ""}>
          <div id="mobile-item-home">Home</div>
          <div id="mobile-item-why-us">Why Us</div>
          <div id="mobile-item-fleet">Fleet</div>
          <div id="mobile-item-about">About</div>
          <div id="mobile-item-policies">Policies</div>
          <div id="mobile-item-more">More</div>
          <div id="mobile-item-us">Contact Us</div>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
