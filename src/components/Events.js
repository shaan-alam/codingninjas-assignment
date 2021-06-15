import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import EventsBodyContainer from "./EventsBodyContainer";

const Events = () => {
  return (
    <EventsContainer>
      <Switch>
        <Route
          path="/:event_category/:event_sub_category"
          component={EventsBodyContainer}
        />
      </Switch>
    </EventsContainer>
  );
};

export default Events;

// https://api.codingninjas.com/api/v3/event_tags
// https://api.codingninjas.com/api/v3/events

const EventsContainer = styled.div`
  position: relative;
  z-index: 2;
  background: #fff;
  width: 80%;
  margin: 100px auto;
  border-radius: 6px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
