import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import "../App";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchAPI = this.searchAPI.bind(this);
    this.onUpdateBooks = this.onUpdateBooks.bind(this);

    this.state = { books: [] };
  }

  onUpdateBooks(book, shelf) {
    book.shelf = shelf;

    BooksAPI.update(book, shelf).then(() => {
      this.props.updateBook(book);
    });
  }

  searchAPI(query) {
    BooksAPI.search(query).then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }
  render() {
    let searchBook = this.state.books;
    let shelf;
    if (Array.isArray(this.state.books)) {
      this.state.books.forEach((book) => {
        shelf = "none";
        this.props.data.forEach((HpBook) => {
          if (book.id === HpBook.id) {
            shelf = HpBook.shelf;
          }
        });
        book.shelf = shelf;
      });
    }
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => this.searchAPI(e.target.value)}
          />
          {Array.isArray(this.state.books) ? (
            <ol className="books-grid">
              {searchBook.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 188,

                          backgroundImage: book.imageLinks
                            ? book.imageLinks.thumbnail
                              ? `url(${book.imageLinks.thumbnail})`
                              : `url(${this.book.imageLinks.smallThumbnail})`
                            : "none",
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select
                          defaultValue={book.shelf}
                          onChange={(e) =>
                            this.onUpdateBooks(book, e.target.value)
                          }
                        >
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>

                          <option value="none">None</option>
                        </select>
                      </div>
                      ) )
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <div>
              <h3>No books found</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBar;
