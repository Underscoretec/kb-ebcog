import React from 'react';

const DotsNavigation = ({ sections, activeSection }: any) => {
  const handleScroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4">
      {sections.map((section: any, index: number) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
            activeSection === index
              ? 'w-4 h-4 bg-yellow-500'
              : 'bg-black hover:w-3 hover:h-3'
          }`}
          title={section.title}
          onClick={() => handleScroll(section.ref)}
        ></div>
      ))}
    </div>
  );
};

export default DotsNavigation;
