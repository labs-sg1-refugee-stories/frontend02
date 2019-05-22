import React from 'react';
import styled from 'styled-components'


const ProfileWrapper = styled.div`
display:flex;

justify-content: space-around;
@media (max-width: 800px) {
    flex-direction: column;
    align-items: center
    text-align:center;
}
`

const ProfileWrap = styled.div`
padding-top: 20px;
border: 1px solid white;

margin-top: 100px;
display:flex
flex-direction: column;
padding: 40px;
padding-bottom: 40px;
margin-bottom:300px;
color: white;
width: 30%;
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
        width 100px;
        margin: 0 auto;
        border-radius: 100px;
        background-color: rgba(0,0,0,.4);
       
    }
`

const Profile = () => {
    return ( 

        <ProfileWrapper>
         
            <ProfileWrap>
            <i class="fas fa-link"></i>
                <h2>Connect</h2>
                <p>We help connect refugees to each other, others, and the world. Giving a more personal voice to the narrative of refugees and their struggle.</p>
            </ProfileWrap>
            <ProfileWrap>
            <i class="fas fa-question"></i>
                <h2>Inform</h2>
                <p>We wish to bring the reality of this world wide crisis home to those who are seperated from it.  We wish to give some insigt into the horrors and trauma of war and the crisis it causes.</p>
            </ProfileWrap>
            <ProfileWrap>
            <i class="fas fa-globe-europe"></i>
                <h2>Change</h2>
                <p>2019 has seen the largest number of refugees since in the last 50 years.  We hope to help in our own small way. Something has to change.  Share your story and help us spread the message.</p>
            </ProfileWrap>
            

        </ProfileWrapper>
     );
}
 
export default Profile;