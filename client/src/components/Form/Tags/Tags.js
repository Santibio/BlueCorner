import React from "react";
import style from "./Tags.module.css"
import * as Unicons from "@iconscout/react-unicons";


const Tag = ({ tags, setTags }) => {
  
  const deleteItems = (e,indexItem) => {
    e.preventDefault()
    setTags((prev) =>
      prev.filter((tags, index) => index !== indexItem)
    );
  };
  
  return (
    <div className={style.tags_container}>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            {tag}
            <button onClick={(e) => deleteItems(e, index)}>
              <Unicons.UilTimes />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;
