import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

const SubTabs = () => {
  const { event_category, event_sub_category } = useParams();

  return (
    <SubCategories>
      <SubCategory
        to={`/${event_category}/Upcoming`}
        active={event_sub_category === "Upcoming"}
      >
        Upcoming
      </SubCategory>
      <SubCategory
        to={`/${event_category}/Archived`}
        active={event_sub_category === "Archived"}
      >
        Archived
      </SubCategory>
      <SubCategory
        to={`/${event_category}/ALL_TIME_FAVORITES`}
        active={event_sub_category === "ALL_TIME_FAVORITES"}
      >
        All Time Favourite
      </SubCategory>
    </SubCategories>
  );
};

export default SubTabs;

const SubCategories = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 14px 24px;
  background: #fafafa;
  margin-bottom: 34px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  overflow-x: auto;
`;

const SubCategory = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-right: 25px;
  white-space: nowrap;
  color: ${(props) => (props.active ? "#fa7328" : "rgba(0, 0, 0, 0.6)")};
`;
