import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
height: 350px;

border: 1px solid white;
padding: 10px 20px;
padding-bottom: none;
display:flex;
flex-direction: column;
background-color: white;
color: white;
background-color: rgba(0,0,0,.3);

    p{
        margin: 0;
    }
`
const TitleTwo = styled.h2`
color:white;
font-size:2.5rem;
margin-bottom: 0px;
text-align:center;
margin-bottom: 20px;
`

const CheckboxWrap = styled.div`
display: flex;
margin-left: 20px;
    input {
        margin-right: 30px;
        margin-top:10px;
    }
    p {
        font-size: 2rem;
        padding-right: 4px;
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
const Form = styled.form`
display:flex;
flex-direction: column;
`
const Button = styled.button`
padding: 10px 20px;
font-size: 2rem;
border-radius: 5px;
color: white;
background-color: #2aa18a;
    :hover{
      transform: translateY(-3px);
      transition: all .8s;
    }
`

class LoginCard extends React.Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <Wrapper>
        <TitleTwo>Login</TitleTwo>
        <Form>
     
          <Input placeholder="Username" type="text" />
   
          <Input placeholder="Password" type="text" />
         
        </Form>
        <Button onClick={""}>Share</Button>
        {/* set up text input action etc. */}
      </Wrapper>
    );
  }
}

export default LoginCard;