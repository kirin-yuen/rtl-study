import { useRef, useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  const timer = useRef();

  useEffect(() => {
    if (value) {
      timer.current = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [value]);

  return debounceValue;
}
