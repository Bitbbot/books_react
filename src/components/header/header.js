import React from "react";
import { useDispatch } from "react-redux/es/exports";
import "./header.css";
import { showInput } from "../../pages/home-page";
import { requestBooks } from "../../api";
import { setBooks } from "../../redux/books-redux/reducer";
import { useNavigate } from "react-router-dom";
// let textInput = React.createRef();
let magnifierClick = React.createRef();
export let textInput = React.createRef();
export let categoriesValue = React.createRef();
export let sortingValue = React.createRef();

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const request = async (e) => {
    dispatch(setBooks([]));
    console.log(e);
    if (e?.key === "Enter" || e?.pageX > 0) {
      let indicator = document.querySelector("#indicator-gif");
      indicator.style.visibility = "visible";
      navigate("/");
      let category =
        categoriesValue.current.value !== "all"
          ? "+subject:" + categoriesValue.current.value
          : "";
      let array = [];
      try {
        array = await requestBooks(
          textInput.current.value,
          category,
          sortingValue.current.value,
          0
        );
      } catch {
        array = [
          {
            id: "1",
            img: undefined,
            categories: undefined,
            title: "We cant find the books with this title",
            authors: undefined,
            description: undefined,
          },
        ];
      }
      console.log(array);
      dispatch(setBooks(array));
      indicator.style.visibility = "hidden";
    }
  };
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="title">Search for books</div>
        <div className="search">
          <img
            src={process.env.PUBLIC_URL + "/indicator.gif"}
            id="indicator-gif"
          />
          <input
            type="text"
            class="search-field"
            defaultValue="Javascript"
            ref={textInput}
            onKeyPress={request}
          ></input>
          <img
            src={process.env.PUBLIC_URL + "/magnifier.png"}
            alt=""
            className="search-icon"
            ref={magnifierClick}
            onClick={request}
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
