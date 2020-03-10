import React from "react";
import Table from "./Table";
import Form from "./Form";

class LinkContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favLinks: []
    };
  }

  removeCharacter = index => {
    this.setState(({ favLinks }) => ({
      favLinks: favLinks.filter((_, i) => i !== index)
    }));
  };

  handleSubmit = favLink => {
    this.setState(({ favLinks }) => ({
      favLinks: [favLink, ...favLinks]
    }));
  };

  render() {
    const favLinks = this.state.favLinks;

    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData={favLinks} removeLink={this.removeCharacter} />

        <br />

        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default LinkContainer;
