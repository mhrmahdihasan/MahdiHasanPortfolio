import { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";

const HeroAnimation = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Dynamically load HALO script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js";
    script.async = true;

    script.onload = () => {
      if (!vantaEffect.current && window.VANTA && window.VANTA.HALO) {
        vantaEffect.current = window.VANTA.HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: "500.0",
          baseColor: 0x222222,
          backgroundColor: 0x000000,
          amplitudeFactor: 2.5,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="animation-container"

    >
      <Image
        width={80}
        height={80}
        layout="responsive"
        src="/images/profile-hero-section.png"
        alt="Profile"
        className="z-10   banner-right-img"
      />
    </div>
  );
};

export default HeroAnimation;
