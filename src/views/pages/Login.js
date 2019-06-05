import React from "react";
import Navbar from "components/Navbar";
import styled from "styled-components";
import hero from "assets/hero.jpg";
import LoginCard from "components/LoginCard";

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
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const CallToAction = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: white;
  margin-top: 100px;
  font-size: 7rem;
  letter-spacing: 2px;
`;

class Login extends React.Component {
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
      [event.target.name]: newText,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar />
        <HeroWrapper>
          <CallToAction>
            <Title>Welcome Back.</Title>
            <LoginCard history={this.props.history} />
          </CallToAction>
        </HeroWrapper>
      </div>
    );
  }
}
//login with all the things + need drop down
export default Login;