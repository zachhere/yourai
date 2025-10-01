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
              <div className="w-[42px] h-[42px] bg-black rounded-lg flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
