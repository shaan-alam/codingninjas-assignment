import { useState, useEffect, useRef } from "react";
import {
  Nav,
  NavContainer,
  Bars,
  MiddleHeader,
  RightContent,
} from "./Navbar.sc";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [sticky, setSticky] = useState({ sticky: false, offset: 0 });
  const navRef = useRef();

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ sticky: true, offset: elHeight });
    } else {
      setSticky({ sticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    var nav = navRef.current.getBoundingClientRect();

    const handleScrollEvent = () => {
      handleScroll(nav.top, nav.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [sticky]);

  return (
    <Nav className={`navbar ${sticky.sticky ? "sticky" : ""}`} ref={navRef}>
      <NavContainer>
        <Bars active={active} onClick={() => setActive(!active)}>
          <span></span>
          <span></span>
          <span></span>
        </Bars>
        <MiddleHeader>
          <div className="logo">
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          <div className="menu">
            <ul className={`${active ? "active" : ""}`}>
              <li>Home</li>
              <li>Courses</li>
              <li>Practice</li>
              <li>Events</li>
              <li>Campus Ninjas</li>
              <li>Blog</li>
              <li>
                <button className="enroll-btn">Enroll Now</button>
              </li>
            </ul>
          </div>
        </MiddleHeader>
        <RightContent>
          <button className="login-btn">Login</button>
          <button className="enroll-btn">Enroll Now</button>
        </RightContent>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
