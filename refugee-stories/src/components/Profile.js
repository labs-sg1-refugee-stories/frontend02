import React from 'react';
import styled from 'styled-components'


const ProfileWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-around;

`

const ProfileWrap = styled.div`
padding-top: 20px;
border: 1px solid white;
height: 450px;
margin-top: 200px;
display:flex
flex-direction: column;
padding: 40px;
padding-bottom: 40px;

color: white;
width: 25%;
text-align: center;
background-color: rgba(0,0,0,.3);



    h2{
        font-size: 5rem;
    }
    i{
        color: #2aa18a;
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
                <p>help connect refugees to each other, others, and the world.</p>
            </ProfileWrap>
            <ProfileWrap>
            <i class="fas fa-question"></i>
                <h2>Inform</h2>
                <p>To bring the reality of this world wide crisis home to those who are seperated from it.</p>
            </ProfileWrap>
            <ProfileWrap>
            <i class="fas fa-globe-europe"></i>
                <h2>Change</h2>
                <p>2019 has seen the largest number of refugees since in the last 50 years.</p>
            </ProfileWrap>
            

        </ProfileWrapper>
     );
}
 
export default Profile;