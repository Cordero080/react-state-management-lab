import React from 'react';
import Card from '../Card/Card';

const ZoomCardModal = ({ zoomCard, crew, zombieSlayers, setZoomCard, handleAddSlayer, handleRemoveSlayer }) => {
  if (!zoomCard) return null;
  const all = [...crew, ...zombieSlayers];
  const slayer = all.find(s => s.id === zoomCard);
  if (!slayer) return null;
  const isCrew = crew.some(s => s.id === zoomCard);
  return (
    <>
      <div
        className='card-backdrop'
        onClick={() => setZoomCard(null)}
      />
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
    </>
  );
};

export default ZoomCardModal;
