import React from 'react';
import { GraduationCap, Building } from 'lucide-react';
import { EducationItem } from '../types';

interface EducationProps {
  isFullPage?: boolean;
}

const educationItems: EducationItem[] = [
  {
    school: 'St Antony School',
    degree: 'ICSE',
    period: '2009 - 2021',
    description: 'Completed ICSE education with excellent academic achievements and participated in various extracurricular activities.',
  },
  {
    school: 'Parul University',
    degree: 'Bachelor of Architecture (B.Arch)',
    period: '2022 - Present',
    description: 'Currently pursuing a Bachelor of Architecture degree with focus on sustainable design and modern architectural practices.',
  },
];

const Education: React.FC<EducationProps> = ({ isFullPage = false }) => {
  return (
    <section id="education" className={`bg-gray-50 ${isFullPage ? 'pt-28' : ''} section-padding`}>
      <div className="container">
        <h2 className="section-title text-center mb-12">EDUCATION</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-[2px] bg-gray-300"></div>
            
            {/* Education items */}
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${
                  isFullPage && index % 2 === 0 
                    ? 'md:ml-auto md:pl-12 md:pr-0 md:text-left' 
                    : 'md:mr-auto md:pr-12 md:pl-0 md:text-right'
                } md:w-[calc(50%-20px)] pl-10 md:pl-0`}
                style={{ 
                  marginLeft: isFullPage && index % 2 !== 0 ? '0' : '',
                  marginRight: isFullPage && index % 2 === 0 ? '0' : '' 
                }}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  isFullPage 
                    ? index % 2 === 0 
                      ? 'md:left-[-20px] left-0' 
                      : 'md:right-[-20px] left-0'
                    : 'left-0'
                } w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center z-10`}>
                  {item.degree.includes('B.Arch') 
                    ? <GraduationCap size={20} className="text-white" /> 
                    : <Building size={20} className="text-white" />
                  }
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold">{item.school}</h3>
                  <p className="text-primary font-medium mt-1">{item.degree}</p>
                  <p className="text-gray-500 mt-1 text-sm">{item.period}</p>
                  {isFullPage && <p className="text-gray-700 mt-3">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
