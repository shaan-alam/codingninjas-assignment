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
        to="/webinar/Upcoming/?tag_list="
        active={event_category === "webinar"}
      >
        <img
          src={`/images/${
            event_category === "webinar"
              ? "webinar-selected"
              : "webinar-unselected"
          }.svg`}
          alt=""
        />
        Webinars
      </Tab>
      <Tab
        to="/coding_event/Upcoming/?tag_list="
        active={event_category === "coding_event"}
      >
        <img
          src={`/images/${
            event_category === "coding_event"
              ? "coding-events-selected"
              : "coding-events-unselected"
          }.svg`}
          alt=""
        />
        CodingEvents
      </Tab>
      <Tab
        to="/bootcamp_event/Upcoming/?tag_list="
        active={event_category === "bootcamp_event"}
      >
        <img
          src={`/images/${
            event_category === "bootcamp_event"
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
