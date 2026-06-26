import React from 'react';

const CTABanner = () => {
  return (
    <section style={{ padding: '3rem 2rem', backgroundColor: '#2d3748', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Ready to transform your learning timeline?</h2>
      <p style={{ color: '#cbd5e0', marginBottom: '1.5rem' }}>Join thousands of technology students accelerating their industrial experience.</p>
      <button style={{ padding: '0.75rem 2rem', background: '#48bb78', border: 'none', color: '#fff', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
        Explore Tracks
      </button>
    </section>
  );
};

export default CTABanner;