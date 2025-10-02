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
          <div className="w-8 h-8 flex items-center justify-center mb-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <g clipPath="url(#clip0_209_2)">
                <path d="M18.1992 12.5742V21H15.0234V12.5508C15.0234 11.3555 14.7695 10.5156 14.2617 10.0312C13.7539 9.53906 12.8711 9.29297 11.6133 9.29297H5.67188V6.45703H11.8125C13.3516 6.45703 14.5859 6.66406 15.5156 7.07812C16.4531 7.49219 17.1328 8.14844 17.5547 9.04688C17.9844 9.9375 18.1992 11.1133 18.1992 12.5742ZM9.07031 12.1641V21H5.90625V12.1641H9.07031Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_209_2">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
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