import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import VideoSection from '../components/VideoSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <VideoSection />
    </>
  );
};

export default Home;