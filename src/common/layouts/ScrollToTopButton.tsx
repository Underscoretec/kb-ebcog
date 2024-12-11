import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed right-4 bottom-4 flex items-center justify-center bg-[#E4087F] text-white rounded-full shadow-lg
        hover:bg-[#ac0660] h-12 w-12 transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
            aria-label="Scroll to top"
        >
            <IoIosArrowUp className='text-[25px]' />
        </button>
    );
};

export default ScrollToTopButton;