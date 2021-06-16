import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { TagWrapper } from "./Tag.sc";

const Tag = ({ tag }) => {
  const [selected, setSelected] = useState(false);
  const { search } = useLocation();
  const history = useHistory();

  useEffect(() => {
    let params = new URLSearchParams(search);
    let tags =
      params.get("tag_list").length > 0
        ? params.get("tag_list").split(",")
        : [];

    if (tags.indexOf(tag) >= 0) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selected, search, tag]);

  const toggleSelected = () => {
    let params = new URLSearchParams(search);
    let tags =
      params.get("tag_list").length > 0
        ? params.get("tag_list").split(",")
        : [];

    if (tags.indexOf(tag) < 0) {
      tags.push(tag);
    } else {
      tags = tags.filter((tagItem) => tagItem !== tag);
    }

    params.set("tag_list", tags.join(","));
    history.push(`?${params.toString()}`);
  };

  return (
    <TagWrapper onClick={toggleSelected} selected={selected}>
      {tag}
    </TagWrapper>
  );
};

export default Tag;
