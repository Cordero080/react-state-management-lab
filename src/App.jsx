import React from 'react';
import './App.css';
import './Header.css';
import Card from './components/Card/Card';
import CrewList from './components/CrewList/CrewList';
import CandidatesList from './components/CandidatesList/CandidatesList';
import ZoomCardModal from './components/ZoomCardModal/ZoomCardModal';
import Header from './components/Header/Header';
import { useState } from 'react';
import { handleAddSlayer, handleRemoveSlayer, getTotalStrength, getTotalAgility } from './appHandlers';

// Import images
import survivorImg from './assets/images/survivor2.png';
import scavengerImg from './assets/images/scavenger.png';
import shadowImg from './assets/images/shadow.png';
import trackerImg from './assets/images/tracker.png';
import sharpshooterImg from './assets/images/sharpshooter.png';
import brawlerImg from './assets/images/brawler.png';
import infiltratorImg from './assets/images/infiltrator.png';
import medicImg from './assets/images/medic.png';
import leaderImg from './assets/images/leader.png';
import engineerImg from './assets/images/engineer.png';

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
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState('');
  const [popupType, setPopupType] = useState('');
  const [zoomCard, setZoomCard] = useState(null);
  

const onAddSlayer = (slayer) =>
  handleAddSlayer({
    slayer,
    money,
    setMessage,
    setCrew,
    crew,
    setZombieSlayers,
    zombieSlayers,
    setMoney,
    setPopup,
    setPopupType,
  });

const onRemoveSlayer = (slayer) =>
  handleRemoveSlayer({
    slayer,
    setCrew,
    crew,
    setZombieSlayers,
    zombieSlayers,
    setMoney,
    setPopup,
    setPopupType,
  });

const totalStrength = getTotalStrength(crew);
const totalAgility = getTotalAgility(crew);
// Slider navigation functions
  return (
    <>
      <div className="container">
        {popup && (
          <div className={`popup-message${popupType ? ' ' + popupType : ''}`}>{popup}</div>
        )}
        {/* Header Section */}
        <Header money={money} message={message} />

        {/* Crew Section */}
        <CrewList
          crew={crew}
          zoomCard={zoomCard}
          setZoomCard={setZoomCard}
          handleRemoveSlayer={onRemoveSlayer}
          totalStrength={totalStrength}
          totalAgility={totalAgility}
        />

        {/* Divider */}
        <hr style={{border: 'none', borderTop: '2px solid #0ea5e9', margin: '30px 0 20px 0', opacity: 0.5}} />

        {/* Candidates Section */}
        <CandidatesList
          zombieSlayers={zombieSlayers}
          zoomCard={zoomCard}
          setZoomCard={setZoomCard}
          handleAddSlayer={onAddSlayer}
        />
      </div>
      <ZoomCardModal
        zoomCard={zoomCard}
        crew={crew}
        zombieSlayers={zombieSlayers}
        setZoomCard={setZoomCard}
  handleAddSlayer={onAddSlayer}
  handleRemoveSlayer={onRemoveSlayer}
      />
    </>
  );
}

export default App;