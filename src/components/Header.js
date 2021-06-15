import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Heading>
        <h1>Events & News</h1>
      </Heading>
      <SubHeading>
        <h3>Learn, Compete and Grow</h3>
      </SubHeading>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 3em 0;
  position: relative;
`;

const Heading = styled.div`
  margin-bottom: 8px;
  width: 100%;

  h1 {
    font-size: 200%;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: #fff;
    font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
  }
`;

const SubHeading = styled.div`
  h3 {
    color: #fff;
    font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
  }
`;
