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
      <SingleProfile title={"Policies"} content={"Refugee Stories is a place of refuge for the minds of those who may not have one. Any comments or stories that threaten to take that away will be deleted. Please be respecful of peoples privacy as a human right. Anonymous posting is a neccessity due to the sensitive nature of the content being created here. It is our great hope that in these refugees hour of need this will not embolden those without a conscience."} icon={"fas fa-list-ul"} />
      </HeroWrapper>
      </div>
    </>
  );
};

export default Policies;