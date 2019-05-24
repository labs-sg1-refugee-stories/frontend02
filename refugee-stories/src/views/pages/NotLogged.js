import React from "react";
import styled from "styled-components";
import hero from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar";


const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px; 
  justify-content: space-around;
  color:white;
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.9),
      rgba(111, 111, 111, 0.8)
    ),
    url(${hero});
  background-size: contain;
  font-size: 4rem;
    h1{
        margin-top: 200px;
    }
`;

const notLogged = () => {
  return (
    <>
      <Navbar />
      <HeroWrapper>
        <h1>Sorry. Wrong Password or Username.</h1>
      </HeroWrapper>
    </>
  );
};

export default notLogged;