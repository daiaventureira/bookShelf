import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

class BookSearch extends Component {
  constructor() {
    super();

    this.state = {
      query: "",
      books: [],
      data: [],
    };
  }

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
