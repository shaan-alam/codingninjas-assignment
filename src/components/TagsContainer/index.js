import { useState, useEffect } from "react";
import Tag from "./Tag/index";
import { v4 } from "uuid";

import { TagsWrapper, Tags } from "./Tags.sc";

const TagsContainer = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://api.codingninjas.com/api/v3/event_tags")
      .then((res) => res.json())
      .then((res) => setTags(res.data.tags));
  }, []);

  return (
    <TagsWrapper>
      <h3>Tags</h3>
      <Tags>
        {tags.map((tag) => (
          <Tag key={v4()} tag={tag} />
        ))}
      </Tags>
    </TagsWrapper>
  );
};

export default TagsContainer;
