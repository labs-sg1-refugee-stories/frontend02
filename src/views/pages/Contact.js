import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";


const HeroWrapper = styled.div`
  display: flex;
  min-height: 900px;
  flex-direction: column;
  font-size: 4rem;
  text-align:center;
`;

const Policies = () => {
  return (
    <>
      <div class="container">
      <Navbar />
      <HeroWrapper>
      <h1>Contact</h1>
      <p>brandonpampuch@gmail.com</p>
      </HeroWrapper>
      </div>
    </>
    
  );
};

export default Policies;