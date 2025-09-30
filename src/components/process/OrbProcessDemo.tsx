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
                fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                fontWeight: 400,
                fontStyle: 'italic'
              }}>Powerful</span>
              <span style={{
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: 100
              }}> & </span>
              <span style={{
                fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                fontWeight: 400,
                fontStyle: 'italic'
              }}>Flexible</span>
            </span>
          </motion.h2>
          
        </div>

        {/* Process Steps Container - 정확한 크기: 1200x1192 */}
        <div className="flex gap-6 mx-auto" style={{ width: '1200px', height: '1192px' }}>
          {/* 왼쪽 카드 - 588x1192 */}
          <motion.div 
            className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden" 
            style={{ 
              width: '588px', 
              height: '1192px',
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
              <div className="flex items-center justify-center mb-4" style={{
                width: '72px',
                height: '65.0417px',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.1), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.1), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.1), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.1), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.1)',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '10px',
                paddingRight: '10px',
                fontFamily: 'sans-serif',
                fontSize: '12px',
                WebkitFontSmoothing: 'antialiased'
              }}>
                <img 
                  src="/icons/workflow.png"
                  alt="Workflow Discovery"
                  style={{ width: '32px', height: '32px' }}
                />
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
              
              <div className="flex items-center justify-between">
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
            </div>
            
            {/* 하단 이미지 영역 - 528x819.15 */}
            <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '819.15px' }}>
              <img 
                src="/images/workflow-discovery.jpg" 
                alt="Workflow Discovery"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 오른쪽 카드들 - 588x584 각각, 24px 간격 */}
          <div className="flex flex-col gap-6">
            {/* Step 2 카드 - 588x584 */}
            <motion.div 
              className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden" 
              style={{ 
                width: '588px', 
                height: '584px',
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
                <div className="flex items-center justify-center mb-4" style={{
                  width: '72px',
                  height: '65.0417px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.1), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.1), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.1), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.1), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.1)',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px',
                  WebkitFontSmoothing: 'antialiased'
                }}>
                  <img 
                    src="/icons/business-plan-2.png"
                    alt="Launch with Certainty"
                    style={{ width: '32px', height: '32px' }}
                  />
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
                
                <div className="flex items-center justify-between">
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
              </div>
              
              {/* 하단 이미지 영역 - 528x211.15 */}
              <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '211.15px' }}>
                <img 
                  src="/images/launch-with-certainty.jpg" 
                  alt="Launch with Certainty"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Step 3 카드 - 588x584 */}
            <motion.div 
              className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden" 
              style={{ 
                width: '588px', 
                height: '584px',
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
                <div className="flex items-center justify-center mb-4" style={{
                  width: '72px',
                  height: '65.0417px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.1), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.1), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.1), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.1), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.1)',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px',
                  WebkitFontSmoothing: 'antialiased'
                }}>
                  <img 
                    src="/icons/help-2.png"
                    alt="Continuous Growth & Support"
                    style={{ width: '32px', height: '32px' }}
                  />
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
                
                <div className="flex items-center justify-between">
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
              </div>
              
              {/* 하단 이미지 영역 - 528x211.15 */}
              <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '211.15px' }}>
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
