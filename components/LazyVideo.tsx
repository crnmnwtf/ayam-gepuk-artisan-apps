import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  poster: string;
  children?: ReactNode;
}

const LazyVideo: React.FC<LazyVideoProps> = ({ poster, children, ...props }) => {
  const [isInView, setIsInView] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

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
      { rootMargin: '100px' }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoContainerRef} className={props.className}>
      {isInView ? (
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster={poster}
            {...props}
        >
          {children}
        </video>
      ) : (
        // Render a placeholder that looks like the video poster
        <div style={{ backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }} />
      )}
    </div>
  );
};

export default LazyVideo;