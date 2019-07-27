import React from 'react';
import styled from "styled-components";

const SubMenu = styled.p`
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 30px;
`;
const Subheader = (props) => {
    return ( 
        <SubMenu>{props.header}</SubMenu>
     );
}
 
export default Subheader;