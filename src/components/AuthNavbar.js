import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkElem = styled(NavLink)`
  // example style
  &.active {
    color: #0180c7;
  }
`;

const NavBar = styled.div`
width: 100%;
background-color: #fff;
    
    Nav{
      display:flex;
      align-items: baseline;
      justify-content: space-between;
      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
      }
        a{
       
        text-decoration: none;
        color: #33313b;
        font-size: 2rem;
        font-size: 2.5rem;
        font-weight: 700;
        margin-right: 50px;
        
        @media (max-width: 700px) {
          margin-right: 0;
          width: 100%;
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
  background-color: #0180c7;
  color: white;
  font-size: 5rem;
  padding-bottom: 15px;
  padding-right: 5px;
  padding-left: 5px;
  margin-left: 100px;
  span {
    display: block;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  findTab = tabNumber => {
    this.setState({
      ...this.state,
      activeTab: tabNumber,
    });
  };

  logOut = () => {
    localStorage.clear();
  };

  render() {
    return (
      <NavBar>
        <nav>
          <Logo>RS</Logo>
          <Mobile>
            <LinkElem onClick={this.logOut} exact to={"/"}>
              Logout
            </LinkElem>
            <LinkElem exact to={"/admin_stories_list"}>
              Review
            </LinkElem>
            <LinkElem exact to={"/admin_accepted_stories_list"}>
              Delete
            </LinkElem>
          </Mobile>
        </nav>
      </NavBar>
    );
  }
}

export default Navbar;
