import React from 'react';
import Navbar from '../../components/Navbar';
import styled from "styled-components";
import Supporters from "components/Supporters";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-between;
  font-size: 4rem;
  font-weight: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-content:space-around;
    }
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Info = styled.div`
  padding-right: 100px;
  
  @media (max-width: 768px) {
    padding-right: 0px;
    }
`;

const Cards = styled.div`
  margin-top: 80px;
`;
const Concern = styled.h4`
  font-weight: 400;
`;

const Safety = () => {
    return ( 
        <>
        <div class="container">
            <Navbar></Navbar>
            <HeroWrapper>
          <Info>
            <Title>Safey</Title>
            <Concern>Please use anonymous names and places.</Concern>
            <p>
              This is up to the writers discression. However, if you believe that information provided here could get someone else hurt or jeopardize their safety please consider either posting it anonymously or not posting it at all.
            </p>
            <Concern>This is not a resource for reporting crimes or seeking help.</Concern>
            <p>
              We do not have the resources or the ability to follow up with users and make sure they are safe. If your experiencing a crisis please contact the proper authorities where available.
            </p>
            <ul>
              <li><a href="https://help.unhcr.org/#_ga=2.189620524.66837131.1565033922-1040485244.1565033922" alt="link to UNHCR"></a>The UN Refugee Agency</li>
              <li>International Committee of the Red Cross</li>
            </ul>
            <Concern>Stories have the right to be rejected by the editors on any grounds.</Concern>
            <p>
              While we endevour to share as many stories as possible we cannot publish all stories. Stories that contain strong language or hate speech will not be published.
            </p>
       
          </Info>
          <Cards>
            <Supporters />
          </Cards>
        </HeroWrapper>

        </div>
        </>
     );
}
 
export default Safety;