import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    if (mediaQueryList.matches !== matches) {
      setMatches(mediaQueryList.matches);
    }

    const listener = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", listener);

    return () => mediaQueryList.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};
