import { useState, useEffect } from 'react';

/*
 * Hook for getting window dimensions courtesy of stack overflow
 * https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 */



export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});
  
    useEffect(() => {
      function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }