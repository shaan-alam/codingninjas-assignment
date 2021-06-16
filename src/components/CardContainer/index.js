import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import TopLoader from "react-top-loader";
import queryString from "query-string";
import Card from "../Card";
import { EventsCardContainer, EventError } from "./CardContainer.sc";

const CardContainer = ({ match }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { event_category, event_sub_category } = useParams();
  const { search } = useLocation();

  useEffect(() => {
    const { tag_list } = queryString.parse(search);
    const URL = `https://api.codingninjas.com/api/v3/events?event_category=${event_category?.toUpperCase()}&event_sub_category=${event_sub_category}&tag_list=${tag_list}&offset=`;

    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setEvents(res.data.events);
        setIsLoading(false);
      });
  }, [event_category, event_sub_category, search]);

  return (
    <EventsCardContainer>
      {isLoading && <TopLoader show color="#fa7328" className="top-loader" />}
      {events?.length > 0 ? (
        <>
          {events.map((event) => (
            <Card key={event.id} event={event} />
          ))}
        </>
      ) : (
        <EventError>No events found</EventError>
      )}
    </EventsCardContainer>
  );
};

export default CardContainer;
