'use client';

import { useState, useEffect, useRef } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

// A custom hook to get the dimensions of a ref-ed element
const useContainerDimensions = <T extends HTMLElement = HTMLDivElement>(): [React.RefObject<T | null>, Dimensions] => {
  const ref = useRef<T>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    const measureDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    // Initial measurement
    measureDimensions();

    // Set up ResizeObserver
    if (typeof window !== 'undefined' && 'ResizeObserver' in window && ref.current) {
      const resizeObserver = new ResizeObserver(entries => {
        // Only trigger update if the observed element's dimensions actually changed
        // This is important because ResizeObserver can fire for other reasons
        for (let entry of entries) {
          if (entry.target === ref.current) {
            measureDimensions();
          }
        }
      });

      resizeObserver.observe(ref.current);

      // Cleanup
      return () => {
        resizeObserver.disconnect();
      };
    } else {
      // Fallback for older browsers or if ResizeObserver not available
      // This is less efficient but covers all cases.
      const handleWindowResize = () => {
        measureDimensions();
      };
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []); 

  return [ref, dimensions];
};

export default useContainerDimensions;