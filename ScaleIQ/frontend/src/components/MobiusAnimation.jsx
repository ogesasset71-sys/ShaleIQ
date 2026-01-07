import React from 'react';

export const MobiusAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        className="absolute top-1/2 right-10 transform -translate-y-1/2 w-[700px] h-[700px]"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mobius Strip Path 1 */}
        <path
          d="M 200 400 C 300 200, 500 200, 600 400 C 700 600, 500 600, 400 400 C 300 200, 500 200, 600 400"
          stroke="#C8A951"
          strokeWidth="2"
          fill="none"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          className="animate-mobius-flow"
        />
        
        {/* Mobius Strip Path 2 */}
        <path
          d="M 250 400 C 330 250, 470 250, 570 400 C 650 550, 470 550, 380 400"
          stroke="#C8A951"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="1800"
          strokeDashoffset="1800"
          className="animate-mobius-flow"
          style={{ animationDelay: '3s' }}
        />
        
        {/* Mobius Strip Path 3 */}
        <path
          d="M 220 380 C 320 220, 480 230, 580 380 C 680 530, 480 540, 390 380"
          stroke="#C8A951"
          strokeWidth="1"
          fill="none"
          strokeDasharray="1600"
          strokeDashoffset="1600"
          className="animate-mobius-flow"
          style={{ animationDelay: '6s' }}
        />
        
        {/* Additional subtle lines */}
        <circle cx="600" cy="400" r="3" fill="#C8A951" opacity="0.6">
          <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="350" r="2" fill="#C8A951" opacity="0.4">
          <animate attributeName="r" values="2;5;2" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="450" r="2" fill="#C8A951" opacity="0.5">
          <animate attributeName="r" values="2;4;2" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};