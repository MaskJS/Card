import { useState, useEffect, useRef } from 'react';
import { Skeleton } from './ui/skeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
}

export function LazyImage({ src, alt, style = {}, loading = 'lazy' }: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'eager' || !imgRef.current) {
      loadImage();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' } // 提前100px加载
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, loading]);

  const loadImage = () => {
    setIsLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', ...style }}>
      {isLoading && (
        <Skeleton className="w-full h-full" />
      )}
      <img
        ref={imgRef}
        src={imageSrc || ''}
        alt={alt}
        className={`w-full h-full object-cover ${imageSrc ? '' : 'hidden'}`}
        loading={loading}
        style={{ visibility: imageSrc ? 'visible' : 'hidden' }}
      />
    </div>
  );
}
