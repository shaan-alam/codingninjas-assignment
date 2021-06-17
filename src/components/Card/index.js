import { useState, useEffect } from "react";
import Moment from "react-moment";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import {
  CardContainer,
  CardCover,
  CardContent,
  CardHeading,
  CardInfo,
  CardDescription,
  CardTags,
  CardFooter,
  Tag,
} from "./Card.sc";

const Card = ({ event }) => {
  const [isDateInPast, setIsDateInPast] = useState(false);
  const { event_sub_category } = useParams();

  useEffect(() => {
    if (event_sub_category === "Archived") {
      setIsDateInPast(true);
    }
  }, [setIsDateInPast, event_sub_category]);

  return (
    <CardContainer
      href={`https://www.codingninjas.com/v2/events/${event.slug}`}
    >
      <CardCover>
        {event.mobile_cover_picture !== null ? (
          <img src={event.mobile_cover_picture} alt={event.name} />
        ) : (
          <div className="glass-cover"></div>
        )}
      </CardCover>
      <CardContent>
        <CardHeading>
          <h3>{event.name}</h3>
        </CardHeading>
        <CardInfo>
          <div>
            <p>Starts on</p>
            <p>
              <Moment format="D MMM YYYY">{event.start_time}</Moment>
            </p>
          </div>
          <div>
            <p>Entry Fee</p>
            <p>{event.fees > 0 ? `${event.currency} ${event.fees}` : "FREE"}</p>
          </div>
          <div>
            <p>Venue</p>
            <p>Online, CodeZen</p>
          </div>
        </CardInfo>
        <CardDescription>
          <p>{event.short_desc}</p>
        </CardDescription>
        <CardTags>
          {event.card_tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </CardTags>
      </CardContent>
      <CardFooter>
        {event.registered_users.top_users.length > 0 && (
          <div className="registered-users">
            <div className="profile-pic-container">
              {event.registered_users.top_users.map((user) => (
                <img
                  key={v4()}
                  src={
                    user.image_url !== null
                      ? user.image_url
                      : "/images/user.png"
                  }
                  onError={(e) => (e.target.src = "/images/user.png")}
                  alt={user.name}
                />
              ))}
            </div>
            <div className="other-info">
              <p>
                and <strong>{event.registered_users.other_users_count}</strong>{" "}
                and others are participating
              </p>
            </div>
          </div>
        )}
        {!isDateInPast && (
          <div className="register-link">
            <a
              href={`https://www.codingninjas.com/v2/events/${event.slug}`}
              href="#!"
            >
              Register Now
            </a>
          </div>
        )}
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
