"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!turbRef.current || !dispRef.current || prefersReduced) return;

    gsap.to(turbRef.current, {
      attr: { baseFrequency: 0.012 },
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(dispRef.current, {
      attr: { scale: 28 },
      duration: 3.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to("[data-float='up']", {
      y: -6,
      duration: 2.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    gsap.to("[data-float='down']", {
      y: 6,
      duration: 2.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.fromTo(
      ".hero-content > *",
      { opacity: 0, y: 20, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="start"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden overflow-x-hidden bg-background text-foreground"
    >
      {/* Constrained SVG filter region to prevent overflow */}
      <svg className="absolute inset-0 h-0 w-0 pointer-events-none" aria-hidden="true">
        <filter
          id="seaWaveFilter"
          x="0%" y="0%" width="100%" height="100%"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="2"
            seed="3"
            result="noise"
          />
          <feDisplacementMap
            ref={dispRef}
            in2="noise"
            in="SourceGraphic"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Background image with wave filter */}
      <div
        className="absolute inset-0 z-0 will-change-transform overflow-hidden"
        style={{
          backgroundImage:
            "url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/4Jk1riLva2GhHx8T8UtJ5VTBcXE-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "url(#seaWaveFilter)",
          transform: "translateZ(0)",
          maxWidth: "100vw", // hard clamp
        }}
      />

      {/* Contrast overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/10 to-black/30" />

      {/* Content */}
      <div className="relative z-10 hero-content flex flex-col items-center justify-center space-y-6 px-4 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-xl font-normal tracking-wider text-white" data-float="up">
            UX &amp; 3D DESIGNER
          </h3>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white" data-float="down">
            Tingting Luo
          </h1>
          <p className="max-w-xl text-lg text-white/95" data-float="up">
            A UX and 3D Designer fiercely passionate about advancing products and knowledge.
            I value research, data, and constraints to inform designs. I stay current with
            technology and trends.
          </p>
        </div>
        <Link href="/#works" className="inline-flex h-auto items-center justify-center whitespace-nowrap rounded-3xl bg-primary px-8 py-3 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" data-float="down">
          See My Work
        </Link>
      </div>

      <style jsx>{`
        .hero-content > * {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
