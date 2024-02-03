import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// renvoie en haut de la page à chaque navigation
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
}