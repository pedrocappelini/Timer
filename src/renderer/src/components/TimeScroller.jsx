import React, { useEffect, useState, useRef } from "react";

export default function TimeScroller({ label, value, onChange, max }) {
  const scrollerRef = useRef(null);
  const itemHeight = 28;
  const scrollTimeoutRef = useRef(null);
  const numbers = Array.from({ length: max + 1 }, (_, i) => i);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = value * itemHeight;
    }
  }, []);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({
        top: value * itemHeight,
        behavior: "smooth",
      });
    }
  }, [value, itemHeight]);

  const handleScroll = () => {
    clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      if (scrollerRef.current) {
        const scrollTop = scrollerRef.current.scrollTop;
        const selectedIndex = Math.round(scrollTop / itemHeight);
        if (selectedIndex !== value && selectedIndex <= max) {
          onChange(selectedIndex);
        }
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-gray-400 mb-1">{label}</span>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="h-24 w-16 overflow-y-scroll overflow-x-hidden snap-y snap-mandatory hide-scrollbar relative l-2"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      >
        <div style={{ height: `calc(50% - ${itemHeight / 2}px)` }}></div>
        {numbers.map((num) => (
          <div
            key={num}
            className={`flex items-center justify-center h-7 text-3xl transition-all duration-200 snap-center ${
              num === value
                ? "text-green-500 font-bold scale-125"
                : "text-gray-500"
            }`}
          >
            {String(num).padStart(2, "0")}
          </div>
        ))}
        <div style={{ height: `calc(50% - ${itemHeight / 2}px)` }}></div>
      </div>
    </div>
  );
}
