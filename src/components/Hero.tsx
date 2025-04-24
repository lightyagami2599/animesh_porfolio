import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      heroRef.current.style.opacity = `${1 - scrollPosition * 0.002}`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div 
        ref={heroRef}
        className="container relative z-10 text-center hero-section"
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Animesh Jena
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            Architecture Portfolio
          </p>
          <a 
            href="#about"
            className="inline-flex items-center text-white border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all"
          >
            <span className="mr-2">Explore My Work</span>
            <ArrowDownCircle size={20} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center z-10 animate-bounce">
        <ArrowDownCircle size={30} className="text-white mx-auto" />
      </div>
    </section>
  );
};

export default Hero;