import React from "react";
import SignUp from "components/SignUp";
import styled from "styled-components";
import hero from "assets/hero.jpg";
import Navbar from "components/Navbar";
import Hamburger from "components/Hamburger";


const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
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
    text-align:center;
    height:600px;
    justify-content: start;

}

`;
const Title = styled.h1`
  color: white;
  margin-top: 260px;
  font-size: 7rem;
  letter-spacing: 2px; 
  @media (max-width: 700px) {
    margin-top: 50px;
  }
`;
const SubHeader = styled.p`
  color: white;
  font-size: 3.5rem;
`;
class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
    
        <Navbar />
        <HeroWrapper>
        <Hamburger />
          <div>
            <Title>Refugee Stories.</Title>
            <SubHeader>Voices that need to be heard</SubHeader>
          </div>
          <SignUp />
        </HeroWrapper>
      </div>
    );
  }
}

export default Home;
