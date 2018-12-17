import React, { Component } from 'react';
// import me from './me.png';

class Header extends Component {
    render() {
      return (
        <div className="Header">
          <img id="me" alt="me" height="90px" src={`/images/me.png`}/>
          <p id="name">Carson Otto</p> 
        </div>
      );
    }
  }
  
  export default Header;