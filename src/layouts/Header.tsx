import React from 'react';
import logo from '../assets/logos/text-logo-glassy.png';
import resumeIcon from '../assets/icons/resume.svg';
import githubIcon from '../assets/icons/github.svg';

const Header: React.FC = () => {
    return (
        <div className="w-full max-w-[94.5rem] h-[5.25rem] flex-shrink-0 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[1.25rem] mx-auto select-none">
            <div className="flex-1" />
            <img
                src={logo}
                alt="Logo"
                className="h-[2.5rem] sm:h-[2.75rem] md:h-[3rem] lg:h-[3.375rem] w-auto flex-shrink-0 object-contain"
                draggable="false"
            />
            <div className="flex-1 flex justify-end gap-3 sm:gap-4 md:gap-5 lg:gap-[1.25rem]">
                <a href="https://geonwoo.kim/portfolio" target="_blank" rel="noopener noreferrer">
                    <img src={resumeIcon} alt="Resume" className="w-[1.75rem] sm:w-[2rem] md:w-[2.125rem] lg:w-[2.25rem] h-[1.75rem] sm:h-[2rem] md:h-[2.125rem] lg:h-[2.25rem] flex-shrink-0 aspect-square opacity-40 hover:opacity-100 transition-opacity cursor-pointer" draggable="false" />
                </a>
                <a href="https://github.com/takealook97" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="w-[1.75rem] sm:w-[2rem] md:w-[2.125rem] lg:w-[2.25rem] h-[1.75rem] sm:h-[2rem] md:h-[2.125rem] lg:h-[2.25rem] flex-shrink-0 aspect-square opacity-40 hover:opacity-100 transition-opacity cursor-pointer" draggable="false" />
                </a>
            </div>
        </div>
    );
};

export default Header; 