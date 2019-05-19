import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
padding-top:200px
`
const TitleTwo = styled.h2`
color:white;
font-size:3rem;
margin-bottom: 0px;
text-align:center;
`
const Input = styled.input`
border: none;
border-bottom: 1px solid white;
margin-left:60px


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
        <TitleTwo>Sign Up and Share </TitleTwo>
        <form>
          <TitleTwo>User Name</TitleTwo>
          <Input type="text" />
          <TitleTwo>password</TitleTwo>
          <Input type="text" />
        </form>
      </Wrapper>
    );
  }
}

export default SignUp;