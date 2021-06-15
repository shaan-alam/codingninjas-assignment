import styled from "styled-components";

const Card = ({ event }) => {
  return (
    <CardContainer>
      <CardCover>
        <img src={event.cover_picture} alt="Card Cover" />
      </CardCover>
      <CardContent>
        <CardHeading>
          <h3>{event.name}</h3>
        </CardHeading>
        <CardInfo>
          <div>
            <p>Starts on</p>
            <p>09:00 PM, 19 Jun 2021</p>
          </div>
          <div>
            <p>Entry Fee</p>
            <p>INR 99</p>
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
                  key={user.image_url}
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

const CardContainer = styled.div`
  width: 50%;
  flex: 1 1 0;
  margin: 18px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 19px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
  font-family: Mulish,Roboto,Helvetica Neue,sans-serif
}
`;

const CardCover = styled.div`
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
  }
`;

const CardContent = styled.div`
  padding: 18px;
`;

const CardHeading = styled.div`
  width: 100%;

  h3 {
    font-weight: 500;
  }
`;

const CardInfo = styled.div`
  display: flex;
  margin-top: 9px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0915);
  padding: 9px 0;

  div {
    width: 33.33%;

    p:nth-child(1) {
      color: rgba(0, 0, 0, 0.7);
      font-size: 13px;
      margin-bottom: 6px;
    }
  }
`;

const CardDescription = styled.div`
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 19px;
`;

const CardTags = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 64px;
`;

const Tag = styled.div`
  height: -moz-fit-content;
  margin-right: 8px;
  margin-bottom: 8px;
  color: #616161;
  font-size: 12px;
  padding: 4px 14px;
  background: #eee;
  border-radius: 3px;
`;

const CardFooter = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.09153);
  padding: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: auto;

  .registered-users {
    display: flex;
    flex-direction: column;
    flex: 1.5;

    .profile-pic-container {
      display: flex;
      justify-content: flex-start;
      margin-bottom: px;

      img {
        height: 20px;
        width: 20px;
        border-radius: 100%;
        margin-right: 8px;
      }
    }

    .other-info {
      color: rgba(0, 0, 0, 0.5);
      font-size: 12px;
      margin-top: 10px;

      strong {
        color: #000;
      }
    }
  }

  .register-link {
    flex: 0.4;
    margin-left: auto;

    a {
      display: inline-block;
      white-space: nowrap;
      color: #eee;
      background-image: linear-gradient(90deg, #fa7328, #ee9f15);
      border-radius: 3px;
      border: none;
      text-transform: uppercase;
      padding: 10px 24px;
      text-decoration: none;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
