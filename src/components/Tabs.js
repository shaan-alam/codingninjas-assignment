import styled from "styled-components";
import { NavLink, useLocation, useParams } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();
  const { event_category } = useParams();

  return (
    <EventTabs>
      <Tab to="/all_events/Upcoming" active={event_category === "all_events"}>
        All Events
      </Tab>
      <Tab to="/webinars/Upcoming" active={event_category === "webinars"}>
        Webinars
      </Tab>
      <Tab
        to="/coding_events/Upcoming"
        active={event_category === "coding_events"}
      >
        CodingEvents
      </Tab>
      <Tab
        to="/bootcamp_events/Upcoming"
        active={event_category === "bootcamp_events"}
      >
        Bootcamp Events
      </Tab>
      <Tab to="/workshop/Upcoming" active={event_category === "workshop"}>
        Workshops
      </Tab>
    </EventTabs>
  );
};

export default Tabs;

const EventTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 20px 24px;
  background: #faf7f2;
  overflow-x: auto;
`;

const Tab = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-right: 20px;
  color: ${(props) => (props.active ? "#fa7328" : "rgba(0, 0, 0, 0.6)")};
  white-space: nowrap;

  &.selected {
    color: #fa7328;
  }
`;
