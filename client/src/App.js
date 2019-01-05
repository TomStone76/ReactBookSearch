import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./components/jumbotron";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Nav />
      </div>
    );
  }
}

export default App;


///route exact path /
///