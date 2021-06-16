import styled from "styled-components";

export const TagsWrapper = styled.div`
  padding: 18px;
  width: 320px;

  h3 {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
