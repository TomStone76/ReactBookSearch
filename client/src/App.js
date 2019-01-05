import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./components/jumbotron";
import Nav from "./components/nav";
import Form from "./components/form/form.js";
import List from "./components/list/";


class App extends Component {
  state = {
    books:[]
  }
  addBooks = (books) => {
    this.setState({
      books:books
    })
    console.log(this.state.books)
  }
  saveBook = event => {
    console.log(event.target);
  }
  render() {
    return (
      <div>
        <Jumbotron />
        <Nav />
        <Form addBooks = {this.addBooks}/>
        {this.state.books.map(
          (book, index) => <List save={this.saveBook} key={index}>{book.volumeInfo.title}</List>
        )}
      </div>
    );
  }
}

export default App;


///route exact path /
///