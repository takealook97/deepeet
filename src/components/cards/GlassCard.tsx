import React from 'react';
import VerticalLine from '../common/VerticalLine';
import urlIcon from '../../assets/icons/url.svg';
import githubIcon from '../../assets/icons/github.svg';

interface GlassCardProps {
    logo: string;
    logoAlt?: string;
    brandTitle?: string;
    title?: string;
    features: string[];
    children?: React.ReactNode;
    brandTitleClassName?: string;
    urlLink?: string;
    githubLink?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ logo, logoAlt = "Logo", brandTitle, title, features, children, brandTitleClassName, urlLink, githubLink }) => {
    return (
        <div className="relative w-full max-w-[92rem] h-[17.875rem] flex-shrink-0 select-none">
            {/* Base background */}
            <div className="absolute inset-0 rounded-[1.875rem] bg-[rgba(33,37,41,0.20)]" />

            {/* Glass effect layer */}
            <div className="relative w-full h-full rounded-[1.875rem] bg-[rgba(33,37,41,0.02)] shadow-[59.533px_-59.533px_59.533px_0px_rgba(25,28,31,0.02)_inset,_-59.533px_59.533px_59.533px_0px_rgba(255,255,255,0.02)_inset] backdrop-blur-[38.6966667175293px] overflow-hidden">
                <div className="absolute left-[35%] top-0 bottom-0 w-[0.125rem]">
                    <VerticalLine />
                </div>

                {brandTitle ? (
                    <div className="flex h-full w-full">
                        <div className="w-[35%] flex-shrink-0 flex items-center overflow-hidden">
                            <div className="w-full pl-[7.14%] pr-[7.14%] flex flex-col md:flex-row items-center gap-[0.875rem]">
                                <img
                                    src={logo}
                                    alt={logoAlt}
                                    className="w-16 h-16 md:w-[5vw] md:h-[5vw] min-w-[4rem] min-h-[4rem] max-w-[7.5rem] max-h-[7.5rem] flex-shrink-0 aspect-square"
                                    draggable="false"
                                />
                                {brandTitle && (
                                    <h1 className={`text-white font-['Pretendard'] lowercase whitespace-nowrap ${brandTitleClassName}`}>
                                        {brandTitle}
                                    </h1>
                                )}
                            </div>
                        </div>

                        <div className="w-[65%] flex-shrink-0 flex items-center">
                            <div className="w-full pl-[3.85%] pr-[3.85%]">
                                <h2 className="text-[#C9D1D9] font-['Pretendard'] text-[1.25rem] sm:text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-normal leading-normal tracking-[-0.035rem] sm:tracking-[-0.04rem] md:tracking-[-0.05rem] lg:tracking-[-0.0675rem] mb-4 break-words">
                                    {title}
                                </h2>
                                <ul className="text-[#C9D1D9] font-['Pretendard'] text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-thin leading-[140%] tracking-[-0.025rem] sm:tracking-[-0.03rem] md:tracking-[-0.035rem] lg:tracking-[-0.045rem] space-y-2 break-words">
                                    {features.map((feature, index) => (
                                        <li key={index}>• {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex h-full w-full overflow-hidden">
                        <div className="w-[35%] flex-shrink-0 flex items-center justify-center overflow-hidden">
                            <div className="flex flex-col items-center gap-[0.875rem] w-full overflow-hidden">
                                <img
                                    src={logo}
                                    alt={logoAlt}
                                    className="w-[12rem] h-auto sm:w-[14rem] md:w-[16rem] lg:w-[18rem] xl:w-[20rem] object-contain flex-shrink-0"
                                    draggable="false"
                                />
                                {brandTitle && (
                                    <h1 className={`text-white font-['Pretendard'] lowercase whitespace-nowrap overflow-hidden text-ellipsis w-full text-center ${brandTitleClassName}`}>
                                        {brandTitle}
                                    </h1>
                                )}
                            </div>
                        </div>

                        <div className="w-[65%] flex-shrink-0 flex items-center overflow-hidden">
                            <div className="w-full pl-[3.85%] pr-[3.85%] overflow-hidden">
                                {title && (
                                    <h2 className="text-[#C9D1D9] font-['Pretendard'] text-[1.25rem] sm:text-[1.5rem] md:text-[1.875rem] lg:text-[2.25rem] font-normal leading-normal tracking-[-0.035rem] sm:tracking-[-0.04rem] md:tracking-[-0.05rem] lg:tracking-[-0.0675rem] mb-4 break-words">
                                        {title}
                                    </h2>
                                )}
                                <ul className="text-[#C9D1D9] font-['Pretendard'] text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-thin leading-[140%] tracking-[-0.025rem] sm:tracking-[-0.03rem] md:tracking-[-0.035rem] lg:tracking-[-0.045rem] space-y-2 break-words">
                                    {features.map((feature, index) => (
                                        <li key={index}>• {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute bottom-[1rem] sm:bottom-[1.25rem] md:bottom-[1.375rem] lg:bottom-[1.5rem] right-[2.5rem] sm:right-[3rem] md:right-[3.5rem] lg:right-[4rem] flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
                    {urlLink && (
                        <a href={urlLink} target="_blank" rel="noopener noreferrer" className="w-[3.5rem] sm:w-[4rem] md:w-[4.5rem] lg:w-[5.1875rem] h-[1.75rem] sm:h-[2rem] md:h-[2.125rem] lg:h-[2.25rem] flex-shrink-0 flex items-center gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2 cursor-pointer group">
                            <img src={urlIcon} alt="URL" className="w-7 sm:w-7 md:w-8 lg:w-9 h-7 sm:h-7 md:h-8 lg:h-9 opacity-30 group-hover:opacity-100 transition-opacity" draggable="false" />
                            <span className="text-[#C9D1D9] font-['Pretendard'] text-sm sm:text-base md:text-base lg:text-lg font-normal opacity-30 group-hover:opacity-100 transition-opacity">link</span>
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-[3.5rem] sm:w-[4rem] md:w-[4.5rem] lg:w-[5.1875rem] h-[1.75rem] sm:h-[2rem] md:h-[2.125rem] lg:h-[2.25rem] flex-shrink-0 flex items-center gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2 cursor-pointer group">
                            <img src={githubIcon} alt="GitHub" className="w-7 sm:w-7 md:w-8 lg:w-9 h-7 sm:h-7 md:h-8 lg:h-9 opacity-30 group-hover:opacity-100 transition-opacity" draggable="false" />
                            <span className="text-[#C9D1D9] font-['Pretendard'] text-sm sm:text-base md:text-base lg:text-lg font-normal opacity-30 group-hover:opacity-100 transition-opacity">github</span>
                        </a>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GlassCard; 