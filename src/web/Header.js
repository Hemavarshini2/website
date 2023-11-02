import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <header>
        <div className='hi'>
        <h1>Botanic Bazaar</h1>
        </div>
        <ul>
        <li><Link to="/Login">Home</Link></li>
             <li><Link to="/about">About us</Link></li> 
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/plantList">PlantList</Link></li> 
              

        </ul>
      </header>
    </div>
    
  );
}

export default Header;