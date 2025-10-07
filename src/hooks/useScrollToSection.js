import { useCallback } from "react";

export const useScrollToSection = () => {
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return scrollTo;
};
