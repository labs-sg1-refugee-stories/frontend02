import React from "react";
import styled from "styled-components";


const ProfileWrapper = styled.div`
display:flex;
justify-content: space-around;
width: 40%;
@media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    text-align:center;
}
`;
const ProfileWrap = styled.div`
padding-top: 20px;
border: 1px solid white;
margin-top: 100px;
display:flex;
flex-direction: column;
padding: 40px;
padding-bottom: 40px;
margin-bottom:300px;
color: white;
width: 100%;
text-align: center;
background-color: rgba(0,0,0,.3);
@media (max-width: 800px) {
    width:80%;
    margin-bottom: 50px;
}
    h2{
        font-size: 5rem;
    }
    i{
        color: #0180C7;
        border: 1px solid white;
        padding: 30px;
        width: 100px;
        margin: 0 auto;
        border-radius: 100px;
        background-color: rgba(0,0,0,.4);
       
    }
`;

const SingleProfile = (props) => {
  return (
    <ProfileWrapper>
      <ProfileWrap>
        <i class={props.icon} />
        <h2>{props.title}</h2>
        <p>
          {props.content}
        </p>
      </ProfileWrap>



    </ProfileWrapper>
  );
};

export default SingleProfile;
