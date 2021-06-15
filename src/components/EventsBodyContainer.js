import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import CardContainer from "./CardContainer";
import Tabs from "./Tabs";
import SubTabs from "./SubTabs";

const EventsBodyContainer = () => {
  return (
    <>
      <Tabs />
      <SubTabs />
      <EventsBody>
        <Switch>
          <Route
            path={`/:event_category/:event_sub_category`}
            component={CardContainer}
          />
        </Switch>
        <TagsContainer>
          <h3>Tags</h3>
          <Tags>
            <Tag>Interview Preparation</Tag>
            <Tag>Contest Solutions</Tag>
            <Tag>Competitive Programming</Tag>
            <Tag>Futuristic tech</Tag>
            <Tag>Coding Concepts</Tag>
            <Tag>Coding Concepts</Tag>
            <Tag>Coding Guidance</Tag>
            <Tag>Web Development</Tag>
            <Tag>Android</Tag>
            <Tag>Machine Learning</Tag>
            <Tag>GSoC</Tag>
            <Tag>Placements</Tag>
          </Tags>
        </TagsContainer>
      </EventsBody>
    </>
  );
};

export default EventsBodyContainer;

const EventsBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const TagsContainer = styled.div`
  padding: 18px;
  width: 300px;

  h3 {
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  cursor: pointer;
  display: inline-block;
  height: -moz-fit-content;
  margin-right: 8px;
  margin-bottom: 8px;
  color: #616161;
  font-size: 12px;
  padding: 8px 14px;
  background: #eee;
  font-family: Mulish, Roboto, Helvetica Neue, sans-serif;
  border-radius: 3px;
`;
