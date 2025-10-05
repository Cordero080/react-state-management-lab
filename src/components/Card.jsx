import React, { useRef, useEffect } from 'react';
import './Card.css';
import shadowAnimation from '../assets/shadow-animation.mp4';
import sharpshooterAnimation from '../assets/sharpshooter.mp4';
import brawlerAnimation from '../assets/brawler.mp4';
import scavengerAnimation from '../assets/scavenger.mp4';
import trackerAnimation from '../assets/tracker.mp4';
import engineerAnimation from '../assets/engineer.mp4';
import infiltratorAnimation from '../assets/infiltrator.mp4';
import leaderAnimation from '../assets/leader.mp4';
import medicAnimation from '../assets/medic.mp4';

const Card = ({ slayer, isCrew, onAliasClick, onButtonClick, isZoomed }) => {
  const sharpshooterRef = useRef(null);
  const brawlerRef = useRef(null);
  const scavengerRef = useRef(null);
  const trackerRef = useRef(null);
  const engineerRef = useRef(null);
  const infiltratorRef = useRef(null);
  const medicRef = useRef(null);
  const leaderRef = useRef(null);

  useEffect(() => {
    if (isZoomed && slayer.role === 'Sharpshooter' && sharpshooterRef.current) {
      const video = sharpshooterRef.current;
      const setTime = () => {
        video.currentTime = 1;
      };
      video.addEventListener('loadedmetadata', setTime);
      // If already loaded, set immediately
      if (video.readyState >= 1) setTime();
      return () => video.removeEventListener('loadedmetadata', setTime);
    }
  }, [isZoomed, slayer.role]);

  return (
    <li className={`card${isZoomed ? ' zoom-card' : ''}`}>
      {isZoomed && slayer.role === 'Shadow' ? (
        <video
          src={shadowAnimation}
          autoPlay
          loop
          muted
          playsInline
          className="zoom-card-img"
          style={{ width: '160px', height: '160px', objectFit: 'cover', marginBottom: '12px' }}
        />
      ) : isZoomed && slayer.role === 'Sharpshooter' ? (
        <video
          ref={sharpshooterRef}
          src={sharpshooterAnimation}
          autoPlay
          loop
          muted
          playsInline
          className="zoom-card-img"
          style={{ width: '160px', height: '160px', objectFit: 'cover', marginBottom: '12px' }}
        />

      ) :  isZoomed && slayer.role === 'Brawler' ? (

        <video
        ref={brawlerRef}
        src={brawlerAnimation}
        autoPlay
        loop
        muted
        playsInline
        className='zoom-card-img'
        style={{width: '160px', height: '160px', objectFit: 'cover', marginBottom: '12px'}}
        />

      ) : isZoomed && slayer.role === 'Scavenger' ? (
        <video
        ref={scavengerRef}
        src={scavengerAnimation}
        autoPlay
        loop
        muted
        playsInline
        className='zoom-card-img'
        style ={{ width: '160px', height: '160px', objectFit:'cover',
          marginBottom:'12px'}}
        />

      ) : isZoomed && slayer.role === 'Tracker' ? (
        <video
        ref={trackerRef}
        src={trackerAnimation}
        autoPlay
        loop
        muted
        playsInline
        className='zoom-card-img' style ={{ width: '160px', height: '160px', objectFit:'cover',
          marginBottom:'12px'}}
          />
      ) : isZoomed && slayer.role === 'Engineer' ? (
        <video
        ref={engineerRef}
        src={engineerAnimation}
        autoPlay
        loop
        muted
        playsInline
        className='zoom-card-img'
        style={{ width: '160px', height: '160px', objectFit: 'cover' }}
        />
      ) : isZoomed && slayer.role === 'Infiltrator' ? (
        <video
        ref={infiltratorRef}
        src={infiltratorAnimation}
        autoPlay
        loop
        muted
        playsInline
        className='zoom-card-img'
        style={{ width: '160px', height: '160px', objectFit: 'cover' }}
        />
      ) : isZoomed && slayer.role === 'Leader' ? (
        <video
          ref={leaderRef}
          src={leaderAnimation}
          autoPlay
          loop
          alt="Leader"
          muted
          playsInline
          className="zoom-card-img"
          style={{ width: '160px', height: '160px', objectFit: 'cover', marginBottom: '12px' }}
        />
      ) : isZoomed && slayer.role === 'Medic' ? (
        <video
          ref={medicRef}
          src={medicAnimation}
          autoPlay
          loop
          muted
          playsInline
          className="zoom-card-img"
          style={{ width: '160px', height: '160px', objectFit: 'cover', marginBottom: '12px' }}
        />
      ) : (
        <img src={slayer.img} alt={slayer.role} />
      )}
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
};

export default Card;
