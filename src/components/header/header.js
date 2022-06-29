import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="title">Search for books</div>
        <div className="search">
          <input type="text" class="search-field"></input>
          <img
            src={process.env.PUBLIC_URL + "/magnifier.png"}
            alt=""
            className="search-icon"
          />
        </div>
        <div className="sorting">
          <div className="sorting-categories">
            Categories
            <select className="select-categories">
              <option value="1">all</option>
              <option value="2">art</option>
              <option value="3">biography</option>
              <option value="4">computers</option>
              <option value="5">history</option>
              <option value="6">medical</option>
              <option value="6">poetry</option>
            </select>
          </div>
          <div className="sorting-by">
            Sorting by
            <select className="select-by">
              <option value="1">relevance </option>
              <option value="2">newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
