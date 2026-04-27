import React from 'react';
import Header from './layouts/Header';
import Body from './layouts/Body';
import GlassCard from './components/cards/GlassCard';
import sshift from './assets/logos/sshift-logo.png';
import gloticker from './assets/logos/gloticker-logo.png';
import underthekey from './assets/logos/underthekey-logo.png';

const App: React.FC = () => {
    return (
        <div className="w-full min-h-screen bg-[#0D1117] flex flex-col items-center select-none">
            <Header />
            <Body>
                <div className="flex flex-col gap-5">
                    <GlassCard
                        logo={sshift}
                        logoAlt="SSHift Logo"
                        title="SSH Server Management Tool"
                        features={[
                            "Go-based CLI tool for SSH server management",
                            "Proxy-Jump support and encrypted password storage",
                            "Menu system for easy navigation"
                        ]}
                        githubLink="https://github.com/takealook97/sshift"
                    />
                    <GlassCard
                        logo={gloticker}
                        logoAlt="Gloticker Logo"
                        brandTitle="gloticker"
                        title="Global Economic Indicator - Chrome Extension"
                        features={[
                            "Quick and clear overview of index, stock, crypto, forex",
                            "Customizable settings",
                            "AI-analysis"
                        ]}
                        brandTitleClassName="!text-[3.5vw] !min-text-[2.75rem] !max-text-[3.75rem] !tracking-[0.5vw] !min-tracking-[0.375rem] !max-tracking-[0.625rem]"
                        urlLink="https://chromewebstore.google.com/detail/gloticker-real-time-globa/bpnnfmipmbepndehponddlpcbhlchofb?hl=en"
                        githubLink="https://github.com/gloticker"
                    />
                    <GlassCard
                        logo={underthekey}
                        logoAlt="Under The Key Logo"
                        brandTitle="underthekey"
                        title="Custom Keyboard Platform"
                        features={[
                            "Typer with interactive sounds (based on cherry-switch)",
                            "Switch tester"
                        ]}
                        brandTitleClassName="!font-semibold !text-[3vw] !min-text-[2.5rem] !max-text-[3.25rem] !tracking-normal"
                        urlLink="https://underthekey.com/"
                        githubLink="https://github.com/underthekey"
                    />
                </div>
            </Body>
        </div>
    );
};

export default App; 