import React from 'react';
import "./Appbar.css"

function Appbar() {
  return <div className="top">
    <div className="topLeft">
    <i className="topIcon fab fa-twitter-square"></i>
    <i className="topIcon fab fa-instagram-square"></i>
    <i className="topIcon fab fa-facebook-square"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">Home</li>
        <li className="topListItem">About</li>
        <li className="topListItem">Contact</li>
      </ul>
    </div>
    <div className="topRight">
    <i className="topSearch fas fa-search"></i>
    <i class="fas fa-user"></i>
    <l className="topLogout">Logout</l>
    
    </div>
  </div>;
}

export default Appbar;
