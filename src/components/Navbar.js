import React from 'react'

import  styled  from 'styled-components';
import { NavLink } from 'react-router-dom'
import SimpleMenu from '../components/SimpleMenu'



const LinkElem = styled(NavLink)`

  &.active {
    color: #0180c7;
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
      justify-content: space-around;
   
        a{
       
        text-decoration: none;
      
        color: #33313b;
        font-size: 2rem;
        font-size: 2.5rem;
        font-weight: 700;
        margin-right: 50px;
        
  
        :hover{
          transition: all .8s;
          color:#0180C7;
        }
      }
    }`

const Logo = styled.div`
    background-color: #0180C7;
    color: white;
 
    font-size:5rem;
    padding-bottom:15px;
    padding-right:5px;
    padding-left:5px;
    margin-left:100px;
      span{
        display: block;
      }
      @media (max-width: 700px) {
       
    }
    
`

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 0,
    }
  }

  findTab = tabNumber => {
    this.setState({
      ...this.state,
      activeTab: tabNumber,
    })
  }

  render() {
    return (
     
 
      <NavBar>
        <nav>
 
          <SimpleMenu/>  
          <Logo>RS</Logo>
          <Mobile>
            <LinkElem exact to={'/'}>
              Home
            </LinkElem>
            <LinkElem to={'/about_us'}>About</LinkElem>
            <LinkElem exact to='/stories_list/add_story'>
              Share
            </LinkElem>
            <LinkElem exact to={'/stories_list'}>
              Read
            </LinkElem>
            <LinkElem to={'/login'}>Login</LinkElem>
          </Mobile>
        </nav>
      </NavBar>
    
    )
  }
}

export default Navbar
