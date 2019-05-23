import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions";
import hero from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import Button from "../../components/Button";

const HeroWrapper = styled.div`
  display: flex;
  min-height: 900px;
  flex-wrap:wrap
  flex-direction:column
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.9),
      rgba(111, 111, 111, 0.8)
    ),
    url(${hero});
  background-size: contain;
  font-size: 4rem;
  color: white;
  
`;
const FormWrapper = styled.div`
width: 60%
margin: 0 auto;
background-color: rgba(0,0,0,.6);
margin-top:20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const TextInput = styled.textarea`
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.6rem;
  margin-bottom: 30px;

  ::placeholder {
    padding-left: 10px;
    font-family: "Oswald", sans-serif;
    letter-spacing: 1px;
  }
`;
const Header = styled.div`
  margin: 0 auto;
  margin-top: 40px;
`;

const Input = styled.input`
border: none;
border-bottom: 1px solid white;
font-size: 1.6rem;
margin-bottom: 30px;
height 30px;
  ::placeholder{
      padding-left: 10px;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 1px
    }
`;
class AddStory extends React.Component {
  state = {
    title: "",
    name: "",
    storytext: "",
    country: ""
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
    this.props.history.push("/stories_list");
  };

  render() {
    return (
      <div>
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
              <Button text={"Share"}>Add Post</Button>
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
