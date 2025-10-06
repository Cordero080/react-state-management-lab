import React from 'react';
import './CandidatesList.css';
import Card from '../Card/Card';

const CandidatesList = ({ zombieSlayers, zoomCard, setZoomCard, handleAddSlayer }) => (
  <section className="candidates-list-section">
    <h1 className="candidates-list-title">Available Candidates</h1>
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
);

export default CandidatesList;
