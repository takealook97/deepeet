import React from 'react';

interface HeaderContentProps {
    logo: string;
    title: string;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ logo, title }) => {
    return (
        <div className="inline-flex py-[1.4375rem] pb-6 pl-[7.5rem] pr-[3.8125rem] justify-end items-center">
            <img
                src={logo}
                alt="Logo"
                className="w-[92rem] h-[17.875rem] flex-shrink-0"
            />
            <h1 className="text-white font-['Pretendard'] text-[3.75rem] font-normal leading-normal tracking-[0.6375rem]">
                {title}
            </h1>
        </div>
    );
};

export default HeaderContent; 