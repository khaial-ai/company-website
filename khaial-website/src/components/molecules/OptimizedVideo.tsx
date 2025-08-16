"use client";

import { useEffect, useRef, useState } from "react";

type OptimizedVideoProps = {
  src?: string;
  poster?: string;
  className?: string;
  roundedClassName?: string;
  ariaLabel?: string;
};

/**
 * OptimizedVideo lazily attaches the video `src` when in view to avoid
 * unnecessary network requests. It renders inside a styled container
 * with a soft glow and rounded border suitable for hero/intro sections.
 */
const OptimizedVideo = ({
  src,
  poster,
  className = "",
  roundedClassName = "rounded-3xl",
  ariaLabel = "Product video showcase",
}: OptimizedVideoProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !videoRef.current) return;
    // Attempt silent autoplay when possible
    const tryAutoplay = async () => {
      try {
        await videoRef.current?.play();
      } catch {
        // Ignore autoplay rejection; user can press play
      }
    };
    // Only try autoplay if muted to comply with browser policies
    if (videoRef.current?.muted) {
      void tryAutoplay();
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto max-w-6xl ${className}`}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.25rem] bg-gradient-to-b from-purple-600/40 via-purple-800/30 to-transparent blur-2xl" />

      {/* Aspect-ratio wrapper (16:9) */}
      <div className={`relative w-full ${roundedClassName} border border-white/10 bg-black/80 shadow-[0_40px_120px_-20px_rgba(124,58,237,0.35)]`}>
        <div className="pt-[56.25%]" />
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full ${roundedClassName} object-cover [transform:translateZ(0)]`}
          // Attach src lazily when in view
          {...(isInView && src ? { src } : {})}
          {...(poster ? { poster } : {})}
          controls
          controlsList="nodownload noplaybackrate"
          preload="metadata"
          playsInline
          muted
        />
        {/* Subtle inner border */}
        <div className={`pointer-events-none absolute inset-0 ${roundedClassName} ring-1 ring-white/10`} />
      </div>
    </div>
  );
};

export default OptimizedVideo;


