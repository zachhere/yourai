import Link from 'next/link'
import { Equal, X } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion' 

const menuItems = [
    { name: 'Product', href: '#product' },
    { name: 'Platform', href: '#platform' },
    { name: 'Customers', href: '#customers' },
    { name: 'Company', href: '#company' },
]

interface DesignaliDemoProps {
    isVisible: boolean;
}

export default function DesignaliDemo({ isVisible }: DesignaliDemoProps) {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <div className="w-full">
            <header>
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    data-state={menuState && 'active'}
                    className={`fixed left-0 right-0 w-full z-50 px-2 bg-white/20 backdrop-blur-sm border-b-2 border-white/30 transition-transform duration-300 ease-in-out ${
                        isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}>
                    <div className="mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-16">
                        <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2">
                            {/* Logo and Menu Button */}
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link
                                    href="./#hero"
                                    aria-label="home"
                                    className="flex items-center space-x-3">
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
                                </Link>

                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden md:hidden">
                                    <Equal className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className="hidden lg:flex gap-8">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="relative group">
                                    <Link
                                        href={item.href}
                                        className="relative block rounded-[10px] px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                                        style={{ 
                                            fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                            fontWeight: '100'
                                        }}>
                                        {/* Transparent glass effect overlay */}
                                        <div className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                            bg-white/10 backdrop-blur-sm border border-white/20 
                                            shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]" />
                                        
                                        {/* Text content */}
                                        <p className="relative z-10">{item.name}</p>
                                    </Link>
                                    </div>
                                ))}
                            </nav>

                            {/* Get Started Button - Desktop */}
                            <div className="hidden lg:block">
                                <button 
                                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
                                    style={{ 
                                        fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                        fontWeight: '550',
                                        color: 'white'
                                    }}
                                >
                                    Get Started
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            <div className="bg-background in-data-[state=active]:block lg:hidden mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="w-full">
                                    <ul className="space-y-6 text-base">
                                        {menuItems.map((item, index) => (
                                            <li key={index} className="relative group">
                                                <Link
                                                    href={item.href}
                                                    className="relative block text-white duration-300 transition-all rounded-[10px] px-3 py-2 hover:scale-105"
                                                    style={{ 
                                                        fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                                        fontWeight: '100'
                                                    }}>
                                                    {/* Transparent glass effect overlay */}
                                                    <div className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                                        bg-white/10 backdrop-blur-sm border border-white/20 
                                                        shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]" />
                                                    
                                                    {/* Text content */}
                                                    <span className="relative z-10">{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                                    <button 
                                        className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
                                        style={{ 
                                            fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                            fontWeight: '550',
                                            color: 'white'
                                        }}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.nav>
            </header>
        </div>
    )
}
