import React, { Component } from "react";

class Book extends Component {
  state = {
    selectedValue: "",
  };

  onchange = (e, book) => {
    console.log(e.target);
    const shelf = e.target.value;
    this.setState({ selectedValue: shelf });
    this.props.toUpdate(book, shelf);
  };
  render() {
    const { book } = this.props;

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${book.imageLinks &&
                  book.imageLinks.thumbnail})`,
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={this.props.defaultValue}
                onChange={(e) => this.onchange(e, book)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {Array.isArray(book.authors) ? book.authors.join(", ") : ""}
          </div>
        </div>
      </li>
    );
  }
}
export default Book;
