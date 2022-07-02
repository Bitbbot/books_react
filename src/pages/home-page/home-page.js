import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./home-page.css";
import { requestBooks } from "../../api";
import {
  textInput,
  categoriesValue,
  sortingValue,
} from "../../components/header";
import { BookItem } from "../../components/book-item";
let numberOfBooks = React.createRef();

export const HomePage = () => {
  const books = useSelector((state) => state.books.booksArray);
  const totaIitems =
    "Found " + useSelector((state) => state.totalItems.totalItems) + " results";
  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="found">{totaIitems}</div>
        <div className="books-wrapper">
          {books?.map((book) => (
            <BookItem book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
// numberOfBooks.current.innerHTML = "Found: " + array.totalItems;
