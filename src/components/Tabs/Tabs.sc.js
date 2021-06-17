import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const EventTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 20px 24px;
  background: #faf7f2;
  overflow-x: auto;
`;

export const Tab = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 19px;
  margin-right: 20px;
  color: ${(props) => (props.active ? "#fa7328" : "rgba(0, 0, 0, 0.6)")};
  white-space: nowrap;

  img {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }

  &.selected {
    color: #fa7328;
  }
`;
