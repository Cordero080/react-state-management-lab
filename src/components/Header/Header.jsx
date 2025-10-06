import React from 'react';
import './Header.css';

const Header = ({ money, message }) => (
  <header className="header-section">
    <h1 className="header-title">Z🧟‍♂️mbie Slayers</h1>
    <div className="header-cash">
      Cash: $ {money.toLocaleString()}
    </div>
    {message && (
      <div className="header-message">
        ⚠️ {message} ⚠️
      </div>
    )}
  </header>
);

export default Header;
