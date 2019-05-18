import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";
class AddStory extends React.Component {
  state = {
    title: "",
    author: "",
    post: ""
  };

  textChangeHandler = event => {
    const newText = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: newText
    });
  };
  addPost = event => {
    event.preventDefault();
    this.props.addPost(this.state);
  };

  render() {
    return (
      <div>
        <h1>Add new Post</h1>
        <form onSubmit={this.addPost}>
          <h2>title</h2>
          <input
            onChange={this.textChangeHandler}
            name="title"
            type="text"
            value={this.state.title}
          />
          <h2>author</h2>
          <input
            onChange={this.textChangeHandler}
            name="author"
            type="text"
            value={this.state.author}
          />
          <h2>post</h2>
          <input
            onChange={this.textChangeHandler}
            name="post"
            type="text"
            value={this.state.post}
          />
          <button>Add Post</button>
          {/* loader in button with isloggin in booliearn terinary */}
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(AddStory);
