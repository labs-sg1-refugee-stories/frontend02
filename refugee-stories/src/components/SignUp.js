import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
height: 175px;
margin-top: 270px
border: 1px solid white;
padding: 10px 20px;
padding-bottom: none;
display:flex;
flex-direction: column;
background-color: white;
background-color: rgba(0,0,0,.3);
  button {
    width:100%
  }
  @media (max-width: 700px) {
    margin-top: 0px;
  }
`;
const TitleTwo = styled.h2`
  color: white;
  font-size: 2.7rem;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;
class SignUp extends React.Component {
  render() {
    return (
      <Wrapper>
        <TitleTwo>Share Your Experience</TitleTwo>
        <Link to="/stories_list/add_story">
          <Button text={"Publish"} />
        </Link>
      </Wrapper>
    );
  }
}

export default SignUp;
