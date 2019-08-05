import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const ProfileWrap = styled.div`
  padding-top: 20px;
  border: 1px solid white;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-bottom: 40px;
  margin-bottom: 300px;
  color: black;
  width: 100%;
  text-align: center;
  
  @media (max-width: 800px) {
    width: 80%;
    margin-bottom: 50px;
  }
  h2 {
    font-size: 5rem;
  }
  i {
    color: white;
    border: 1px solid white;
    padding: 30px;
    width: 100px;
    margin: 0 auto;
    border-radius: 100px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const SingleProfile = props => {
  return (
    <ProfileWrapper>
      <ProfileWrap>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </ProfileWrap>
    </ProfileWrapper>
  );
};

export default SingleProfile;
