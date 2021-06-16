import styled from "styled-components";

export const CardContainer = styled.div`
  width: 50%;
  flex: 1 1 0;
  height: fit-content;
  margin: 18px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 19px 0 rgba(0, 0, 0, 0.07);
  cursor: pointer;
  font-family: Mulish,Roboto,Helvetica Neue,sans-serif;
}
`;

export const CardCover = styled.div`
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 18px;
`;

export const CardHeading = styled.div`
  width: 100%;

  h3 {
    font-weight: 500;
  }
`;

export const CardInfo = styled.div`
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

    @media screen and (max-width: 720px) {
      p {
        font-size: 11px;
      }
    }
  }
`;

export const CardDescription = styled.div`
  margin-top: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  height: 57px;
  line-height: 19px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardTags = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 64px;
`;

export const Tag = styled.div`
  height: fit-content;
  margin-right: 8px;
  margin-bottom: 8px;
  color: #616161;
  font-size: 12px;
  padding: 4px 14px;
  background: #eee;
  border-radius: 3px;
`;

export const CardFooter = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.09153);
  padding: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
