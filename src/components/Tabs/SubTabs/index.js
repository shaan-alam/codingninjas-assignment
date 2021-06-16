import { useParams } from "react-router-dom";
import { SubCategories, SubCategory } from "./SubTabs.sc";

const SubTabs = () => {
  const { event_category, event_sub_category } = useParams();

  return (
    <SubCategories>
      <SubCategory
        to={`/${event_category}/Upcoming`}
        active={event_sub_category === "Upcoming"}
      >
        Upcoming
      </SubCategory>
      <SubCategory
        to={`/${event_category}/Archived`}
        active={event_sub_category === "Archived"}
      >
        Archived
      </SubCategory>
      <SubCategory
        to={`/${event_category}/ALL_TIME_FAVORITES`}
        active={event_sub_category === "ALL_TIME_FAVORITES"}
      >
        All Time Favourite
      </SubCategory>
    </SubCategories>
  );
};

export default SubTabs;
