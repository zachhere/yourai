"use client";
import React from "react";

interface SimpleSaaSNavbarDemoProps {
  isVisible: boolean;
}

export default function SimpleSaaSNavbarDemo({ isVisible }: SimpleSaaSNavbarDemoProps) {
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-[#F6F6F6] bg-white transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Links Wrapper */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-[42px] h-[42px] bg-black rounded-lg flex items-center justify-center mb-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
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
            </div>

            {/* Nav Links */}
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-[14px] font-normal text-black hover:text-gray-600 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[14px] font-normal text-black hover:text-gray-600 transition-colors duration-200"
              >
                Value
              </a>
              <a
                href="#"
                className="text-[14px] font-normal text-black hover:text-gray-600 transition-colors duration-200"
              >
                Process
              </a>
              <a
                href="#"
                className="text-[14px] font-normal text-black hover:text-gray-600 transition-colors duration-200"
              >
                Cases
              </a>
              <a
                href="#"
                className="text-[14px] font-normal text-black hover:text-gray-600 transition-colors duration-200"
              >
                FAQs
              </a>
            </div>
          </div>

          {/* Button Row */}
          <div className="flex items-center space-x-3">
            <button className="border border-[#E7E7E7] bg-white text-black rounded-full px-4 py-2 text-[14px] font-normal hover:bg-gray-100 transition-colors duration-200">
              Get full access
            </button>
            <button className="bg-black text-white rounded-full px-4 py-2 text-[14px] font-normal hover:bg-gray-800 transition-colors duration-200">
              Start now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}