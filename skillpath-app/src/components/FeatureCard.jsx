import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#fff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'left' }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#2d3748' }}>{title}</h3>
      <p style={{ color: '#4a5568', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
};

export default FeatureCard;