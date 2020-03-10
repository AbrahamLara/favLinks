import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      URL: ""
    };
  }

  handleChange = event => {
    const { name, value } = event;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // Call props to handle submission
    this.setState({
      name: "",
      URL: ""
    });
  };

  render() {
    const { name, URL } = this.state;

    return (
      <form onSubmit={this.onFormSubmit} onChange={this.handleChange}>
        <label for="name"> Name:</label>
        <input type="text" name="name" value={name} />
        <label for="URL">URL:</label>
        <input type="text" name="URL" value={URL} />
        <input className="button" type="submit" />
      </form>
    );
  }
}

export default Form;
