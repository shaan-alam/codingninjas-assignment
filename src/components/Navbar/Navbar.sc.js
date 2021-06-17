import styled from "styled-components";

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
  align-items: center;

  .enroll-btn {
    background-image: linear-gradient(270deg, #f96b24, #ff9100);
    color: #fff;
    height: fit-content;
    font-family: "Roboto", sans-serif;
    min-height: 32px;
    padding: 10px 24px;
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

export const MiddleHeader = styled.div`
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
      align-items: center;
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

        li {
          width: fit-content;
          height: 40px;

          button {
            display: block;
          }
        }
      }

      li {
        font-size: 12px;
        margin-right: 20px;

        a {
          height: 55px;
          color: #fff;
          padding: 15px;
          font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
          text-decoration: none;
        }

        button {
          display: none;
        }

        @media screen and (max-width: 850px) {
          margin: 20px 0;
        }

        a:not(button):hover {
          border-image-slice: 1;
          border-style: solid;
          border-width: 0 0 4px;
          border-image-source: linear-gradient(90deg, #fa7328, #ee9f15);
        }
      }
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: space-between;

  .login-btn {
    cursor: pointer;
    height: fit-content;
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
    @media screen and (max-width: 850px) {
      display: none;
    }
  }
`;
