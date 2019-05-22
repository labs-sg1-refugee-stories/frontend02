import React from "react";
import styled from "styled-components"
import Button from '../components/Button'

const Wrapper = styled.div`
height: 185px;
margin-top: 270px
border: 1px solid white;
padding: 10px 20px;
padding-bottom: none;
display:flex;
flex-direction: column;
background-color: white;
background-color: rgba(0,0,0,.3);
@media (max-width: 700px) {
  margin-top: 0px;
 }
`
const TitleTwo = styled.h2`
color:white;
font-size:2.5rem;
margin-bottom: 0px;
text-align:center;
margin-bottom: 20px;
letter-spacing:1px;

`
const Input = styled.input`
border: none;
border-bottom: 1px solid white;
font-size: 1.6rem;
margin-bottom: 30px;
width: 240px;
height 30px;
  ::placeholder{
      padding-left: 10px;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 1px
    }
`
const Form = styled.form`
display:flex;
flex-direction: column;
`

class SignUp extends React.Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };



  render() {
    return (
      <Wrapper>
        <TitleTwo>Share Your Experience</TitleTwo>
        <Button text={"Publish"} onClick={""}></Button>
        {/* set up text input action etc. */}
      </Wrapper>
    );
  }
}

export default SignUp;