"use client";
import React from 'react';

interface RealNavbarDemoProps {
  isVisible: boolean;
}

export const RealNavbarDemo: React.FC<RealNavbarDemoProps> = ({ isVisible }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center justify-between">
        {/* Left side - Logo and text */}
        <div className="flex items-center space-x-3">
          {/* YourAI Logo */}
          <div className="w-8 h-8 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                fill="currentColor"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span 
            className="text-white text-lg font-medium"
            style={{ 
              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
              fontWeight: '100'
            }}
          >
            YourAI
          </span>
        </div>

        {/* Right side - All items in one container */}
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100'
              }}
            >
              Product
            </a>
            <a 
              href="#" 
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100'
              }}
            >
              Platform
            </a>
            <a 
              href="#" 
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100'
              }}
            >
              Customers
            </a>
            <a 
              href="#" 
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100'
              }}
            >
              Company
            </a>
            <button 
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '550',
                color: 'black'
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
