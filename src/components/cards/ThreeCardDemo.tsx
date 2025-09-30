"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TiltedScroll } from '../ui/tilted-scroll';

const ThreeCardDemo = () => {
  const tiltedScrollItems = [
    { id: "1", text: "Modern Design" },
    { id: "2", text: "AI Powered" },
    { id: "3", text: "Customizable" },
    { id: "4", text: "User Friendly" },
    { id: "5", text: "Responsive" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span 
              style={{
                fontSize: '48px',
                color: '#000000',
                fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.48px',
                lineHeight: '57.6px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              Craft experiences your customers will remember
            </span>
          </motion.h1>
        </div>

        {/* Three Cards Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Card 1 - Left Panel with TiltedScroll */}
          <motion.div
            className="relative rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              height: '400px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
                `
              }}
            />
            
            {/* TiltedScroll Component */}
            <div className="relative z-10">
              <TiltedScroll 
                items={tiltedScrollItems}
                className="scale-75"
              />
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6">
              <span 
                className="text-white/80 text-sm"
                style={{
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: 100
                }}
              >
                Classic Modern Design
              </span>
            </div>
          </motion.div>

          {/* Card 2 - Middle Panel with Chat Interface */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            style={{
              height: '400px',
              backgroundColor: '#2D2D2D'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Chat Interface */}
            <div className="p-6 h-full flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 space-y-4">
                {/* Incoming message */}
                <div className="flex justify-start">
                  <div 
                    className="max-w-xs px-4 py-3 rounded-2xl"
                    style={{ backgroundColor: '#404040' }}
                  >
                    <div className="w-4 h-4 bg-gray-500 rounded-full mb-2" />
                    <div className="w-32 h-3 bg-gray-400 rounded mb-1" />
                    <div className="w-24 h-3 bg-gray-400 rounded" />
                  </div>
                </div>

                {/* Outgoing message */}
                <div className="flex justify-end">
                  <div 
                    className="max-w-xs px-4 py-3 rounded-2xl flex items-center space-x-3"
                    style={{ backgroundColor: '#4A4A4A' }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      Me
                    </div>
                    <div>
                      <div className="w-48 h-3 bg-gray-300 rounded mb-1" />
                      <div className="w-36 h-3 bg-gray-300 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between">
                <span 
                  className="text-white text-sm"
                  style={{
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: 100
                  }}
                >
                  Engage and delight customers
                </span>
                
                {/* Pagination */}
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-medium">
                    01
                  </div>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs">
                    2
                  </div>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs">
                    3
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Right Panel with Style Options */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            style={{
              height: '400px',
              backgroundColor: '#8B7355'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              {/* Top Content */}
              <div>
                <h3 
                  className="text-white text-2xl font-bold mb-4"
                  style={{
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: 100
                  }}
                >
                  Its completely adaptable.
                </h3>
                <p 
                  className="text-white/90 text-sm leading-relaxed"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400
                  }}
                >
                  Customize GroundAI to fit your style and needs—whether you want modern minimalism, cozy comfort, or bold luxury.
                </p>
              </div>

              {/* Bottom Buttons */}
              <div className="space-y-3">
                <motion.button
                  className="w-full bg-white text-gray-800 px-4 py-3 rounded-xl flex items-center justify-between font-medium"
                  style={{
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: 100
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Style preference</span>
                  <span className="text-xl">+</span>
                </motion.button>
                
                <motion.button
                  className="w-full bg-white/20 text-white px-4 py-3 rounded-xl flex items-center justify-between font-medium"
                  style={{
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: 100
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>More options</span>
                  <span className="text-xl">+</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeCardDemo;
