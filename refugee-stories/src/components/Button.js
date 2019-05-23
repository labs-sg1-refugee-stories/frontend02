import React from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
padding: 10px 20px;
font-size: 2rem;
border-radius: 5px;
color: white;
background-color: #9C000B;
    :hover{
      transform: translateY(-3px);
      transition: all .4s;
    }
`
const Button = (props) => {
    return  <ButtonStyle>{props.text}</ButtonStyle>
}
 export default Button;