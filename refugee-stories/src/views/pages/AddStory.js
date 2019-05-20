import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions";
import hero from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import styled from "styled-components";
import Button from "../../components/Button"

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 900px;
  
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
margin: 0 auto;
width: 800px;
background-color: rgba(0,0,0,.3);
`
const Form = styled.form`

display: flex;
flex-direction: column;
`
const TextInput = styled.textarea`
border: none;
border-bottom: 1px solid white;
font-size: 1.6rem;
margin-bottom: 30px;

::placeholder{
  padding-left: 10px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px
}

`

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
`
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
        <Navbar />
        <HeroWrapper>
          <FormWrapper>
          <h1>Share Your Story</h1>
          <Form onSubmit={this.addPost}>
 
            <Input
              placeholder="Title"
              onChange={this.textChangeHandler}
              name="title"
              type="text"
              value={this.state.title}
            />
     
            <Input
            placeholder="Author"
              onChange={this.textChangeHandler}
              name="author"
              type="text"
              value={this.state.author}
            />
         
            <TextInput
              placeholder="Story"
              rows="20" cols="100"
              onChange={this.textChangeHandler}
              name="post"
              type="text"
              value={this.state.post}
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
