import Card from "./Card";

const Cards = ({ events }) => {
  return (
    <>
      {events.map((event) => (
        <Card key={event.id} event={event} />
      ))}
    </>
  );
};

export default Cards;
