import React, { Component } from "react";
// import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";

class BookShelf extends Component {
  render() {
    const reading = [];
    const want = [];
    const read = [];
    if (this.props.data === undefined) {
    } else {
      for (let i = 0; i < this.props.data.length; i++) {
        if (this.props.data[i].shelf === "currentlyReading") {
          reading.push(
            <ol key={this.props.data[i].id} className="books-grid">
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 188,
                        backgroundImage: this.props.data[i].imageLinks
                          .smallThumbnail
                          ? `url(${
                              this.props.data[i].imageLinks.smallThumbnail
                            })`
                          : `url(${this.props.data[i].imageLinks.thumbnail})`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        defaultValue="currentlyReading"
                        onChange={
                          ((e) => this.props.currentValue,
                          (e) => this.props.currentShelfValue(e, i))
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
                  </div>
                  <div className="book-title">{this.props.data[i].title}</div>
                  <div className="book-authors">
                    {this.props.data[i].authors[0]}
                  </div>
                </div>
              </li>
            </ol>
          );
        }
        if (this.props.data[i].shelf === "wantToRead") {
          want.push(
            <ol key={this.props.data[i].id} className="books-grid">
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 188,
                        backgroundImage: this.props.data[i].imageLinks
                          .smallThumbnail
                          ? `url(${
                              this.props.data[i].imageLinks.smallThumbnail
                            })`
                          : `url(${this.props.data[i].imageLinks.thumbnail})`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        onChange={
                          ((e) => this.props.currentValue,
                          (e) => this.props.currentShelfValue(e, i))
                        }
                        defaultValue="wantToRead"
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
                  </div>
                  <div className="book-title">{this.props.data[i].title}</div>
                  <div className="book-authors">
                    {this.props.data[i].authors.join(", ")}
                  </div>
                </div>
              </li>
            </ol>
          );
        }
        if (this.props.data[i].shelf === "read") {
          read.push(
            <ol key={this.props.data[i].id} className="books-grid">
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 188,
                        backgroundImage: this.props.data[i].imageLinks
                          .smallThumbnail
                          ? `url(${
                              this.props.data[i].imageLinks.smallThumbnail
                            })`
                          : `url(${this.props.data[i].imageLinks.thumbnail})`,
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        onChange={
                          ((e) => this.props.currentValue,
                          (e) => this.props.currentShelfValue(e, i))
                        }
                        defaultValue="read"
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
                  </div>
                  <div className="book-title">{this.props.data[i].title}</div>
                  <div className="book-authors">
                    {this.props.data[i].authors[0]}
                  </div>
                </div>
              </li>
            </ol>
          );
        }
      }
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books" />
              {reading}
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">{want}</div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">{read}</div>
            </div>
          </div>
        </div>
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    );
  }
}
export default BookShelf;
