import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import TopLoader from "react-top-loader";

const CardContainer = ({ match }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { event_category, event_sub_category } = useParams();

  useEffect(() => {
    let URL = `https://api.codingninjas.com/api/v3/events?event_category=${event_category?.toUpperCase()}&event_sub_category=${event_sub_category}&tag_list=&offset=`;

    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setEvents(res.data.events);
        setIsLoading(false);
      });
  }, [event_category, event_sub_category]);

  return (
    <EventsCardContainer>
      {isLoading && <TopLoader show color="#fa7328" className="top-loader" />}
      {events?.length > 0 ? (
        <Cards events={events} />
      ) : (
        <EventError>No events found</EventError>
      )}
    </EventsCardContainer>
  );
};

export default CardContainer;

const EventsCardContainer = styled.div`
  ${"" /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1.4em; */}
  display: flex;
  flex-wrap: wrap;
`;

const EventError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Mulish,Roboto,Helvetica Neue,sans-serif
  font-size: 300%;
  text-align: center;
  font-wight: 600;
  margin-left: 50px;
`;
