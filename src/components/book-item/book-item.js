import React from "react";
import { Link } from "react-router-dom";
import "./book-item.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setCurrentBook } from "../../redux/book-redux/reducer";

export const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentBook(book));
  };
  return (
    <Link to={"/app/" + book.id} className="book-item" onClick={handleClick}>
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
    </Link>
  );
};
