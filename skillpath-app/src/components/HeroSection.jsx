import React from 'react';

const HeroSection = () => {
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Elevate Your Skills with SkillPath</h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Discover curated learning pathways designed to bridge the gap between academic theory and real-world tech careers.
      </p>
      <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', border: 'none', borderRadius: '4px', background: '#ff7a59', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
        Get Started Today
      </button>
    </section>
  );
};

export default HeroSection;