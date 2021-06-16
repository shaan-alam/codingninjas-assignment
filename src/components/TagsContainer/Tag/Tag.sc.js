import styled from "styled-components";

export const TagWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  height: -moz-fit-content;
  margin-right: 8px;
  margin-bottom: 8px;
  color: ${(props) => (props.selected ? "#fff" : "#616161")};
  font-size: 12px;
  padding: 8px 14px;
  background: ${(props) => (props.selected ? "#fa7328" : "#eee")};
  font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
  border-radius: 3px;
`;
