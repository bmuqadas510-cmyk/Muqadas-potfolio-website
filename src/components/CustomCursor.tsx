import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer');
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth spring-like lerp for the trailing outer luxury circle
  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      setTrailingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // 0.16 lerp factor for butter-smooth fluid trailing
        return {
          x: prev.x + dx * 0.16,
          y: prev.y + dy * 0.16,
        };
      });
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central precise dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FFEBB7] pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#D4AF37] transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isClicking ? 0.6 : 1})`,
        }}
      />

      {/* Outer soft glowing circle with smooth delayed trailing movement */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#D4AF37]/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color,opacity] duration-300 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 bg-[#D4AF37]/10 border-[#FFEBB7]/80 shadow-[0_0_24px_rgba(212,175,55,0.4)]'
            : 'w-8 h-8 bg-transparent border-[#D4AF37]/30 shadow-[0_0_12px_rgba(212,175,55,0.15)]'
        }`}
        style={{
          transform: `translate3d(${trailingPosition.x}px, ${trailingPosition.y}px, 0) scale(${
            isClicking ? 0.85 : 1
          })`,
        }}
      >
        {isHovered && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6C687]/60 animate-ping" />
        )}
      </div>
    </div>
  );
};
