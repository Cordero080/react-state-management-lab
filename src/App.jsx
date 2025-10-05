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

// Fighter data with fixedaliass
const slayers = [
  {
    id: 1,
   alias: 'Nova',
    role: 'Survivor',
    img: survivorImg,
    price: 12000,
    strength: 7,
    agility: 5,
  },
  {
    id: 2,
   alias: 'Raven',
    role: 'Scavenger',
    img: scavengerImg,
    price: 10000,
    strength: 5,
    agility: 7,
  },
  {
    id: 3,
   alias: 'Shinobi',
    role: 'Shadow',
    img: shadowImg,
    price: 18000,
    strength: 8,
    agility: 8,
  },
  {
    id: 4,
   alias: 'Sacagawa',
    role: 'Tracker',
    img: trackerImg,
    price: 14000,
    strength: 7,
    agility: 6,
  },
  {
    id: 5,
   alias: 'Deadeye',
    role: 'Sharpshooter',
    img: sharpshooterImg,
    price: 20000,
    strength: 6,
    agility: 8,
  },
  {
    id: 6,
   alias: 'Kusushi',
    role: 'Medic',
    img: medicImg,
    price: 15000,
    strength: 5,
    agility: 7,
  },
  {
    id: 7,
   alias: 'Nikola',
    role: 'Engineer',
    img: engineerImg,
    price: 16000,
    strength: 6,
    agility: 5,
  },
  {
    id: 8,
   alias: 'Max',
    role: 'Brawler',
    img: brawlerImg,
    price: 11000,
    strength: 8,
    agility: 3,
  },
  {
    id: 9,
   alias: 'Süülayl',
    role: 'Infiltrator',
    img: infiltratorImg,
    price: 17000,
    strength: 5,
    agility: 9,
  },
  {
    id: 10,
   alias: "Ra-Okhan ",
    role: 'Leader',
    img: leaderImg,
    price: 22000,
    strength: 7,
    agility: 6,
  },
];

const App = () => {
  const [crew, setCrew] = useState([]);
  const [money, setMoney] = useState(2357113);
  const [zombieSlayers, setZombieSlayers] = useState(slayers)
  const [message,setMessage] = useState('');

const handleAddSlayer = (slayer) => {
  if(money < slayer.price) {
    setMessage(`Out of your league! You need $${slayer.price.toLocaleString()} but only have $${money.toLocaleString()}`);
    return;
  }
  // After slayer added, old error message should disappear
  setMessage('');
  //.1 Adding to the crew
  setCrew([...crew, slayer]);
  // NOTE: UPDATE TRIGGERS REMOVAL = REMOVE = UPDATE
 // Go through each slayer(s) in crew array. For each one (s). Check if s.id is NOT EQUAL to the slayer.id we're removing. Keep the ones that pass this test."
 // Those slayers will be in our updated crew array.

//  Let's say you're removing Raven (id: 2) from this crew:
//  crew = [
//   { id: 1, alias: 'Nova' },
//   { id: 2, alias: 'Raven' },  // ← Removing this one
//   { id: 3, alias: 'Shinobi' }
// ]

// slayer.id = 2  // The one we're removing
// Loop 1:

// f = { id: 1, alias: 'Nova' }
// Test: f.id !== slayer.id → 1 !== 2 → true ✓ Keep it

// Loop 2:

// f = { id: 2, alias: 'Raven' }
// Test: f.id !== slayer.id → 2 !== 2 → false ✗ Remove it

// Loop 3:

// f = { id: 3, alias: 'Shinobi' }
// Test: f.id !== slayer.id → 3 !== 2 → true ✓ Keep it

// Result: [Nova, Shinobi] (Raven removed)
  const updatedSlayers = zombieSlayers.filter(s => s.id !== slayer.id);
  setZombieSlayers(updatedSlayers);

  //.2 Go 4 broke
  setMoney(money - slayer.price);
};

const handleRemoveSlayer = (slayer) => {
  // Remove from crew
  const updatedCrew = crew.filter(s => s.id !== slayer.id);
  setCrew(updatedCrew);
// Add back to available fighters
setZombieSlayers([...zombieSlayers, slayer]);

// Refund $$$
setMoney(money + slayer.price);

}
// reduce() == REDUCING a COLLECTION (ARRAY) DOWN to a SINGLE VALUE (many numbers become one, hece: "reducing")
//"Reduce" = Take many items and condense them into one result
// sum = 0 = (method provides starting value, 0)
// ie; slayer = { alias: 'Nova', agility: 5 }
// Returns: 0 + 5(slayer.strength) = 5 -----------------------------+
// sum = 5 (result from round 1)
// slayer = { alias: 'Raven', agility: 7 }
// Returns: 5 + 7 = 12   (Nova + Raven)...etc.

const totalStrength = crew.reduce((sum, slayer) => sum + slayer.strength, 0);
const totalAgility = crew.reduce((sum, slayer) => sum + slayer.agility, 0);
// Slider navigation functions
  return (
    <div className="container">
      <h1>
       Zombie Slayers{' '}
        
       
      </h1>
      <p style={{textAlign: 'center', fontSize: '1.5em', margin: '20px'}}>
        Cash: $ {money.toLocaleString()}
        {/* Error message display */}
        {message && (
          <p style= {{
            textAlign: 'center',
            fontSize: '1.3em',
            margin: '20px',
            color: '#f83232ff',
            textShadow: '0 0 10px #e80404f7',
            fontWeight: 'bold',
          }}>
             ⚠️ {message} ⚠️
          </p>
        )}
      </p>
      {/* crew section - uses  existing ul/li styles */}
      <h1 style={{ fontSize: '2em'}}>Your Crew</h1>
      {crew.length > 0 && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <p style={{ fontSize: '1.3em' }}><strong>Total Strength:</strong>{totalStrength} | <strong>Total Agility:</strong> {totalAgility} </p>
        </div>
      )}

      {crew.length === 0 ? (

        <p style={{textAlign: 'center', fontSize: '1.2em', margin:'40px' }}>
          Pick some crew members!
        </p>
      ): (
    
      <ul>
        {crew.map((slayer) => (
        <li key= {slayer.id}>
          <img src={slayer.img} alt={slayer.role}/>
          <h3>{slayer.role}</h3>
          <p><strong>Name:</strong> {slayer.alias}</p>
          <p><strong>Price:</strong> {slayer.price}</p>
          <p><strong>Strength:</strong> {slayer.strength}</p>
          <p><strong>Agility:</strong> {slayer.agility}</p>
          <button onClick={() => handleRemoveSlayer(slayer)}>Remove</button>
        </li>
        ))}
        </ul>
  )}
        <h1 style={{ fontSize: '2em'}}>Available Candidates</h1>
        <ul>
        {zombieSlayers.map((slayer) => (
          <li key={slayer.id}>
            <img src={slayer.img} alt={slayer.role}/>
            <h3>{slayer.role}</h3>
            <p><strong>Alias:</strong> {slayer.alias}</p>
            <p><strong>Price:</strong> ${slayer.price}.</p>
            <p><strong>Strength:</strong> {slayer.strength}</p>
            <p><strong>Agility:</strong> {slayer.agility}</p>
            <button onClick={() => handleAddSlayer(slayer)}>Add to crew</button>
          </li>
        ))}
      </ul>
    </div>
    

  );
}

export default App;