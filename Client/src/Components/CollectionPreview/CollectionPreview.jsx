import React from "react";
import { useNavigate } from "react-router-dom";
import "./collectionPreview.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

function CollectionPreview({ items, title }) {
  const navigate = useNavigate();
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => navigate(`${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
