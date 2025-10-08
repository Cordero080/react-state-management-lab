// src/components/BackgroundMusic.jsx
import React, { useRef, useEffect } from 'react';

const BgMusic = () => {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  let playbackStarted = false;

  const fadeIn = (audioElement) => {
    let volume = 0;
    audioElement.volume = volume;
    const interval = setInterval(() => {
      volume = Math.min(volume + 0.1, 1);
      audioElement.volume = volume;
      if (volume === 1) clearInterval(interval);
    }, 200);
  };

  const handleTrackEnd = (currentTrack, nextTrack) => {
    nextTrack.play().catch((error) => console.error('Error playing track:', error));
    fadeIn(nextTrack);
  };

  useEffect(() => {
    const handleScreenClick = () => {
      if (!playbackStarted && track1Ref.current) {
        playbackStarted = true;
        track1Ref.current.play().catch((error) => console.error('Error playing Track 1:', error));
      }
    };

    document.addEventListener('click', handleScreenClick);

    if (track1Ref.current && track2Ref.current) {
      track1Ref.current.addEventListener('ended', () => handleTrackEnd(track1Ref.current, track2Ref.current));
      track2Ref.current.addEventListener('ended', () => handleTrackEnd(track2Ref.current, track1Ref.current));
    }

    return () => {
      document.removeEventListener('click', handleScreenClick);

      if (track1Ref.current && track2Ref.current) {
        track1Ref.current.removeEventListener('ended', () => handleTrackEnd(track1Ref.current, track2Ref.current));
        track2Ref.current.removeEventListener('ended', () => handleTrackEnd(track2Ref.current, track1Ref.current));
      }
    };
  }, []);

  return (
    <div>
      <audio ref={track1Ref} src="/music/reencoded-count-0.mp3" loop={false} />
      <audio ref={track2Ref} src="/music/numbers-duplessi.mp3" loop={false} />
    </div>
  );
};

export default BgMusic;