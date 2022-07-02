import React from "react";
import "./book-item.css";

export const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.img} className="book-item__img"></img>
      <span className="book-item__category">
        {book?.categories && book.categories[0]}
      </span>
      <span className="book-item__title">{book.title}</span>
      <span className="book-item__authors">
        {book.authors
          ? book.authors.map((author, index) => {
              return index !== 0 ? ", " + author : author;
            })
          : ""}
      </span>
    </div>
  );
};
