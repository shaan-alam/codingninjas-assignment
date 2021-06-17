import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

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

export const Nav = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  background: transparent;
  transition: all 0.4s;

  &.sticky {
    background: #2f154c;
  }
`;

export const Bars = styled.a`
  flex: 1;
  display: none;
  cursor: pointer;
  width: 30px;
  height: 40px;
  position: relative;
  z-index: 5;

  span:nth-child(1) {
    transition: transform 0.4s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px 0;
    background: #fff;
    height: 3px;
    width: 30px;
    transform: ${(props) => (props.active === true ? "rotate(45deg)" : "none")};
    transform-origin: left center;
  }
  span:nth-child(2) {
    transition: transform 0.4s ease-in-out;
    position: absolute;
    top: 10px;
    left: 0;
    margin: 10px 0;
    background: #fff;
    height: 3px;
    width: 30px;
    transform: ${(props) => (props.active ? "scaleX(0)" : "scaleX(1)")};
    transform-origin: center;
  }
  span:nth-child(3) {
    transition: transform 0.4s ease-in-out;
    position: absolute;
    top: ${(props) => (props.active ? "20px" : "20px")};
    left: ${(props) => (props.active ? "0px" : "0px")};
    margin: 10px 0;
    background: #fff;
    height: 3px;
    width: 30px;
    transform: ${(props) =>
      props.active === true ? "rotate(-45deg)" : "none"};
    transform-origin: left center;
  }

  @media screen and (max-width: 850px) {
    display: block;
  }
`;

export const NavContainer = styled.div`
  padding: 0.41em 0;
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const MiddleHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  .logo {
    img {
      width: 70px;
    }
  }

  .menu {
    margin-left: 30px;

    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      list-style: none;

      @media screen and (max-width: 850px) {
        display: none;
      }

      &.active {
        @media screen and (max-width: 850px) {
          flex-direction: column;
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          height: 80vh;
          justify-content: flex-start;
          padding: 30px;
          background: #2f154c;
          transition: all 0.4s;
        }
      }

      li {
        color: #fff;
        font-size: 0.8em;
        font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
        margin-right: 20px;
        cursor: pointer;

        @media screen and (max-width: 850px) {
          margin: 20px 0;
        }
      }
    }
  }
`;

const RightContent = styled.div`
  display: flex;
  justify-content: space-between;

  .login-btn {
    cursor: pointer;
    line-height: 22px;
    margin-right: 8px;
    font-weight: 600;
    border-radius: 6px;
    display: inline-block;
    background: #fff1ea;
    padding: 8px 24px;
    border: 0;
    font-size: 13px;
    letter-spacing: 0.3px;
    color: #f9601e;
    font-family: Mulish, Roboto, Helvetica Neue, sans-serif;

    :hover {
      background: #fdc7a9;
    }
  }

  .enroll-btn {
    background-image: linear-gradient(270deg, #f96b24, #ff9100);
    color: #fff;
    font-family: "Roboto", sans-serif;
    min-height: 32px;
    padding: 8px 24px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    display: inline-block;
    width: 130px;
    font-family: Mulish, Roboto, Helvetica Neue, sans-serif;

    :hover {
      background-image: linear-gradient(450deg, #f96b24, #ff9100);
    }

    @media screen and (max-width: 850px) {
      display: none;
    }
  }
`;
