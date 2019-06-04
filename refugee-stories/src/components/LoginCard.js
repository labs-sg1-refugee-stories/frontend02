import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "actions";

const Wrapper = styled.div`
  height: 350px;
  border: 1px solid white;
  padding: 10px 20px;
  padding-bottom: none;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);

  p {
    margin: 0;
  }
`;
const TitleTwo = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 0px;
  text-align: center;
  margin-bottom: 20px;
`;
const Input = styled.input`
border: none;
border-bottom: 1px solid white;
font-size: 1.6rem;
margin-bottom: 30px;
height: 30px;
padding-left: 10px;
  ::placeholder{
      padding-left: 10px;
      font-family: 'Oswald', sans-serif;
      letter-spacing: 1px
    }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 2rem;
  border-radius: 5px;
  color: white;
  background-color: #9c000b;
  :hover {
    transform: translateY(-3px);
    transition: all 0.8s;
  }
`;

class LoginCard extends React.Component {
  state = {
    newCredentials: {
      username: "",
      password: "",
    },
  };
  textChangeHandler = event => {
    const newText = event.target.value;
    this.setState({
      ...this.state,
      newCredentials: {
        ...this.state.newCredentials,
        [event.target.name]: newText,
      },
    });
  };

  login = event => {
    console.log("firing");
    event.preventDefault();
    this.props.login(this.state.newCredentials).then(() => {
      this.props.history.push("/admin_stories_list");
    });
  };

  render() {
    return (
      <Wrapper>
        <TitleTwo>Login</TitleTwo>
        <Form onSubmit={this.login}>
          <Input
            onChange={this.textChangeHandler}
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.newCredentials.username}
          />
          <Input
            onChange={this.textChangeHandler}
            placeholder="Password"
            type="text"
            name="password"
            value={this.state.newCredentials.password}
          />
          <Button>Review</Button>
        </Form>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginCard);
