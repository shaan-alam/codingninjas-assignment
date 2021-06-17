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
        <img
          src={`/images/${
            event_category === "all_events"
              ? "all-events-selected"
              : "all-events-unselected"
          }.svg`}
          alt=""
        />
        All Events
      </Tab>
      <Tab
        to="/webinars/Upcoming/?tag_list="
        active={event_category === "webinars"}
      >
        <img
          src={`/images/${
            event_category === "webinars"
              ? "webinar-selected"
              : "webinar-unselected"
          }.svg`}
          alt=""
        />
        Webinars
      </Tab>
      <Tab
        to="/coding_events/Upcoming/?tag_list="
        active={event_category === "coding_events"}
      >
        <img
          src={`/images/${
            event_category === "coding_events"
              ? "coding-events-selected"
              : "coding-events-unselected"
          }.svg`}
          alt=""
        />
        CodingEvents
      </Tab>
      <Tab
        to="/bootcamp_events/Upcoming/?tag_list="
        active={event_category === "bootcamp_events"}
      >
        <img
          src={`/images/${
            event_category === "bootcamp_events"
              ? "bootcamp_events_selected"
              : "bootcamp_events_unselected"
          }.png`}
          alt=""
        />
        Bootcamp Events
      </Tab>
      <Tab
        to="/workshop/Upcoming/?tag_list="
        active={event_category === "workshop"}
      >
        <img
          src={`/images/${
            event_category === "workshop"
              ? "workshop_selected"
              : "workshop_unselected"
          }.png`}
          alt=""
        />
        Workshops
      </Tab>
    </EventTabs>
  );
};

export default Tabs;
