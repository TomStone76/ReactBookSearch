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
  saveBook = id => {
    console.log(id);
    // this.state.books[id]
  }
  render() {
    return (
      <div>
        <Jumbotron />
        <Nav />
        <Form addBooks = {this.addBooks}/>
        {this.state.books.map(
          (book, index) => 
          <List save={() => this.saveBook(index)} key={index}>
          <br></br>
          <br></br>
          {book.volumeInfo.title}
          {", by " + book.volumeInfo.authors}
          <br></br>
          <br></br>
          {"DESCRIPTION: " + book.volumeInfo.description}
          <br></br>
          <br></br>
          {"IMAGE: " + book.volumeInfo.imageLinks}
          <br></br>
          <br></br>
          <a href={book.volumeInfo.infoLink}>Info Link</a>
          </List>
        )}
      </div>
    );
  }
}

export default App;


///route exact path /
///