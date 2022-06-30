import React from "react";
import "./header.css";
import { showInput } from "../../pages/home-page";
// let textInput = React.createRef();
let magnifierClick = React.createRef();
export let textInput = React.createRef();
export let categoriesValue = React.createRef();
export let sortingValue = React.createRef();
export const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="title">Search for books</div>
        <div className="search">
          <input
            type="text"
            class="search-field"
            defaultValue="Javascript"
            ref={textInput}
            onKeyPress={showInput}
          ></input>
          <img
            src={process.env.PUBLIC_URL + "/magnifier.png"}
            alt=""
            className="search-icon"
            ref={magnifierClick}
            onClick={showInput}
          />
        </div>
        <div className="sorting">
          <div className="sorting-categories">
            Categories
            <select className="select-categories" ref={categoriesValue}>
              <option value="all">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </select>
          </div>
          <div className="sorting-by">
            Sorting by
            <select className="select-by" ref={sortingValue}>
              <option value="relevance">relevance </option>
              <option value="newest">newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
