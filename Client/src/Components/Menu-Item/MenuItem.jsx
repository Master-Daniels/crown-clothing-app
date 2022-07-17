import React from "react";
import { useNavigate } from "react-router-dom";
import "./menuitem.scss";

const MenuItem = (props) => {
  const navigate = useNavigate();
  const { title, imageUrl, size, linkUrl } = props;
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{ background: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content" onClick={() => navigate(linkUrl)}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
