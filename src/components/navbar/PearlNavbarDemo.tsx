import React from 'react'
import { motion } from 'framer-motion'

const menuItems = [
    { name: 'Project', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Team', href: '#team' },
]

interface PearlNavbarProps {
    currentPage?: string;
    onPageChange?: (pageId: string) => void;
}

export const PearlNavbar = ({ currentPage, onPageChange }: PearlNavbarProps) => {
    return (
        <header className="w-full bg-transparent">
            <nav className="w-full h-[60px] max-w-[1990px] mx-auto flex items-center justify-between bg-transparent" style={{padding: '0 80px'}}>
                {/* Left Section - YourAI Logo */}
                <div className="flex-shrink-0">
                    <a 
                        href="/" 
                        className="flex items-center space-x-3"
                        aria-label="YourAI Logo"
                    >
                        <span 
                            className="text-white font-medium"
                            style={{ 
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                fontWeight: '100',
                                fontSize: '20px'
                            }}
                        >
                            YourAI
                        </span>
                    </a>
                </div>

                {/* Center Section - Navigation Links */}
                <div style={{opacity: 1, display: 'flex', alignItems: 'center', gap: '64px'}}>
                    {menuItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            tabIndex={0}
                            style={{
                                opacity: 1,
                                position: 'relative',
                                display: 'block',
                                height: '25.2px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            whileHover="hover"
                            initial="initial"
                        >
                            {/* Main text */}
                            <motion.div 
                                variants={{
                                    initial: { y: 0, opacity: 1 },
                                    hover: { y: -25.2, opacity: 0 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    outline: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    flexShrink: 0,
                                    transformOrigin: '50% 50% 0px',
                                    color: 'rgb(255, 255, 255)'
                                }}
                            >
                                <h4 
                                    style={{
                                        color: 'rgb(255, 255, 255)',
                                        margin: 0,
                                        padding: 0,
                                        fontSize: '18px',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: '500',
                                        lineHeight: '25.2px',
                                        textAlign: 'left',
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        WebkitFontSmoothing: 'antialiased'
                                    }}
                                >
                                    {item.name}
                                </h4>
                            </motion.div>
                            {/* Hover text (same text but gray) */}
                            <motion.div 
                                variants={{
                                    initial: { y: 25.2, opacity: 0.6 },
                                    hover: { y: 0, opacity: 0.6 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    outline: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    flexShrink: 0,
                                    transformOrigin: '50% 50% 0px',
                                    color: 'rgb(255, 255, 255)',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0
                                }}
                            >
                                <h4 
                                    style={{
                                        color: 'rgb(255, 255, 255)',
                                        margin: 0,
                                        padding: 0,
                                        fontSize: '18px',
                                        fontFamily: 'Manrope, sans-serif',
                                        fontWeight: '500',
                                        lineHeight: '25.2px',
                                        textAlign: 'left',
                                        textDecoration: 'none',
                                        textTransform: 'none',
                                        WebkitFontSmoothing: 'antialiased'
                                    }}
                                >
                                    {item.name}
                                </h4>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>

                {/* Right Section - Book a call Button */}
                <div className="flex-shrink-0">
                    <motion.button 
                        onClick={() => {}}
                        tabIndex={0}
                        className="inline-block"
                        whileHover="hover"
                        initial="initial"
                        style={{
                            borderRadius: '64px',
                            opacity: 1,
                            willChange: 'auto',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.div 
                            variants={{
                                initial: { 
                                    backgroundColor: 'rgb(0, 0, 0)',
                                    borderColor: 'rgba(0, 0, 0, 0)',
                                    borderWidth: '1px'
                                },
                                hover: { 
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    borderColor: 'rgb(0, 0, 0)',
                                    borderWidth: '1px'
                                }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{
                                borderStyle: 'solid',
                                borderRadius: '64px',
                                outline: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                flexShrink: 0,
                                transform: 'none',
                                opacity: 1,
                                willChange: 'auto'
                            }}
                        >
                            <motion.h4 
                                variants={{
                                    initial: { color: 'rgb(255, 255, 255)' },
                                    hover: { color: 'rgb(0, 0, 0)' }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    margin: 0,
                                    padding: '12px 24px',
                                    fontSize: '16px',
                                    fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                    fontWeight: '100',
                                    lineHeight: '20px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    textTransform: 'none',
                                    WebkitFontSmoothing: 'antialiased'
                                }}
                            >
                                Book a call
                            </motion.h4>
                        </motion.div>
                    </motion.button>
                </div>

                {/* Page Navigation Buttons (for development) */}
                {onPageChange && (
                    <div className="hidden md:flex items-center space-x-3 ml-8">
                        <button 
                            onClick={() => onPageChange('landing-morphic')}
                            className={`px-4 py-2 rounded text-sm font-normal tracking-normal lowercase transition-colors duration-200 ${
                                currentPage === 'landing-morphic' 
                                    ? 'bg-gray-200 text-black' 
                                    : 'text-gray-600 hover:text-black'
                            }`}
                        >
                            Morphic
                        </button>
                        <button 
                            onClick={() => onPageChange('shuffle-template')}
                            className={`px-4 py-2 rounded text-sm font-normal tracking-normal lowercase transition-colors duration-200 ${
                                currentPage === 'shuffle-template' 
                                    ? 'bg-gray-200 text-black' 
                                    : 'text-gray-600 hover:text-black'
                            }`}
                        >
                            Shuffle
                        </button>
                        <button 
                            onClick={() => onPageChange('orbai-demo')}
                            className={`px-4 py-2 rounded text-sm font-normal tracking-normal lowercase transition-colors duration-200 ${
                                currentPage === 'orbai-demo' 
                                    ? 'bg-gray-200 text-black' 
                                    : 'text-gray-600 hover:text-black'
                            }`}
                        >
                            Orbai
                        </button>
                    </div>
                )}
            </nav>
        </header>
    )
}