import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
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
  // let [a, setA] = useState([1, 1, 1, 1]);
  const books = useSelector((state) => state.books.booksArray);
  console.log(books);
  console.log("books");

  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="found" ref={numberOfBooks}></div>
        <div className="books-wrapper">
          {books?.map((book) => (
            <BookItem book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
//полностью убрать эту функцию, забирать параметры из state и помещать в state

// numberOfBooks.current.innerHTML = "Found: " + array.totalItems;
