import React from "react";
import { connect } from "react-redux";
import { addPost } from "actions";
import Navbar from "components/Navbar";
import styled from "styled-components";
import Button from "components/Button";

const HeroWrapper = styled.div`
  display: flex;
  min-height: 900px;
  flex-wrap:wrap;
  flex-direction:column;
  font-size: 4rem;
  color: white;
`;
const FormWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  margin-top: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const TextInput = styled.textarea`
  border: none;
  border-bottom: 1px solid white;
  padding-left: 10px;
  font-size: 1.6rem;
  margin-bottom: 30px;
  resize: none;

  ::placeholder {
    padding-left: 10px;
    letter-spacing: 1px;
  }

  &:focus{
    outline: none;
    
  }
`;
const Header = styled.h1`
  margin: 0 auto;
  margin-top: 40px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.6rem;
  padding-left: 10px;
  margin-bottom: 30px;
  height: 30px;
  border-bottom: 2px solid transparent;
  transition: all .5s;
  ::placeholder {
    padding-left: 10px;
    letter-spacing: 1px;
  }
  &:focus{
    outline: none;
    border-bottom: 1px solid darkgrey;

    
  }
`;
class AddStory extends React.Component {
  state = {
    title: "",
    name: "",
    storytext: "",
    country: "",
    photoUrl: null,
    authorUrl: null,
    photo: null,
    author: null,
  };

  textChangeHandler = event => {
    const newText = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: newText,
    });
  };
  addPost = e => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.props.history.push("/stories_list");
  };

  handleSelect = event => {
    // sets photoUrl/authorUrl on state depending on which input was selected
    const file = event.target.files[0];
    const { name, id } = event.target;
    this.setState({ [name]: file });

    // sets photo/author on state depending on which input was selected
    // this is needed for preview image; see ref below
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Showing_thumbnails_of_user-selected_images
    const reader = new FileReader();
    reader.onload = e => {
      this.setState({ [id]: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div class ="container">
        <Navbar />
        <HeroWrapper>
          <Header>Share Your Story</Header>
          <FormWrapper>
            <Form onSubmit={this.addPost}>
              <Input
                placeholder="Title"
                onChange={this.textChangeHandler}
                name="title"
                type="text"
                value={this.state.title}
              />
              <Input
                placeholder="Author (optional)"
                onChange={this.textChangeHandler}
                name="name"
                type="text"
                value={this.state.name}
              />
              <Input
                placeholder="Country"
                onChange={this.textChangeHandler}
                name="country"
                type="text"
                value={this.state.country}
              />
              <TextInput
                placeholder="Story"
                rows="14"
                cols="100"
                onChange={this.textChangeHandler}
                name="storytext"
                type="text"
                value={this.state.storytext}
              />
              {/* <input
                onChange={this.handleSelect}
                name="photoUrl"
                id="photo"
                type="file"
                accept="image/*"
              />
              <div
                style={{
                  height: "200px",
                  width: "200px",
                  border: "1px solid red",
                }}
              >
                {this.state.photo && <img src={this.state.photo} alt="story" />}
              </div>
              <br />
              <input
                onChange={this.handleSelect}
                name="authorUrl"
                id="author"
                type="file"
                accept="image/*"
              />
              <div
                style={{
                  height: "200px",
                  width: "200px",
                  border: "1px solid red",
                }}
              >
                {this.state.author && (
                  <img src={this.state.author} alt="author" />
                )}
              </div> */}
              <Button text={"Share"} />
            </Form>
          </FormWrapper>
        </HeroWrapper>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(AddStory);
