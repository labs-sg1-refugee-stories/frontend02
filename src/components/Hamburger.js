import React from 'react';
import styled from 'styled-components'


const HamburgerMenu = styled.div`
color: white;
display:flex;
align-items:flex-start;
margin-top: 20px;
margin-right: 75%;
@media (min-width: 700px) {
    display:none;
}
    button {
        background-color: transparent;
        border: none;
        color:white;
        font-size:40px;
        display:flex;
        align-items: flex-start;
    }
`

class Hamburger extends React.Component {
    state = {  }
    render() { 
        return ( 
            <HamburgerMenu>
                <button onClick={""}><i class="fas fa-bars"></i></button>
            </HamburgerMenu>
         );
    }
}
 
export default Hamburger;