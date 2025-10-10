import React, { useRef, useEffect } from 'react';
import './Card.css';
import './CardZoom.css';
import shadowAnimation from '../../assets/videos/shadow-animation.mp4';
import sharpshooterAnimation from '../../assets/videos/sharpshooter.mp4';
import brawlerAnimation from '../../assets/videos/brawler.mp4';
import scavengerAnimation from '../../assets/videos/scavenger.mp4';
import trackerAnimation from '../../assets/videos/tracker.mp4';
import engineerAnimation from '../../assets/videos/engineer.mp4';
import infiltratorAnimation from '../../assets/videos/infiltrator.mp4';
import leaderAnimation from '../../assets/videos/leader.mp4';
import medicAnimation from '../../assets/videos/medic.mp4';

const Card = ({ slayer, isCrew, onAliasClick, onButtonClick, isZoomed }) => {
  const sharpshooterRef = useRef(null);
  const brawlerRef = useRef(null);
  const scavengerRef = useRef(null);
  const trackerRef = useRef(null);
  const engineerRef = useRef(null);
  const infiltratorRef = useRef(null);
  const medicRef = useRef(null);
  const leaderRef = useRef(null);

  const videoMap = {
    Shadow: { src: shadowAnimation },
    Sharpshooter: { src: sharpshooterAnimation, ref: sharpshooterRef },
    Brawler: { src: brawlerAnimation, ref: brawlerRef },
    Scavenger: { src: scavengerAnimation, ref: scavengerRef },
    Tracker: { src: trackerAnimation, ref: trackerRef },
    Engineer: { src: engineerAnimation, ref: engineerRef },
    Infiltrator: { src: infiltratorAnimation, ref: infiltratorRef },
    Leader: { src: leaderAnimation, ref: leaderRef },
    Medic: { src: medicAnimation, ref: medicRef },
  };

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

  const renderVideo = () => {
    const videoData = videoMap[slayer.role];
    if (videoData) {
      return (
        <video
          ref={videoData.ref}
          src={videoData.src}
          autoPlay
          loop
          muted
          playsInline
          className="zoom-card-img"
        />
      );
    }
    return <img src={slayer.img} alt={slayer.role} />;
  };

  return (
    <li className={`card${isZoomed ? ' zoom-card' : ''}`}>
      {isZoomed ? renderVideo() : <img src={slayer.img} alt={slayer.role} />}
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
