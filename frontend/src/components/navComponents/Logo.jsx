import React from 'react';
import logo from '../images/logo.png';
import "./logo.css" 

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="https://as2.ftcdn.net/v2/jpg/06/15/64/17/1000_F_615641772_onaSOWAJDLcIBB3wiPQACGT8vcIuOiPJ.jpg" />
      <div className="universityName">
        <a href="#" >Novalyn</a>
        <a href="#" >University</a>
      </div>
    </div>
  );
}

export default Logo;
