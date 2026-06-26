import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    { id: 1, name: "Amit Sharma", role: "Software Engineer", text: "SkillPath perfectly mapped out what I needed to land my first full-stack developer internship!" },
    { id: 2, name: "Sneha Patel", role: "Data Analyst", text: "The structured approach saved me months of wandering through unhelpful tutorials." }
  ];

  return (
    <section style={{ padding: '3rem 2rem', backgroundColor: '#f7fafc', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#2d3748' }}>What Our Learners Say</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        {testimonials.map((t) => (
          <div key={t.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', fontStyle: 'italic' }}>
            <p style={{ color: '#4a5568', marginBottom: '1rem' }}>"{t.text}"</p>
            <h4 style={{ fontWeight: 'bold', color: '#2d3748', notInText: 'normal' }}>- {t.name}, <span style={{ fontWeight: 'normal', fontSize: '0.9rem', color: '#718096' }}>{t.role}</span></h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;