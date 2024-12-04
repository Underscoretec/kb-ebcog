import React from 'react';

const DotsNavigation = ({ sections, activeSection }:any) => {
  const handleScroll = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2">
      {sections.map((section:any) => (
        <div
          key={section.id}
          className="w-4 h-4 flex items-center justify-center"
          title={section.title}
          onClick={() => handleScroll(section.id)}
        >
          <div
            className={`w-1 h-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
              activeSection === section.id
                ? 'w-3 h-3 bg-[#E4087F]'
                : 'bg-[#E4087F] hover:w-3 hover:h-3'
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default DotsNavigation;
