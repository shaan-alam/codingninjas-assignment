import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #1c0d04;
  padding: 50px 20px;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.8em;
`;

export const Col = styled.div`
  .logo {
    width: 80%;
  }

  h4 {
    margin-bottom: 20px;
    color: #fff;
    text-transform: uppercase;
    font-family: Mulish, Helvetica, Arial, sans-serif;
    font-weight: bolder;
  }

  .social-links a {
    margin-right: 20px;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 18px;
      font-weight: 400;
      font-family: Mulish, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 14px;
      white-space: nowrap;

      a {
        color: #fff;
        text-decoration: none;
        padding-bottom: 10px;
        position: relative;
        transition: all 0.4s;

        :after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #ff783c;
          transform: scaleX(0);
          transform-origin: left;
          transition: all 0.4s;
        }

        :hover {
          color: #ff783c;
        }

        :hover:after {
          transform: scaleX(1);
        }
      }
    }
  }
`;
