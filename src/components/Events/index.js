import { Switch, Route } from "react-router-dom";
import EventsBodyContainer from "./EventsBodyContainer/index";

import { EventsContainer } from "./Events.sc";

const Events = () => {
  return (
    <EventsContainer>
      <Switch>
        <Route
          path="/:event_category/:event_sub_category/"
          component={EventsBodyContainer}
        />
      </Switch>
    </EventsContainer>
  );
};

export default Events;
