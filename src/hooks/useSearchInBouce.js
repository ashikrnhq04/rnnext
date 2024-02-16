import { useEffect, useRef } from "react";

export default function useDBounceInSearch(fn, delay) {
  const timeoutId = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  function debounceCall(...args) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounceCall;
}
