import React from 'react';

interface BodyProps {
    children?: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
    return (
        <div className="w-full max-w-[94.5rem] px-4 sm:px-6 md:px-8 lg:px-[1.25rem] pb-8 flex flex-col items-start gap-[1.25rem] flex-shrink-0">
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default Body; 