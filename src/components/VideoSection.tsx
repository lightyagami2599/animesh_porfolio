import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <h2 className="section-title text-center mb-12">Featured Work</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <div className="relative pb-[56.25%] h-0">
              <video
                className="absolute top-0 left-0 w-full h-full"
                src="/assets/video.mp4"
                title="Architecture Portfolio Video"
                controls
              ></video>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Project Showcase</h3>
            <p className="text-gray-700">
              This video showcases some of my recent architectural projects and design process.
              Explore my approach to creating sustainable, functional, and aesthetically pleasing spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;