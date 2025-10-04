
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
    price: 12,
    strength: 6,
    agility: 4,
  },
  {
    id: 2,
    name: 'Raven',
    role: 'Scavenger',
    img: scavengerImg,
    price: 10,
    strength: 5,
    agility: 5,
  },
  {
    id: 3,
    name: 'Shinobi',
    role: 'Shadow',
    img: shadowImg,
    price: 18,
    strength: 7,
    agility: 8,
  },
  {
    id: 4,
    name: 'Sacagawa',
    role: 'Tracker',
    img: trackerImg,
    price: 14,
    strength: 7,
    agility: 6,
  },
  {
    id: 5,
    name: 'Deadeye',
    role: 'Sharpshooter',
    img: sharpshooterImg,
    price: 20,
    strength: 6,
    agility: 8,
  },
  {
    id: 6,
    name: 'Kusushi',
    role: 'Medic',
    img: medicImg,
    price: 15,
    strength: 5,
    agility: 7,
  },
  {
    id: 7,
    name: 'Nikola',
    role: 'Engineer',
    img: engineerImg,
    price: 16,
    strength: 6,
    agility: 5,
  },
  {
    id: 8,
    name: 'Max',
    role: 'Brawler',
    img: brawlerImg,
    price: 11,
    strength: 8,
    agility: 3,
  },
  {
    id: 9,
    name: 'Süülayl',
    role: 'Infiltrator',
    img: infiltratorImg,
    price: 17,
    strength: 5,
    agility: 9,
  },
  {
    id: 10,
    name: "Ra-Okhan ",
    role: 'Leader',
    img: leaderImg,
    price: 22,
    strength: 7,
    agility: 6,
  },
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  
  // Name arrays for each role
  const fighterNames = {
    'Survivor': ['Nova', 'Phoenix', 'Sam', 'Riley', 'Jordan', 'Ash', 'Onyx', 'Vita', 'Nova'],
    'Scavenger': ['Raven', 'Maya', 'Kai', 'Rio', 'Crow', 'Echo', 'Vetra', 'X', 'Cipher'],
    'Shadow': ['Shinobi', 'Spectra', 'Nyx', 'Ghost', 'Whisper', 'Phantom', 'Shade', 'Veil', 'Vanta'],
    'Tracker': ['Sacagawa', 'Boone', 'Aragorn', 'Hawkeye', 'Tala', 'Sequoyah', 'Sun Tzu', 'Itzcoatl', 'Falcon'],
    'Sharpshooter': ['Deadeye', 'Kane', 'Tecumseh', 'Eagle', 'Bullseye', 'Onyx', 'Shyne', 'Odin', 'Hawkeye'],
    'Medic': ['Doc', 'Grace', 'Mercy', 'Esperanza', 'Archangel', 'Sage', 'Vita', 'Yemayá', 'Oshun'],
    'Engineer': ['Da Vinci', 'Tesla', 'Stark', 'Gear', 'Sage', 'Flux', 'Vega', 'Orion', 'Atlas'],
    'Brawler': ['Max', 'Rocky', 'Bull', 'Titan', 'Rex', 'Adamantine', 'Blaze', 'Storm', 'Mars'],
    'Infiltrator': ['Wraith', 'Jaguar Paw', 'Ghost', 'Snake', 'Viper', 'Echo', 'Mirage', 'Falcon', 'Jiao Sidao'],
    'Leader': ['Khan', 'Alexander', 'Maximus', 'Musashi', 'Atlas', 'Omega', 'Apex', 'Zeus', 'Method']
  };
  
  const [zombieFighters, setZombieFighters] = useState(fighters)

const handleAddFighter = (fighter) => {
  // Get random name from the role's name array
  const roleNames = fighterNames[fighter.role];
  const randomName = roleNames[Math.floor(Math.random() * roleNames.length)];
  
  // Create new fighter with random name and unique ID
  const newFighter = {
    ...fighter,
    id: Date.now(), // Unique ID based on timestamp
    name: randomName
  };
  
  //.1 Adding to the crew
  setTeam([...team, newFighter]);

  //.2 Go 4 broke
  setMoney(money - fighter.price);

  console.log('Adding fighter', newFighter);
};

// Slider navigation functions
  return (
    <div className="container">
      <h1>Zombie Fighters</h1>
      
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.role}/>
            <h3>{fighter.role}</h3>
            <p><strong>Name:</strong> {fighter.name}</p>
            <p><strong>Price:</strong> ${fighter.price}k</p>
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