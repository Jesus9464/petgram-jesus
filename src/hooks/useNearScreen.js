import { useEffect, useState, useRef } from "react";

export const useNearScreen = () => {
  const elementoDelRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== undefined
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entry) => {
        const { isIntersecting } = entry[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });

      observer.observe(elementoDelRef.current);
    });
  }, [elementoDelRef]);

  return [show, elementoDelRef];
};
