import { useParams } from "react-router-dom";
import { EventTabs, Tab } from "./Tabs.sc";

const Tabs = () => {
  const { event_category } = useParams();

  return (
    <EventTabs>
      <Tab
        to="/all_events/Upcoming/?tag_list="
        active={event_category === "all_events"}
      >
        All Events
      </Tab>
      <Tab
        to="/webinars/Upcoming/?tag_list="
        active={event_category === "webinars"}
      >
        Webinars
      </Tab>
      <Tab
        to="/coding_events/Upcoming/?tag_list="
        active={event_category === "coding_events"}
      >
        CodingEvents
      </Tab>
      <Tab
        to="/bootcamp_events/Upcoming/?tag_list="
        active={event_category === "bootcamp_events"}
      >
        Bootcamp Events
      </Tab>
      <Tab
        to="/workshop/Upcoming/?tag_list="
        active={event_category === "workshop"}
      >
        Workshops
      </Tab>
    </EventTabs>
  );
};

export default Tabs;
