import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    
    
  // Renders the entire app on the DOM
  render() {
    // const graphImage = require('../../../public/images/davidfriday.jpg')

    return (
      <div className="Headerclass">
        <h2>David Friday</h2>
        {/* <img src={graphImage}/> */}
      </div>
    );
  }
}

export default Header;
