import React from "react";
import styled from "styled-components";
import hero from "assets/hero.jpg";
import Navbar from "components/Navbar";
import Profile from "components/Profile";

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
`;

const Policies = () => {
  return (
    <>
      <Navbar />
      <HeroWrapper>
        <Profile />
      </HeroWrapper>
    </>
  );
};

export default Policies;