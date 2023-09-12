import React from 'react';
import './styles.css';
import Nav from '../Nav';

const Header = () => (
  <header className='home-header'>
    <Nav />
    <h2>Titulo desta pagina</h2>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    <p>
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
  </header>
);

export default Header;
