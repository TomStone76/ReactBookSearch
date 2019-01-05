import React from "react";
import {  Input, FormBtn } from "./index.js";
import axios from "axios";
import "./style.css"

class Form extends React.Component {
    
    state = {
        searchString: ''
        
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchBooks = () => {
        axios.get( "https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchString + "&key=AIzaSyCeTGHrURWDPgpQKn0ej5EkzWFdN6k2SrQ"
        )
        .then(
             data  => 
            this.props.addBooks(data.data.items)
            )
    }

    render() {
      return (
        <div>
            <Input 
                // search={this.searchBooks} 
                onChange={this.handleInputChange} 
                name="searchString" 
                value={this.state.searchString} 
            />
            <FormBtn 
                onClick={this.searchBooks}
                    
            />
        </div>
      );
    }
  }

  export default Form;