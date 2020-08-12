/**
 * Base libraries
 */
import React from "react";
/**
 * import CSS
 */
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <input
      className="search"
      onChange={handleChange}
      type="search"
      placeholder={placeholder}
    />
  </div>
);
