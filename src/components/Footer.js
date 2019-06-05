import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  background-color: #33313b;
  font-size: 2rem;
  align-items: baseline;
  margin-bottom: 0px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center
  }

    i {
      padding: 0px 10px;
    }
`;
const SocialMedia = styled.div`
  i {
    font-size: 3.5rem;
    :hover{
        color: #0180C7;
        transition: all .8s;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <p>
          made with <i className="fas fa-heart" /> and <i className="fas fa-coffee" />
        </p>
      </div>
      <div>
        <p>Refugee Stories 2019 &copy; </p>
      </div>
      <SocialMedia>
        <p>
          <i className="fab fa-github-square" />
          <i className="fab fa-facebook-square" />
          <i className="fab fa-twitter-square" />
        </p>
      </SocialMedia>
    </FooterWrap>
  );
};

export default Footer;