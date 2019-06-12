import React from 'react';
import styled from 'styled-components'


const HamburgerMenu = styled.div`
color: black;
display:flex;
align-items:flex-start;


font-size: 30px;
/* @media (min-width: 700px) {
    display:none;
}
  */
`

class Hamburger extends React.Component {
    state = {  }
    render() { 
        return ( 
            <HamburgerMenu>
                <i class="fas fa-bars"></i>
            </HamburgerMenu>
         );
    }
}
 
export default Hamburger;