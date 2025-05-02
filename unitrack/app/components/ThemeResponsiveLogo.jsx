"use client";

import { useEffect, useRef, useState } from "react";

export default function ThemeResponsiveLogo({
  type = "text",
  className = "",
  alt = "UniTrack Logo",
  ...props
}) {
  const logoRef = useRef(null);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const updateLogo = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      const srcMap = {
        text: isDark
          ? "/assets/imgs/unitrack-images/unitrack-logo-text-white.png"
          : "/assets/imgs/unitrack-images/unitrack-logo-text-black.png",
        icon: isDark
          ? "/assets/imgs/unitrack-images/unitrack-logo-white.png"
          : "/assets/imgs/unitrack-images/unitrack-logo-blue.png",
      };

      setSrc(srcMap[type]);
    };

    updateLogo();

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", updateLogo);

    return () => {
      mql.removeEventListener("change", updateLogo);
    };
  }, [type]);

  return src ? (
    <img
        ref={logoRef}
        src={src}
        alt={alt}
        className={className}
        {...props}
    />
  ) : null;

}

