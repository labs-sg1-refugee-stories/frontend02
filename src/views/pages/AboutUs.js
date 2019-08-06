import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Supporters from "components/Supporters";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-between;
  font-size: 4rem;
  font-weight: 400px;
  li {
    list-style: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-content:space-around;
    }
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Info = styled.div`
  padding-right: 100px;
  
  @media (max-width: 768px) {
    padding-right: 0px;
    }
`;

const Cards = styled.div`
  margin-top: 80px;
`;
const Question = styled.h4`
  font-weight: 400;
`;

const AboutUs = () => {
  return (
    <>
      <div class="container">
        <Navbar />
        <HeroWrapper>
          <Info>
            <Title>About</Title>
            <Question>What is MACRAMÉ ? </Question>
            <p>
              A space for displaced peoples to come together and share their
              stories of tradgedy and triumph. Amongst eachother and for
              eachother.
            </p>
            <Question>Who are we ? </Question>
            <p>
              We hope very soon that MACRAMÉ will be completely run for and by
              displaced people's. However, for the time being it is being
              operated by the following.
            </p>
          
              <li>Brandon Pampuch - Front End Dev</li>
              <li>César Napoleon Mejia Leiva - Full Stack Dev</li>
          
            <Question>How did MACRAMÉ begin ? </Question>
            <p>
              As a student project at Lambda School. Students found a common
              passion for creating this space and have continued to spend their
              time crafting it outside of class.
            </p>
            <Question>How Can you support us ? </Question>
            <p>
              The link below will provide you with the opportunity to provide
              coding skills and computer resources to displaced people so that
              they can take over the operation of this project as well as begin
              their own.
            </p>
          </Info>
          <Cards>
            <Supporters />
          </Cards>
        </HeroWrapper>
      </div>
    </>
  );
};

export default AboutUs;
