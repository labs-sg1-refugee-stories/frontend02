import React from "react";
import styled from "styled-components";

import Navbar from "components/Navbar";
import MapContainer from "components/Map";

const HeroWrapper = styled.div`
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-around;
  background-size: contain;
  font-size: 4rem;
`;
const MapWrapper = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  color: white;
  left: 400px;
  right: 400px;
  h1 {
    text-align: center;
  }
`;

const Connect = () => {
  return (
    <>
      <Navbar />
      <HeroWrapper>
        <MapWrapper>
          <h1>Connect</h1>
          <MapContainer />
        </MapWrapper>
      </HeroWrapper>
    </>
  );
};

export default Connect;
