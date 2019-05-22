import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkElem = styled(NavLink)`
  // example style
  &.active {
    color: #0180C7;
  
   
  }
`;

const NavBar = styled.div`

width: 100%

background-color: #fff
    
    Nav{
      display:flex;
      align-items: baseline;
      justify-content: space-between;
      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center
      }
        a{
       
        text-decoration: none
        color: #33313b;
        font-size: 2rem;
        border-bottom: 1px solid #fff;
        font-size: 2.5rem;
        font weight: 700;
        margin-right: 50px;
        
        @media (max-width: 700px) {
          border-bottom: 1px solid white;
          width: 100%
          text-align: center;
          padding: 10px;
      }
        :hover{
          transition: all .8s;
          color:#0180C7
        }
      }
    }`;

const Logo = styled.div`
    background-color: #0180C7;
    color: white;
 
    font-size:5rem;
    font-weight: ;
    padding-bottom:15px;
    padding-right:5px
    padding-left:5px
    margin-left:100px;
      span{
        display: block;
      }
    
`
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
  }

  findTab = tabNumber => {
    this.setState({
      ...this.state,
      activeTab: tabNumber
    });
  };

  render() {
    return (
      <NavBar>
        <nav>
          <Logo>RS</Logo>
          <div>
          <LinkElem to={"/login"}>Login</LinkElem>
          <LinkElem exact to={"/"}>
            Home
          </LinkElem>
          <LinkElem to={"/about_us"}>About</LinkElem>
          <LinkElem exact to="/stories_list/add_story">
            Submit
          </LinkElem>
          <LinkElem exact to={"/stories_list"}>
            Read
          </LinkElem>
       
          </div>
        </nav>
      </NavBar>
    );
  }
}

export default Navbar;
