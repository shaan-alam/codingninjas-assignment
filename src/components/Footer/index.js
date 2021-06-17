import styled from "styled-components";
import {
  LogoInstagram,
  LogoFacebook,
  LogoYoutube,
  LogoTwitter,
  LogoLinkedin,
  LogoTelegram,
  LogoCall,
} from "react-ionicons";
import { FooterWrapper, Container, Grid, Col } from "./Footer.sc";

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
            <h4>Products</h4>
            <ul>
              <li>
                <a href="#!">Courses</a>
              </li>
              <li>
                <a href="#!">Try courses for Free</a>
              </li>
              <li>
                <a href="#!">Career Camp</a>
              </li>
              <li>
                <a href="#!">Hire Talent</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Community</h4>
            <ul>
              <li>
                <a href="#!">CodeStudio</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Events</a>
              </li>
              <li>
                <a href="#!">Campus Ninja</a>
              </li>
              <li>
                <a href="#!">Affiliate</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Follow us on</h4>
            <div className="social-links">
              <a href="#!">
                <LogoFacebook color="#fff" />
              </a>
              <a href="#!">
                <LogoInstagram color="#fff" />
              </a>
              <a href="#!">
                <LogoYoutube color="#fff" />
              </a>
              <a href="#!">
                <LogoTwitter color="#fff" />
              </a>
              <a href="#!">
                <LogoLinkedin color="#fff" />
              </a>
              <a href="#!"></a>
            </div>
            <div className="contacts">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="#!">Phone: 1800-123-3598</a>
                </li>
                <li>
                  <a href="#!">Email: contact@codingninjas.com</a>
                </li>
              </ul>
            </div>
          </Col>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
