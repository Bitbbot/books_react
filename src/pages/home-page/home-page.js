import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./home-page.css";
import { BookItem } from "../../components/book-item";

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
