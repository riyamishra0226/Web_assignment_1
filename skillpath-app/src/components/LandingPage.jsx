import React from 'react';
import HeroSection from './HeroSection';
import FeatureCard from './FeatureCard';
import TestimonialSection from './TestimonialSection';
import CTABanner from './CTABanner';

const LandingPage = () => {
  const features = [
    { icon: "🚀", title: "Industry Tracks", description: "Structured paths focusing on Full Stack, Cloud Architectures, and AI-Driven platforms." },
    { icon: "🛠️", title: "Hands-on Focus", description: "Assignments mapping real workspace scenarios to build standard-compliant portfolios." },
    { icon: "📈", title: "Progress Insights", description: "Granular verification models showing metric milestones as you complete modules." }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Features Grid Area */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textTransform: 'capitalize', textAlign: 'center', marginBottom: '2.5rem', fontSize: '2rem' }}>Core System Framework</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((feat, idx) => (
            <FeatureCard key={idx} icon={feat.icon} title={feat.title} description={feat.description} />
          ))}
        </div>
      </section>

      <TestimonialSection />
      <CTABanner />
    </div>
  );
};

export default LandingPage;