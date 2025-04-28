import React from 'react';
import { Download } from 'lucide-react';

interface AboutProps {
  isFullPage?: boolean;
}

const About: React.FC<AboutProps> = ({ isFullPage = false }) => {
    const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/assets/CV.pdf';
    link.download = 'Animesh Jena-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPortfolio = () => {
    // Create a link to download the portfolio
    const link = document.createElement('a');
    link.href = '/assets/Animehsh portfolio (003)pdf';
    link.download = 'Animesh Jena-portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className={`bg-white ${isFullPage ? 'pt-28' : ''} section-padding`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={`${isFullPage ? 'order-1' : 'order-2'}`}>
            <h2 className="section-title">ABOUT ME</h2>
            <p className="text-gray-700 mb-6">
              Passionate architecture student with a keen eye for sustainable design. Blending modern aesthetics with functionality to create spaces that inspire and endure.
            </p>
            
            {isFullPage && (
              <>
                <p className="text-gray-700 mb-6">
                  As an aspiring architect, I am dedicated to pushing the boundaries of conventional design. My approach integrates innovative technologies with environmental consciousness, creating spaces that not only serve their purpose but also contribute positively to their surroundings.
                </p>
                <p className="text-gray-700 mb-6">
                  During my studies at Parul University, I've developed a strong foundation in architectural principles, digital modeling, and sustainable practices. My goal is to create architecture that balances form, function, and environmental responsibility.
                </p>
              </>
            )}
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleDownloadPortfolio}
                className="btn btn-primary"
              >
                <Download size={18} />
                Download Portfolio
              </button>
              <button 
                onClick={handleDownloadCV}
                className="btn btn-outline"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>
          
          <div className={`${isFullPage ? 'order-2' : 'order-1'}`}>
            <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
              {<img 
                src="/assets/profilee.jpg" 
                alt="ANIMESH JENA" 
                className="w-full h-auto object-cover"
                />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
