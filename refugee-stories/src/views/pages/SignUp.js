import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
padding-top:200px
`

const TitleTwo = styled.h2`
color:white;
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
        <TitleTwo>Sign Up</TitleTwo>
        <form>
          <TitleTwo>User Name</TitleTwo>
          <input type="text" />
          <TitleTwo>password</TitleTwo>
          <input type="text" />
        </form>
      </Wrapper>
    );
  }
}

export default SignUp;