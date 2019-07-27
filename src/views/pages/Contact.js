import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";
import SingleProfile from "components/SingleProfile";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-around;
  background-size: contain;
  font-size: 4rem;
`;

const Policies = () => {
  return (
    <>
      <div class="container">
      <Navbar />
      <HeroWrapper>
      <SingleProfile title={"Contact"} content={"brandonpampuch@gmail.com"} icon={"far fa-envelope"} />
      </HeroWrapper>
      </div>
    </>
    
  );
};

export default Policies;