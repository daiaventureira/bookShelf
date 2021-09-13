import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./components/BookShelf";
import { Route } from "react-router-dom";
import BookSearch from "./components/BookSearch";
import SearchBar from "./components/SeachBar";

class BooksApp extends React.Component {
  constructor() {
    super();
    this.currentValue = this.currentValue.bind(this);
    this.currentShelfValue = this.currentShelfValue.bind(this);
    this.updateBook = this.updateBook.bind(this);

    this.state = {
      data: [],
      screen: "book",
    };
  }
  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState(() => ({
        data,
      }));
    });
  }
  updateBook(book) {
    this.setState((state) => {
      let data = state.data.filter((b) => b.id !== book.id).concat([book]);
      return { ...state, data };
    });
  }
  currentValue(event) {
    this.setState({ current: event.target.value });
  }

  currentShelfValue(event, index) {
    let i = [...this.state.data];

    i[index].shelf = event.target.value;

    this.setState({
      data: i,
    });

    BooksAPI.update(this.state.data[index], this.state.data[index].shelf);
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              data={this.state.data}
              currentValue={this.currentValue}
              currentShelfValue={this.currentShelfValue}
              onNavigate={() => {
                this.setState(() => ({
                  screen: "search",
                }));
              }}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <div className="app">
              <SearchBar data={this.state.data} updateBook={this.updateBook} />
              <BookSearch />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
