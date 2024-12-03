import React from 'react';

const DotNavigation = () => {
  const components = ['Banner', 'About', 'Objective', 'Faculty', 'International', 'FAQ'];
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4">
      {components.map((_, index) => (
        <div
          key={index}
          className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-yellow-500 transition"
          title={components[index]}
        ></div>
      ))}
    </div>
  );
};

export default DotNavigation;
