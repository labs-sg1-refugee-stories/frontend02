import React from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
padding: 10px 20px;
font-size: 2rem;
background-color: transparent;
color: black;
border-radius:3px;
width: 150px;
border: none;
height: ${props => props.height ? "none" : "50px"};

&:focus{
  outline:none;
}
`
const Button = (props) => {
    return  <ButtonStyle>{props.text}</ButtonStyle>
}
 export default Button;