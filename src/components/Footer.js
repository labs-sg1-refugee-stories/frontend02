import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 1.1rem;
  align-items: baseline;
  margin-bottom: 0px;
  @media (max-width: 700px) {
   
    align-items: center
  }

    i {
      padding: 0px 10px;
    }
`;


const Link = styled(NavLink)`
color: black;
font-size:1.2rem;
  :hover{
        color: #0180C7;
        transition: all .8s;
  }
`

const Logo = styled.div`

  p{
    font-weight: 400;
    font-size: 1.4rem;

    margin-bottom:50px;
  }

`

const Footer = () => {
  return (
    <div class="container">
    <FooterWrap>
      <div>
        <p>
      
            <Link to={'/login'}>Admin  </Link> &nbsp; | &nbsp;
            <Link to={'/Contact'}>Contact</Link> &nbsp; | &nbsp;
            <Link to={'/Policies'}>Policies</Link>
        </p>
      </div>
      <Logo>
        <p>MACRAMÉ<br></br> مقرمة 2019  </p>
      </Logo>
     
    </FooterWrap>
    </div>
  );
};

export default Footer;
