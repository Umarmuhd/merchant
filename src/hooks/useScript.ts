import { useEffect } from "react";

export const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.crossOrigin = "*";
    script.setAttribute("Access-Control-Allow-Origin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};
