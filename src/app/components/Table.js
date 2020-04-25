import React, { Component } from "react";
import APIservice from "../services/APIservice.js";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    // GET request
    APIservice.get("")
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((p) => <div key={p.id}>{p.title}</div>)
          : null}
      </div>
    );
  }
}

export default Table;
