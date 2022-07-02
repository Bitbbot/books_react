import React from "react";
import "./error-page.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <span className="error404-title">404 Not found</span>
      <Link to="/" class="mane-page-link">
        Please return to the main page
      </Link>
    </div>
  );
};
