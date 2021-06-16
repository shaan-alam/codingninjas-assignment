import Moment from "react-moment";
import { v4 } from "uuid";

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
  return (
    <CardContainer>
      <CardCover>
        <img src={event.mobile_cover_picture} alt={event.name} />
      </CardCover>
      <CardContent>
        <CardHeading>
          <h3>{event.name}</h3>
        </CardHeading>
        <CardInfo>
          <div>
            <p>Starts on</p>
            <p>
              <Moment format="D MMM YYYY">{event.event_start_time}</Moment>
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
                  src={user.image_url ? user.image_url : "/images/user.png"}
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
        <div className="register-link">
          <a href="#!">Register Now</a>
        </div>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
