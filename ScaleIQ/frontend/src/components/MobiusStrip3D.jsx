import React from 'react';

export const MobiusStrip3D = () => {
  return (
    <div className="w-full h-full bg-scaleiq-black flex items-center justify-center overflow-hidden relative">
      {/* 3D Mobius Strip using CSS 3D transforms */}
      <div className="mobius-container">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Mobius Loop - represents the twisted strip */}
          <g className="mobius-loop" style={{ transformOrigin: '400px 400px' }}>
            {/* Outer curve */}
            <path
              d="M 200 400 Q 300 200, 500 200 T 600 400 Q 700 600, 500 600 T 400 400 Q 300 200, 500 200"
              stroke="#C8A951"
              strokeWidth="4"
              fill="none"
              opacity="0.8"
            />
            
            {/* Inner curves creating depth */}
            <path
              d="M 250 400 C 330 250, 470 250, 570 400 C 650 550, 470 550, 380 400"
              stroke="#C8A951"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            
            <path
              d="M 280 380 C 350 260, 450 260, 550 380 C 620 500, 450 500, 360 380"
              stroke="#FFD700"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
            
            {/* Cross-sections showing the twist */}
            <ellipse cx="500" cy="200" rx="30" ry="10" fill="#C8A951" opacity="0.4" />
            <ellipse cx="600" cy="400" rx="10" ry="30" fill="#C8A951" opacity="0.5" />
            <ellipse cx="500" cy="600" rx="30" ry="10" fill="#C8A951" opacity="0.4" />
            <ellipse cx="400" cy="400" rx="10" ry="30" fill="#C8A951" opacity="0.5" />
            
            {/* Connecting lines showing strip surface */}
            <line x1="200" y1="400" x2="230" y2="420" stroke="#C8A951" strokeWidth="1" opacity="0.3" />
            <line x1="500" y1="200" x2="520" y2="180" stroke="#C8A951" strokeWidth="1" opacity="0.3" />
            <line x1="600" y1="400" x2="620" y2="420" stroke="#C8A951" strokeWidth="1" opacity="0.3" />
            <line x1="500" y1="600" x2="520" y2="620" stroke="#C8A951" strokeWidth="1" opacity="0.3" />
            
            {/* Highlight points */}
            <circle cx="500" cy="200" r="6" fill="#FFD700" opacity="0.9">
              <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="400" r="5" fill="#FFD700" opacity="0.8">
              <animate attributeName="r" values="5;9;5" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="500" cy="600" r="6" fill="#FFD700" opacity="0.9">
              <animate attributeName="r" values="6;10;6" dur="4.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="400" r="5" fill="#FFD700" opacity="0.8">
              <animate attributeName="r" values="5;8;5" dur="5.5s" repeatCount="indefinite" />
            </circle>
            
            {/* Glow effect */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </g>
          
          {/* Secondary layer for depth */}
          <g className="mobius-shadow" opacity="0.2" style={{ transformOrigin: '400px 400px' }}>
            <path
              d="M 210 410 Q 310 210, 510 210 T 610 410 Q 710 610, 510 610 T 410 410"
              stroke="#C8A951"
              strokeWidth="8"
              fill="none"
              filter="url(#glow)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};