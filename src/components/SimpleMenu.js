import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom'
import { styled } from '@material-ui/styles'

const DropdownItem = styled(MenuItem)({
color: "black",
textdecoration: "none",
display:'block',
padding: "10px",
})

const MainButton = styled(Button)({
'@media (min-width: 700px)': {
  
  display: "none"
}
})

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);


  
    function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
  
    return (
      <div>
        <MainButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <Hamburger/>
        </MainButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <DropdownItem component={Link} to="/" onClick={handleClose}>Home</DropdownItem>
          <DropdownItem component={Link} to="/about_us" onClick={handleClose}>About</DropdownItem>
          <DropdownItem component={Link} to="/safety" onClick={handleClose}>Safety</DropdownItem>
        </Menu>
      </div>
    );
  }