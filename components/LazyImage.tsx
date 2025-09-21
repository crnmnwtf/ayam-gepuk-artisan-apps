import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' } // Start loading when the image is 100px away from the viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const placeholderClass = `bg-gray-200 dark:bg-gray-700 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`;
  const imageClass = `${props.className} transition-opacity duration-500 ${isLoaded ? 'opacity-100 lazy-image-loaded' : 'opacity-0'}`;

  return (
    <div ref={imgRef} className="relative w-full h-full">
      <div className={`${props.className} ${placeholderClass}`} />
      {isInView && (
        <img
          src={src}
          alt={alt}
          {...props}
          onLoad={handleLoad}
          className={imageClass}
        />
      )}
    </div>
  );
};

export default LazyImage;