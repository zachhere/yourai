'use client';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export  function FlowButton({ text = "Modern Button", hoverActive = false }: { text?: string; hoverActive?: boolean }) {
  const [internalHover, setInternalHover] = useState(false);

  useEffect(() => {
    if (hoverActive) {
      // 약간의 지연 후 애니메이션 트리거
      const timer = setTimeout(() => setInternalHover(true), 10);
      return () => clearTimeout(timer);
    } else {
      setInternalHover(false);
    }
  }, [hoverActive]);

  return (
    <button 
      data-hover={internalHover ? 'true' : undefined}
      className="group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-black bg-transparent px-8 py-3 text-sm font-semibold text-[#111111] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white hover:rounded-[12px] data-[hover=true]:border-transparent data-[hover=true]:text-white data-[hover=true]:rounded-[12px] active:scale-[0.95]"
    >
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-[#111111] fill-none z-[9] group-hover:left-4 group-hover:stroke-white group-data-[hover=true]:left-4 group-data-[hover=true]:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 group-data-[hover=true]:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111111] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 group-data-[hover=true]:w-[220px] group-data-[hover=true]:h-[220px] group-data-[hover=true]:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-[#111111] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white group-data-[hover=true]:right-[-25%] group-data-[hover=true]:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );
}
