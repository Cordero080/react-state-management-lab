import React from 'react';
import './CrewList.css';
import Card from '../Card/Card';

const CrewList = ({ crew, zoomCard, setZoomCard, handleRemoveSlayer, totalStrength, totalAgility }) => (
  <section className="crew-list-section">
    <h1 className="crew-list-title">Your Crew</h1>
    {crew.length > 0 && (
      <div className="crew-list-summary">
        <p>
          <strong>Total Strength:</strong> {totalStrength} | <strong>Total Agility:</strong> {totalAgility}
        </p>
      </div>
    )}
    {crew.length === 0 ? (
      <p className="crew-list-empty">
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
);

export default CrewList;
