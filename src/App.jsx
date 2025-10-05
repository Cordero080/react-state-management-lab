import React from 'react';
import './App.css';
import './Header.css';
import Card from './components/Card';
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
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState('');
  const [popupType, setPopupType] = useState('');
  const [zoomCard, setZoomCard] = useState(null);
  

const handleAddSlayer = (slayer) => {
  if(money < slayer.price) {
    setMessage(`Out of your league! You need $${slayer.price.toLocaleString()} but only have $${money.toLocaleString()}`);
    return;
  }
  setCrew([...crew, slayer]);
  setZombieSlayers(zombieSlayers.filter(s => s.id !== slayer.id));
  setMoney(money - slayer.price);
  setPopup(`${slayer.alias} added`);
  setPopupType('add');
  setTimeout(() => { setPopup(''); setPopupType(''); }, 1500); 
};

const handleRemoveSlayer = (slayer) => {
  setCrew(crew.filter(s => s.id !== slayer.id));
  setZombieSlayers([...zombieSlayers, slayer]);
  setMoney(money + slayer.price);
 setPopup(`${slayer.alias} removed`);
setPopupType('remove');
setTimeout(() => { setPopup(''); setPopupType(''); }, 1500);
};
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
    <>
      <div className="container">
        {popup && (
          <div className={`popup-message${popupType ? ' ' + popupType : ''}`}>{popup}</div>
        )}
        {/* Header Section */}
        <header style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: '18px 0 10px 0', marginBottom: 10, borderBottom: '10px solid #dee90eb6',
          background: 'rgba(10, 10, 30, 0.75)', borderRadius: '0 0 18px 18px',
          textAlign: 'center',
        }}>
          <h1 style={{margin: 0, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1}}>Zombie Slayers</h1>
          <div style={{fontSize: 'clamp(1.1rem, 2.5vw, 2rem)', margin: '10px 0 0 0', lineHeight: 1.2}}>
            Cash: $ {money.toLocaleString()}
          </div>
          {message && (
            <div style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              margin: '10px 0 0 0',
              color: '#f83232ff',
              textShadow: '0 0 10px #e80404f7',
              fontWeight: 'bold',
              lineHeight: 1.2
            }}>
              ⚠️ {message} ⚠️
            </div>
          )}
        </header>

        {/* Crew Section */}
        <section style={{margin: '30px 0 0 0', padding: '0 0 10px 0'}}>
          <h1 className="section-title">Your Crew</h1>
          {crew.length > 0 && (
            <div style={{ textAlign: 'center', margin: '10px 0 8px 0' }}>
              <p style={{ fontSize: '1.1em', margin: 0 }}>
                <strong>Total Strength:</strong> {totalStrength} | <strong>Total Agility:</strong> {totalAgility}
              </p>
            </div>
          )}
          {crew.length === 0 ? (
            <p style={{textAlign: 'center', fontSize: '1.5em', margin:'20px 0 0 0' }}>
              Pick some crew members!
            </p>
          ) : (
            <ul>
              {crew.map((slayer) => (
                zoomCard === slayer.id ? null : (
                  <Card
                    key={slayer.id}
                    slayer={slayer}
                    isCrew={true}
                    isZoomed={false}
                    onAliasClick={(e) => {
                      e.stopPropagation();
                      setZoomCard(zoomCard === slayer.id ? null : slayer.id);
                    }}
                    onButtonClick={() => handleRemoveSlayer(slayer)}
                  />
                )
              ))}
            </ul>
          )}
        </section>

        {/* Divider */}
        <hr style={{border: 'none', borderTop: '2px solid #0ea5e9', margin: '30px 0 20px 0', opacity: 0.5}} />

        {/* Candidates Section */}
        <section style={{margin: '0 0 10px 0'}}>
          
          <h1 className="section-title">Available Candidates</h1>
          <ul>
            {zombieSlayers.map((slayer) => (
              zoomCard === slayer.id ? null : (
                <Card
                  key={slayer.id}
                  slayer={slayer}
                  isCrew={false}
                  isZoomed={false}
                  onAliasClick={(e) => {
                    e.stopPropagation();
                    setZoomCard(zoomCard === slayer.id ? null : slayer.id);
                  }}
                  onButtonClick={() => handleAddSlayer(slayer)}
                />
              )
            ))}
          </ul>
        </section>
      </div>
      {zoomCard && (
        <>
          <div
            className='card-backdrop'
            onClick={() => setZoomCard(null)}
          />
          {(() => {
            // Find the zoomed card in crew or zombieSlayers
            const all = [...crew, ...zombieSlayers];
            const slayer = all.find(s => s.id === zoomCard);
            if (!slayer) return null;
            const isCrew = crew.some(s => s.id === zoomCard);
            return (
              <Card
                slayer={slayer}
                isCrew={isCrew}
                isZoomed={true}
                onAliasClick={(e) => {
                  e.stopPropagation();
                  setZoomCard(null);
                }}
                onButtonClick={() => isCrew ? handleRemoveSlayer(slayer) : handleAddSlayer(slayer)}
              />
            );
          })()}
        </>
      )}
    </>
  );
}

export default App;