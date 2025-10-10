// src/components/BackgroundMusic.jsx
import React, { useRef, useEffect } from 'react';

const BgMusic = () => {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  let playbackStarted = false;

  const fadeIn = (audioElement) => {
    audioElement.volume = 0;
    const interval = setInterval(() => {
      audioElement.volume = Math.min(audioElement.volume + 0.1, 1);
      if (audioElement.volume === 1) clearInterval(interval);
    }, 200);
  };

  useEffect(() => {
    const playTrack = (trackRef, nextTrackRef) => {
      trackRef.current?.play().then(() => fadeIn(trackRef.current)).catch(console.error);
      trackRef.current?.addEventListener('ended', () => playTrack(nextTrackRef, trackRef));
    };

    const handleScreenClick = () => {
      if (!playbackStarted) {
        playbackStarted = true;
        playTrack(track1Ref, track2Ref);
      }
    };

    document.addEventListener('click', handleScreenClick);

    return () => {
      document.removeEventListener('click', handleScreenClick);
      [track1Ref, track2Ref].forEach(ref => ref.current?.removeEventListener('ended', () => {}));
    };
  }, []);

  return (
    <div>
      <audio ref={track1Ref} src="/music/reencoded-count-0.mp3" />
      <audio ref={track2Ref} src="/music/numbers-duplessi.mp3" />
    </div>
  );
};

export default BgMusic;