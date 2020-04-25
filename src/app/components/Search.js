import React, { Component } from "react";
import axios from "axios";
import APIservice from "../services/APIservice";

const url = "http://localhost:8080/";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (events) => {
    this.setState({ [events.target.name]: events.target.value });
  };

  submitHandler = (events) => {
    events.preventDefault();
    console.log(this.state);
    APIservice.post("", this.state);
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              val={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
