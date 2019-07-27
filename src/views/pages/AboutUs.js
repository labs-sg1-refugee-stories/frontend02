import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Profile from "components/Profile";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-around;
 
  background-size: contain;
  font-size: 4rem;
`;

const AboutUs = () => {
  return (
    <>
    
      <div class="container">
      <Navbar />
      <HeroWrapper>
        <Profile />
      </HeroWrapper>
      </div>
    </>
  );
};

export default AboutUs;
