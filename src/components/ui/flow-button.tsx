'use client';
import { ArrowRight } from 'lucide-react';

export  function FlowButton({ text = "Modern Button", hoverActive = false }: { text?: string; hoverActive?: boolean }) {
  return (
    <button className={`group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-black bg-transparent px-8 py-3 text-sm font-semibold cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white hover:rounded-[12px] active:scale-[0.95] ${hoverActive ? 'border-transparent text-white rounded-[12px]' : 'text-[#111111]'}`}>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={`absolute w-4 h-4 fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${hoverActive ? 'left-4 stroke-white' : 'left-[-25%] stroke-[#111111] group-hover:left-4 group-hover:stroke-white'}`} 
      />

      {/* Text */}
      <span className={`relative z-[1] transition-all duration-[800ms] ease-out ${hoverActive ? 'translate-x-3 text-white' : '-translate-x-3 group-hover:translate-x-3'}`}>
        {text}
      </span>

      {/* Circle */}
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${hoverActive ? 'w-[220px] h-[220px] bg-[#111111] opacity-100' : 'w-4 h-4 bg-[#111111] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100'}`}></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={`absolute w-4 h-4 right-4 fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${hoverActive ? 'stroke-white' : 'stroke-[#111111] group-hover:right-[-25%] group-hover:stroke-white'}`} 
      />
    </button>
  );
}
