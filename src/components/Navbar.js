import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <MiddleHeader>
          <div className="logo">
            <img src="./images/logo.svg" alt="Logo" />
          </div>
          <div className="menu">
            <ul>
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
  position: relative;
  z-index: 2;
  background: transparent;
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

      li {
        color: #fff;
        font-size: 0.8em;
        font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
        margin-right: 20px;
        cursor: pointer;
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
  }
`;
