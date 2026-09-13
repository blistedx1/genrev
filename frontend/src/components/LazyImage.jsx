import React, { useState, useEffect } from 'react';

const DEFAULT_ARCH_FALLBACK = '/projects/townhouse_living.jpg';

/**
 * LazyImage Component
 * Premium progressive image loader featuring:
 * 1. Normalized aspect-ratio containers
 * 2. Animated dark-luxury skeleton shimmer while loading
 * 3. Smooth blur-up progressive reveal transition (zero abrupt pop-in)
 * 4. Architectural color grading & graceful fallback
 */
export default function LazyImage({
  src,
  alt = 'Genrev Interio Architecture',
  className = '',
  containerClassName = '',
  aspectRatio = '', // '16/10', '16/11', '4/3', 'square', etc.
  fallbackSrc = DEFAULT_ARCH_FALLBACK,
  priority = false,
  onClick,
  children
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
    setLoaded(false);
    setError(false);
  }, [src, fallbackSrc]);

  const aspectClass = aspectRatio
    ? {
        '16/10': 'aspect-[16/10]',
        '16/11': 'aspect-[16/11]',
        '16/9': 'aspect-[16/9]',
        '4/3': 'aspect-[4/3]',
        'square': 'aspect-square',
        '1/1': 'aspect-square',
        '3/4': 'aspect-[3/4]'
      }[aspectRatio] || `aspect-[${aspectRatio}]`
    : '';

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-card-bg select-none ${aspectClass} ${containerClassName}`}
    >
      {/* Luxury Dark Skeleton Shimmer Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 skeleton-shimmer z-0 flex items-center justify-center pointer-events-none">
          <div className="w-6 h-6 rounded-full border border-gold/20 border-t-gold animate-spin-slow opacity-40" />
        </div>
      )}

      {/* Progressively Loaded Image with Blur-Up Transition */}
      <img
        src={error ? fallbackSrc : currentSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        className={`w-full h-full object-cover arch-image-grade transition-all duration-700 ease-out ${
          loaded
            ? 'opacity-100 filter blur-0 scale-100'
            : 'opacity-0 filter blur-md scale-105'
        } ${className}`}
      />

      {/* Architectural Subtle Vignette Scrim (Normalizes contrast across all renders) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark-bg/60 via-transparent to-black/20 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Optional Child Badges / Scrims */}
      {children}
    </div>
  );
}
