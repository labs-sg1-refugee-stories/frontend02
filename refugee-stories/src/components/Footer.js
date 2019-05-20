import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  height: 70px;
  background-color: #33313b;
  font-size: 2rem;
  align-items: baseline
  i {
    padding: 0px 10px;
  }
`;

const SocialMedia = styled.div`
  i {
    font-size: 3.5rem;
    :hover{
        color: #2aa18a;
        transition: all .8s;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <p>
          made with <i class="fas fa-heart" /> and <i class="fas fa-coffee" />
        </p>
      </div>
      <div>
        <p>Refugee Stories &copy; </p>
      </div>
      <SocialMedia>
        <p>
          <i class="fab fa-github-square" />
          <i class="fab fa-facebook-square" />
          <i class="fab fa-twitter-square" />
        </p>
      </SocialMedia>
    </FooterWrap>
  );
};

export default Footer;
