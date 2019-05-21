import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`



padding-top: 15px;
padding-bottom: 15px;
width: 100%
border-bottom: 1px solid white;
background-color: #2aa18a


    nav{
      display:flex;
      justify-content: space-around;

      a{
       
        text-decoration: none
        color: white;
        font-size: 2rem;
        border-bottom: 1px solid #2aa18a;
        font-size: 2.1rem;

        :hover{
          color:white;
          transition: all .8s;
          border-bottom: 1px solid white;
        }
        
    }
}
`;

const Navbar = () => {
  return (
    <NavBar>
      <nav>
        <Link to={"/login"}>Login</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/about_us"}>About Us</Link>
        <Link to="/stories_list/add_story" >Submit Story</Link>
        <Link to={"/stories_list"}>Read</Link>
        <Link to={"/admin_stories_list"}>( secure ADMIN )</Link>
     
      </nav>
    </NavBar>
  );
};

export default Navbar;
