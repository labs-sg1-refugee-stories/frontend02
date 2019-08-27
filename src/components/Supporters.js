import React from "react";
import styled from "styled-components";

const Contributers = styled.div`
  border-top: 1px solid lightgray;

  margin-bottom: 20px;

`;

const ContributerList = styled.ul`
  margin-bottom: 40px;
`;

const Border = styled.div`
  border-bottom: 1px solid lightgray;
`;

const SubMenu = styled.p`
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 30px;
`;

const Author = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
`;

const SocialMedia = styled.div`
  display: flex;

  i {
    margin-right: 40px;
    font-size: 40px;
  }
  i:first-child {
    margin-left: 50px;
  }
  
`;

const Supporters = () => {
  return (
    <Contributers>
      <SubMenu>partners</SubMenu>
      <ContributerList>
        <li>Echo 100 Plus</li>
        <Author>An Austrian charity helping refugees</Author>
        <li>Zine</li>
        <Author>A publication by and for refugees</Author>
        <li>Comic</li>
        <p />
        <li>etc.</li>
      </ContributerList>
      <Border />
      <SubMenu>Follow</SubMenu>
      <SocialMedia>
        <i className="fab fa-github-square" />
        <i className="fab fa-facebook-square" />
        <i className="fab fa-twitter-square" />
      </SocialMedia>
    </Contributers>
  );
};

export default Supporters;
