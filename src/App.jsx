
import React from 'react';
import './App.css';
import { useState } from 'react';

// Import images
import survivorImg from './assets/survivor2.png';
import scavengerImg from './assets/scavenger.png';
import shadowImg from './assets/shadow.png';
import trackerImg from './assets/tracker.png';
import sharpshooterImg from './assets/sharpshooter.png';
import brawlerImg from './assets/brawler.png';
import infiltratorImg from './assets/infiltrator.png';
import medicImg from './assets/medic.png';
import leaderImg from './assets/leader.png';
import engineerImg from './assets/engineer.png';

// Fighter data with fixed names
const fighters = [
  {
    id: 1,
    name: 'Nova',
    role: 'Survivor',
    img: survivorImg,
    price: 12000,
    strength: 7,
    agility: 5,
  },
  {
    id: 2,
    name: 'Raven',
    role: 'Scavenger',
    img: scavengerImg,
    price: 10000,
    strength: 5,
    agility: 7,
  },
  {
    id: 3,
    name: 'Shinobi',
    role: 'Shadow',
    img: shadowImg,
    price: 18000,
    strength: 8,
    agility: 8,
  },
  {
    id: 4,
    name: 'Sacagawa',
    role: 'Tracker',
    img: trackerImg,
    price: 14000,
    strength: 7,
    agility: 6,
  },
  {
    id: 5,
    name: 'Deadeye',
    role: 'Sharpshooter',
    img: sharpshooterImg,
    price: 20000,
    strength: 6,
    agility: 8,
  },
  {
    id: 6,
    name: 'Kusushi',
    role: 'Medic',
    img: medicImg,
    price: 15000,
    strength: 5,
    agility: 7,
  },
  {
    id: 7,
    name: 'Nikola',
    role: 'Engineer',
    img: engineerImg,
    price: 16000,
    strength: 6,
    agility: 5,
  },
  {
    id: 8,
    name: 'Max',
    role: 'Brawler',
    img: brawlerImg,
    price: 11000,
    strength: 8,
    agility: 3,
  },
  {
    id: 9,
    name: 'Süülayl',
    role: 'Infiltrator',
    img: infiltratorImg,
    price: 17000,
    strength: 5,
    agility: 9,
  },
  {
    id: 10,
    name: "Ra-Okhan ",
    role: 'Leader',
    img: leaderImg,
    price: 22000,
    strength: 7,
    agility: 6,
  },
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(1010101);
  const [zombieFighters, setZombieFighters] = useState(fighters)

const handleAddFighter = (fighter) => {
  if(money < fighter.price) {
    console.log("Out of your league");
    return;
  }
  
  //.1 Adding to the crew
  setTeam([...team, fighter]);

  const updatedFighters = zombieFighters.filter(f => f.id !== fighter.id);
  setZombieFighters(updatedFighters);

  //.2 Go 4 broke
  setMoney(money - fighter.price);
};

const handleRemoveFighter = (fighter) => {
  // Remove from crew
  const updatedTeam = team.filter(f => f.id !== fighter.id);
  setTeam(updatedTeam);
// Add back to available fighters
setZombieFighters([...zombieFighters, fighter]);

// Refund $$$
setMoney(money + fighter.price);

}
const totalStrength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
const totalAgility = team.reduce((sum, fighter) => sum + fighter.agility, 0);
// Slider navigation functions
  return (
    <div className="container">
      <h1>Zombie Slayers</h1>
      <p style={{textAlign: 'center', fontSize: '1.5em', margin: '20px'}}>
        Cash: {money.toLocaleString()} Fr.
      </p>
      {/* Team section - uses  existing ul/li styles */}
      <h1 style={{ fontSize: '2em'}}>Your Crew</h1>
      {team.length > 0 && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <p style={{ fontSize: '1.3em' }}><strong>Total Strength:</strong>{totalStrength} | <strong>Total Agility:</strong> {totalAgility} </p>
        </div>
      )}

      {team.length === 0 ? (

        <p style={{textAlign: 'center', fontSize: '1.2em', margin:'40px' }}>
          Pick some crew members!
        </p>
      ): (
    
      <ul>
        {team.map((fighter) => (
        <li key= {fighter.id}>
          <img src={fighter.img} alt={fighter.role}/>
          <h3>{fighter.role}</h3>
          <p><strong>Name:</strong> {fighter.name}</p>
          <p><strong>Price:</strong> {fighter.price}</p>
          <p><strong>Strength:</strong> {fighter.strength}</p>
          <p><strong>Agility:</strong> {fighter.agility}</p>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
        </li>
        ))}
        </ul>
  )}
        <h1 style={{ fontSize: '2em'}}>Available Candidates</h1>
        <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.role}/>
            <h3>{fighter.role}</h3>
            <p><strong>Alias:</strong> {fighter.name}</p>
            <p><strong>Price:</strong> ${fighter.price}.</p>
            <p><strong>Strength:</strong> {fighter.strength}</p>
            <p><strong>Agility:</strong> {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add to Team</button>
          </li>
        ))}
      </ul>
    </div>
    

  );
}

export default App;