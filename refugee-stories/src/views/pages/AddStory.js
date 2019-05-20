import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions";
import hero from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;

  height: 900px;
  justify-content: space-around;
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.9),
      rgba(111, 111, 111, 0.8)
    ),
    url(${hero});
  background-size: contain;
  font-size: 4rem;
  color:white;
`;
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
        <Navbar></Navbar>
      <HeroWrapper>
        <h1>Share Your Story</h1>
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
        </form>
      </HeroWrapper>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(AddStory);
