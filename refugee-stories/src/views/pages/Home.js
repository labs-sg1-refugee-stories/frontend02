import React from 'react';
import SignUp from './SignUp'
import styled from 'styled-components'
import hero from '../../assets/hero.jpg'
import { Link } from 'react-router-dom'

const HeroWrapper = styled.div`
display:flex;
margin: 0 auto;

height: 900px;
justify-content:space-around;
background-image: linear-gradient(
      rgba(000, 000, 000, 0.9), 
      rgba(111, 111, 111, 0.8)
    ), url(${hero});
background-size: contain;
font-size: 4rem;
`
const Title = styled.h1`
color:white;
margin-top: 300px
`
const SubHeader = styled.p`
color:white;
font-size:3rem;
`
const NavBar = styled.div`
position:absolute;
display:flex;
justify-content: ;
    a{
        padding-left: 70px
        text-decoration: none
        color: white;
        font-size: 2rem;
        
    }
`



class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <HeroWrapper>
              
      <NavBar>
        <nav>
          <Link to={"/login"}>Login</Link>
          <Link to={"/"}>Home</Link>
          <Link to={"/stories_list"}>(secure USER stories list)</Link>
          <Link to={"/admin_stories_list"}>(secure ADMIN stories list)</Link>

        </nav>
      </NavBar>
   

                <div>
            <Title>Refugee Stories.</Title>
            <SubHeader>Voices that need to be heard</SubHeader>
            </div>
            <SignUp />
            </HeroWrapper>
         );
    }
}
 
export default Home;