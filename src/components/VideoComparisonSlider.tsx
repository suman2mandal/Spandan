'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import YouTubeEmbed from './YouTubeEmbed';


interface VideoComparisonSliderProps {
  previous: string; // video src URL
  current: string;  // video src URL
  width?: number;
  height?: number;
}

export default function VideoComparisonSlider({
  previous,
  current,
  width = 700,
  height = 500,
}: VideoComparisonSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = () => setIsDragging(true);
  const endDrag = () => setIsDragging(false);

  const handleMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!containerRef.current || !isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const offset = clientX - rect.left;
    const newPos = (offset / rect.width) * 100;
    if (newPos >= 0 && newPos <= 100) setPosition(newPos);
  }, [isDragging]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e);
    const onTouchMove = (e: TouchEvent) => handleMove(e);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchend', endDrag);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto overflow-hidden rounded-xl shadow-lg select-none ${isDragging ? 'cursor-grabbing' : 'cursor-ew-resize'}`}
      style={{ width, height }}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      <YouTubeEmbed url={previous} />

      {/* Overlay (Current) Video */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <YouTubeEmbed url={current} />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 h-full w-1 bg-teal-500 z-30"
        style={{ left: `${position}%` }}
      />

      {/* Slider Knob */}
      <div
        className="absolute top-0 h-full z-40 flex items-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-6 h-6 bg-white border-2 border-teal-600 rounded-full shadow-md" />
      </div>
    </div>
  );
}
