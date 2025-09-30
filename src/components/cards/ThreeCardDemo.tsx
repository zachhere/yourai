"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TiltedScroll } from '../ui/tilted-scroll';
import { AnimatedCardDemo } from './FeatureBlackAnimatedCardDemo';

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
            <div 
              style={{
                fontSize: '48px',
                color: '#000000',
                letterSpacing: '-0.48px',
                lineHeight: '57.6px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                  fontWeight: 400,
                  fontStyle: 'italic'
                }}
              >
                Use technologies
              </span>
              <span 
                style={{
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: 100
                }}
              >
                {' '}that
              </span>
              <br />
              <span 
                style={{
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: 100
                }}
              >
                elevates your business
              </span>
            </div>
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
              backgroundImage: 'url(/images/card-1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Light Overlay for better text visibility */}
            <div 
              className="absolute inset-0 bg-white/60"
            />
            
            {/* TiltedScroll Component */}
            <div className="relative z-10">
              <TiltedScroll 
                items={tiltedScrollItems}
                className="scale-90"
              />
            </div>

          </motion.div>

          {/* Card 2 - Middle Panel with AnimatedCardDemo */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <AnimatedCardDemo />
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
                  It's completely flexible.
                </h3>
                <p 
                  className="text-white/90 text-sm leading-relaxed"
                  style={{
                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                    fontWeight: 100
                  }}
                >
                  Tailor YourAI services to match your business goals—whether you need strategic guidance, workflow automation, or AI-driven insights.
                </p>
              </div>

              {/* Bottom Buttons */}
              <div className="space-y-3">
                {/* Active Button */}
                <motion.button
                  className="w-full bg-white text-gray-800 px-4 py-3 rounded-xl flex items-center justify-between font-medium shadow-sm"
                  style={{
                    fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                    fontWeight: 400,
                    fontStyle: 'italic'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Business priorities</span>
                  <span className="text-xl text-gray-800">+</span>
                </motion.button>
                
                {/* Inactive Button 1 */}
                <motion.button
                  className="w-full bg-white/20 text-white/70 px-4 py-3 rounded-xl flex items-center justify-between font-medium"
                  style={{
                    fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                    fontWeight: 400,
                    fontStyle: 'italic'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Process guidelines</span>
                  <span className="text-xl text-white/70">+</span>
                </motion.button>

                {/* Inactive Button 2 */}
                <motion.button
                  className="w-full bg-white/10 text-white/50 px-4 py-3 rounded-xl flex items-center justify-between font-medium"
                  style={{
                    fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                    fontWeight: 400,
                    fontStyle: 'italic'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>AI solution options</span>
                  <span className="text-xl text-white/50">+</span>
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
