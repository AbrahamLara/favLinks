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
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          value={name}
        />
        <label htmlFor="URL">URL:</label>
        <input
          onChange={this.handleChange}
          type="text"
          name="URL"
          value={URL}
        />
        <input className="button" type="submit" />
      </form>
    );
  }
}

export default Form;
