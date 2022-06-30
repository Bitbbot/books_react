import React from "react";
import { useState } from "react";
import "./home-page.css";
import { requestBooks } from "../../api";
import {
  textInput,
  categoriesValue,
  sortingValue,
} from "../../components/header";
import { BookItem } from "../../components/book-item";
let numberOfBooks = React.createRef();
const [books_array, setBooks_array] = useState();
export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="found" ref={numberOfBooks}></div>
        <div className="books-wrapper">
          {books_array.map((book) => (
            <BookItem book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export function showInput() {
  let promise = new Promise((resolve, reject) => {
    let category =
      categoriesValue.current.value != "all"
        ? "+subject:" + categoriesValue.current.value
        : "";
    requestBooks(
      textInput.current.value,
      category,
      sortingValue.current.value,
      0,
      resolve
    );
  });
  promise.then(
    (array) => {
      numberOfBooks.current.innerHTML = "Found: " + array.totalItems;
      console.log(books_array);
      setBooks_array(array.array);
    },
    (error) => {
      alert("Rejected: " + error);
    }
  );
}
