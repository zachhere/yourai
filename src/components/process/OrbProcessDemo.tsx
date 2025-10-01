import React from 'react';
import { motion } from 'framer-motion';

const OrbProcessDemo = () => {
  return (
    <section className="py-20 px-4 bg-white" id="process">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span 
              className="inline-block text-center"
              style={{
                color: '#000000',
                fontSize: '56px',
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              <span style={{
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: 300
              }}>Process </span>
              <span style={{
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: 300
              }}>that </span>
              <span style={{
                fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                fontWeight: 400,
                fontStyle: 'italic'
              }}>delivers</span>
            </span>
          </motion.h2>
          
        </div>

        {/* Process Steps Container - 정확한 크기: 1200x596 */}
        <div className="flex gap-6 mx-auto" style={{ width: '1200px', height: '596px' }}>
          {/* 왼쪽 카드 - 588x596 */}
          <motion.div 
            className="rounded-2xl overflow-hidden" 
            style={{ 
              width: '588px', 
              height: '596px',
              paddingTop: '30px',
              paddingBottom: '44px',
              paddingLeft: '30px',
              paddingRight: '30px',
              backgroundColor: '#EFEAE5'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {/* 상단 텍스트 영역 */}
            <div className="mb-6">
              {/* 숫자와 점들 - 제목 위로 이동 */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-900" style={{
                  fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                  fontSize: '44px',
                  fontWeight: '500'
                }}>01</h2>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                  <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                </div>
              </div>
              
              <h3 className="mb-2" style={{
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontSize: '20px',
                fontWeight: '100',
                color: '#000000'
              }}>
                Workflow Discovery
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px'
              }}>
                We start by mapping your processes to reveal where AI can create the most value.
              </p>
            </div>
            
            {/* 하단 이미지 영역 - 528x409.58 */}
            <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '409.58px' }}>
              <img 
                src="/images/workflow-discovery.jpg" 
                alt="Workflow Discovery"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 오른쪽 카드들 - 588x292 각각, 12px 간격 */}
          <div className="flex flex-col gap-3">
            {/* Step 2 카드 - 588x292 */}
            <motion.div 
              className="rounded-2xl overflow-hidden" 
              style={{ 
                width: '588px', 
                height: '292px',
                paddingTop: '30px',
                paddingBottom: '44px',
                paddingLeft: '30px',
                paddingRight: '30px',
                backgroundColor: '#EFEAE5'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              {/* 상단 텍스트 영역 */}
              <div className="mb-6">
                {/* 숫자와 점들 - 제목 위로 이동 */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-900" style={{
                    fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                    fontSize: '44px',
                    fontWeight: '500'
                  }}>02</h2>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                  </div>
                </div>
                
                <h3 className="mb-2" style={{
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontSize: '20px',
                  fontWeight: '100',
                  color: '#000000'
                }}>
                  Launch with Certainty
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}>
                  We design tailored AI solutions aligned with your objectives, ensuring smooth and secure rollout.
                </p>
              </div>
              
              {/* 하단 이미지 영역 - 528x105.58 */}
              <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '105.58px' }}>
                <img 
                  src="/images/launch-with-certainty.jpg" 
                  alt="Launch with Certainty"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Step 3 카드 - 588x292 */}
            <motion.div 
              className="rounded-2xl overflow-hidden" 
              style={{ 
                width: '588px', 
                height: '292px',
                paddingTop: '30px',
                paddingBottom: '44px',
                paddingLeft: '30px',
                paddingRight: '30px',
                backgroundColor: '#EFEAE5'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              {/* 상단 텍스트 영역 */}
              <div className="mb-6">
                {/* 숫자와 점들 - 제목 위로 이동 */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-gray-900" style={{
                    fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                    fontSize: '44px',
                    fontWeight: '500'
                  }}>03</h2>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="mb-2" style={{
                  fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                  fontSize: '20px',
                  fontWeight: '500',
                  color: '#000000'
                }}>
                  Continuous Growth & Support
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}>
                  We stay engaged after launch, optimizing your AI systems to maximize performance and results.
                </p>
              </div>
              
              {/* 하단 이미지 영역 - 528x105.58 */}
              <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '105.58px' }}>
                <img 
                  src="/images/continuous-growth.jpg" 
                  alt="Continuous Growth & Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrbProcessDemo;
