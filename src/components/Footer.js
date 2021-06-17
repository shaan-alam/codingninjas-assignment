import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Col>
            <img
              src="/images/cn-logo-dark-9824.svg"
              className="logo"
              alt="Logo"
            />
          </Col>
          <Col>
            <h4>Coding Ninjas</h4>
            <ul>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Terms & Condition</a>
              </li>
              <li>
                <a href="#!">Pricing & Refund Policy</a>
              </li>
              <li>
                <a href="#!">Bug Bounty</a>
              </li>
              <li>
                <a href="#!">Customers</a>
              </li>
              <li>
                <a href="#!">Press Release</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Coding Ninjas</h4>
            <ul>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Terms & Condition</a>
              </li>
              <li>
                <a href="#!">Pricing & Refund Policy</a>
              </li>
              <li>
                <a href="#!">Bug Bounty</a>
              </li>
              <li>
                <a href="#!">Customers</a>
              </li>
              <li>
                <a href="#!">Press Release</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Coding Ninjas</h4>
            <ul>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Terms & Condition</a>
              </li>
              <li>
                <a href="#!">Pricing & Refund Policy</a>
              </li>
              <li>
                <a href="#!">Bug Bounty</a>
              </li>
              <li>
                <a href="#!">Customers</a>
              </li>
              <li>
                <a href="#!">Press Release</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Coding Ninjas</h4>
            <ul>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Terms & Condition</a>
              </li>
              <li>
                <a href="#!">Pricing & Refund Policy</a>
              </li>
              <li>
                <a href="#!">Bug Bounty</a>
              </li>
              <li>
                <a href="#!">Customers</a>
              </li>
              <li>
                <a href="#!">Press Release</a>
              </li>
            </ul>
          </Col>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

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

  ul {
    list-style: none;

    li {
      margin-bottom: 18px;
      font-weight: 400;
      font-family: Mulish, Helvetica, Arial, sans-serif;
      font-weight: 400;

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
