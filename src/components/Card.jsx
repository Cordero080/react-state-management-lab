import React from 'react';
import './Card.css';

const Card = ({ slayer, isCrew, onAliasClick, onButtonClick, isZoomed }) => (
  <li className={`card${isZoomed ? ' zoom-card' : ''}`}>
    <img src={slayer.img} alt={slayer.role} />
    <h3>{slayer.role}</h3>
    <p>
      <strong>{isCrew ? 'Name' : 'Alias'}:</strong>{' '}
      <span
        onClick={onAliasClick}
        style={{ cursor: 'pointer', textDecoration: 'underline', color: isCrew ? '#f62e0aff' : '#fff764d9' }}
      >
        {slayer.alias}
      </span>
    </p>
    <p><strong>Price:</strong> ${slayer.price}</p>
    <p><strong>Strength:</strong> {slayer.strength}</p>
    <p><strong>Agility:</strong> {slayer.agility}</p>
    {isCrew ? (
      <button onClick={onButtonClick}>Remove</button>
    ) : (
      <button onClick={onButtonClick}>Add to crew</button>
    )}
  </li>
);

export default Card;
