import React from 'react'

import  styled  from 'styled-components';
import { NavLink } from 'react-router-dom'
import SimpleMenu from '../components/SimpleMenu'



const LinkElem = styled(NavLink)`

  &.active {
    color: lightgray;
  }
`

const Mobile = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    display:none;
  }
`

const NavBar = styled.div`
width: 100%;
background-color: #fff;
    
    nav{
      display:flex;
      flex-wrap:wrap;
      align-items: baseline;
      justify-content: space-between;
   
        a{
       
        text-decoration: none;
        font-family: 'Karla', sans-serif;
        color: #33313b;
        font-size: 2rem;
        font-size: 1.3rem;
        font-weight: 700;
        margin-right: 50px;
        
        &:last-child{
          margin-right:0;
        }
        
        
        :hover{
          transition: all .8s;
          color:#0180C7;
        }
      }
    }`

const Logo = styled.div`
    margin-top: 40px;
    font-family: 'Libre Baskerville', serif;
    background-color: white;
    color: black;
    order:-1;
    font-size:3rem;
    padding-bottom:15px;
    padding-right:5px;
    padding-left:5px
    
      span{
        display: block;
      }
      @media (max-width: 700px) {
       
    }
    
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight:400;
  font-size: 2.6rem;
`

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
`;

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 0,
    }
  }



  render() {
    return (
     
 
      <NavBar>
        <nav>
 
          <SimpleMenu/>  
          <Logo>MACRAMÉ<br></br> مقرمة</Logo>
          <Mobile>
            <LinkElem exact to={'/'}>
              Home
            </LinkElem>
            <LinkElem to={'/about_us'}>About</LinkElem>
            <LinkElem exact to='/'>
              safety
            </LinkElem>
         
      
          </Mobile>
        </nav>
        <HeadingWrapper>
          <StyledLink to={"/stories_list/add_story"}>write</StyledLink>
          <StyledLink to={"/stories_list"}>read</StyledLink>
        </HeadingWrapper>

      </NavBar>
    
    )
  }
}

export default Navbar
