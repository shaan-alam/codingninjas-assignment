import styled from "styled-components";

export const EventsCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 18px;
`;

export const EventError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mulish", Roboto, Helvetica Neue, sans-serif;
  font-size: 300%;
  text-align: center;
  font-wight: 600;
  margin-left: 50px;
`;
