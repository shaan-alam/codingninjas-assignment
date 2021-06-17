import styled from "styled-components";

export const LinksWrapper = styled.div`
  background: #fff;
`;

export const LinksContainer = styled.div`
  margin: auto;
  width: 90%;
  padding: 50px 20px;

  h3 {
    color: #000;
    font-family: Mulish, Helvetica, Arial, sans-serif;
    margin-bottom: 30px;
  }

  p {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

    h6 {
      font-family: Mulish, Helvetica, Arial, sans-serif;
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    a {
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.5);
      text-decoration: none;
      padding-bottom: 4px;
      font-family: Mulish, Helvetica, Arial, sans-serif;
      font-size: 10px;
      display: inline;
      position: relative;
      transition: all 0.4s;

      :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
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
`;
