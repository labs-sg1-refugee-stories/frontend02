import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-around;
  color: white;
  background-size: contain;
  font-size: 4rem;
  h1 {
    margin-top: 200px;
    color: black;
    font-weight:400;
  }
`;

const notLogged = () => {
  return (
    <>
    <div class="container">
      <Navbar />
      <HeroWrapper>
        <h1>Sorry. Wrong Password or Username.</h1>
      </HeroWrapper>
      </div>
    </>
  );
};

export default notLogged;
