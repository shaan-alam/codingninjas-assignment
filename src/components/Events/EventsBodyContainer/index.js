import { Switch, Route } from "react-router-dom";
import Tabs from "../../Tabs/index";
import SubTabs from "../../Tabs/SubTabs/index";
import TagsContainer from "../../TagsContainer/index";
import CardContainer from "../../CardContainer/index";

import { EventsBody } from "./EventsBodyContainer.sc";

const EventsBodyContainer = () => {
  return (
    <>
      <Tabs />
      <SubTabs />
      <EventsBody>
        <Switch>
          <Route
            path={`/:event_category/:event_sub_category/`}
            component={CardContainer}
          />
        </Switch>
        <TagsContainer />
      </EventsBody>
    </>
  );
};

export default EventsBodyContainer;
