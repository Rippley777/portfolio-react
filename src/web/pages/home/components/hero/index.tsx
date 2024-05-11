import React, { useEffect } from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = (_props) => {
  const [showMainText, setShowMainText] = React.useState(false);
  const [showSubText, setShowSubText] = React.useState(false);
  const [showSubTextSecondary, setShowSubTextSecondary] = React.useState(false);

  useEffect(() => {
    console.log('Hero rendered');
    setTimeout(() => {
      setShowMainText(true);
    }, 3000);
    setTimeout(() => {
      setShowSubText(true);
    }, 5000);
    setTimeout(() => {
      setShowSubTextSecondary(true);
    }, 8000);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${require('../../images/laptop.jpg')})`,
      }}
      className="h-screen overflow-x-hidden sticky flex flex-col justify-between bg-cover bg-center bg-no-repeat text-right p-10 animate-fadeInSlow"
    >
      <div>
        {showMainText && (
          <span className="text-[8vw] text-white font-bold drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.9)] animate-fadeInSlow">
            <h1>React Engineering</h1>
          </span>
        )}
        {showSubText && (
          <span className="text-[7vw] text-white font-bold drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.9)] animate-fadeInSlow">
            <h2>Powering Devices</h2>
          </span>
        )}
        {showSubTextSecondary && (
          <span className="text-[7vw] text-white font-bold drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.9)] animate-fadeInSlow">
            <h3>for over 10 years</h3>
          </span>
        )}
      </div>
      <div>
        {true && (
          <>
            <div className="text-[5vw] w-[200%] text-white opacity-70 font-bold drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.9)] animate-marqueeRepeat">
              <h4>Web to Mobile to Mixed Reality and more</h4>
            </div>
            <div className="text-[5vw] w-[200%] text-white opacity-70 font-bold drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.9)] animate-marqueeReverseRepeat">
              <h5>From the browser to the cloud and beyond</h5>
            </div>
          </>
        )}
        <h6 className="text-white opacity-70 font-bold drop-shadow-[0_1.3px_1.3px_rgba(0,0,0,0.9)] animate-fadeInTenSeconds">
          <span>Scroll to learn more</span>
        </h6>
      </div>
    </div>
  );
};

export default Hero;
