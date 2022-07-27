import React from 'react';
import "./navbar.scss"
import Logo from '../images/logo.png'
function Navbar() {
  return (
    <div className="navbar">
      <div className='navbar_logo'><img src={Logo} alt=""/></div>
      
      <div className='navbar_items'>
        <div>icon1</div><div>icon1</div><div>icon1</div><div>icon1</div>
      </div>
    </div>
  );
}

export default Navbar;
