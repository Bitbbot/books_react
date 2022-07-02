import React from "react";
import "./book-page.css";
import { useDispatch, useSelector } from "react-redux/es/exports";

export const BookPage = () => {
  const book = useSelector((state) => state.book.currentBook);
  return (
    <div className="book-wrapper">
      <div className="img-wrapper">
        <img src={book?.img} className="book-img" />
      </div>
      <div className="book-items-wrapper">
        <span className="categories-item">
          {book.categories
            ? book.categories.map((category, index) => {
                return index !== 0 ? " / " + category : category;
              })
            : ""}
        </span>
        <span className="title-item">{book?.title}</span>
        <span className="authors-item">
          {book.authors
            ? book.authors.map((author, index) => {
                return index !== 0 ? ", " + author : author;
              })
            : ""}
        </span>
        <div className="description-item">{book?.description}</div>
      </div>
    </div>
  );
};
