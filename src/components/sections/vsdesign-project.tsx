"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VSDesignProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      const bg = bgRef.current;
      const overlay = overlayRef.current;
      const leftCol = leftRef.current;
      const rightCol = rightRef.current;
      if (!root || !bg || !overlay || !leftCol || !rightCol) return;

      if (prefersReduced) {
        gsap.set([bg, overlay, leftCol, rightCol], {
          clearProps: "all",
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          skewX: 0,
          skewY: 0,
          scale: 1,
          filter: "none",
        });
        return;
      }

      // خلفية: Ken Burns + Parallax مع التمرير
      gsap.fromTo(
        bg,
        { scale: 1.08, yPercent: 6 },
        {
          scale: 1.0,
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        overlay,
        { opacity: 0.6 },
        {
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // عمود اليسار: يظهر من اليسار + reveal متتابع
      const leftItems = leftCol.querySelectorAll<HTMLElement>("[data-reveal-left]");
      gsap.fromTo(
        leftItems,
        { opacity: 0, y: 24, x: -40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftCol,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      const leftTitle = leftCol.querySelector<HTMLElement>("[data-title-left]");
      if (leftTitle) {
        gsap.fromTo(
          leftTitle,
          { letterSpacing: "0.12em", opacity: 0, y: 18, x: -20 },
          {
            letterSpacing: "0em",
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftCol,
              start: "top 86%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // عمود اليمين: يظهر من اليمين + reveal متتابع
      const rightItems = rightCol.querySelectorAll<HTMLElement>("[data-reveal-right]");
      gsap.fromTo(
        rightItems,
        { opacity: 0, y: 26, x: 48, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightCol,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
      const rightTitle = rightCol.querySelector<HTMLElement>("[data-title-right]");
      if (rightTitle) {
        gsap.fromTo(
          rightTitle,
          { letterSpacing: "0.14em", opacity: 0, y: 20, x: 24 },
          {
            letterSpacing: "0em",
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightCol,
              start: "top 86%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-20 lg:py-32"
    >
      {/* الخلفية والغطاء */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/g9myZ5LYkLrqoUvLuvjgiEYoqwQ-14.jpg"
          alt="Blurred background of an art gallery"
          fill
          className="object-cover object-center"
          quality={80}
          priority
        />
        <div ref={overlayRef} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
          {/* العمود الأيسر (كما هو) */}
          <div ref={leftRef} className="flex flex-col space-y-8 text-foreground will-change-transform">
            <div>
              <h4
                data-reveal-left
                className="font-body text-sm font-medium uppercase tracking-[0.1em] text-text-secondary"
              >
                Web Design | CMS Art Gallery
              </h4>
              <h2
                data-title-left
                className="mt-4 font-display text-4xl font-bold text-text-primary"
                style={{ willChange: "transform, opacity, letter-spacing" }}
              >
                VSDesign x Penn Museum Online Art Gallery
              </h2>
              <p data-reveal-left className="mt-6 font-body text-lg leading-relaxed text-text-primary/90">
                A responsive online art gallery for the Penn Museum&apos;s exhibition. Led UX and Motion design while
                managing the CMS and atomic design system.
              </p>
            </div>

            <div className="flex flex-col gap-8 pt-4 md:flex-row md:gap-12">
              <div data-reveal-left>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">Role</h3>
                <p className="mt-2 text-base text-text-primary">UX Design, Motion Design</p>
              </div>
              <div data-reveal-left>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">Duration</h3>
                <p className="mt-2 text-base text-text-primary">Aug 2024 - Dec 2024</p>
              </div>
              <div data-reveal-left>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">Team</h3>
                <div className="mt-2 space-y-1 text-base text-text-primary">
                  <p>Stakeholder + PM</p>
                  <p>UX Designer</p>
                  <p>Brand Designer</p>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الأيمن: نص بدلاً من الصورة */}
          <div ref={rightRef} className="flex flex-col space-y-8 text-foreground will-change-transform">
            <div>
              <h4
                data-reveal-right
                className="font-body text-sm font-medium uppercase tracking-[0.1em] text-text-secondary"
              >
                Outcomes & Impact
              </h4>
              <h2
                data-title-right
                className="mt-4 font-display text-3xl md:text-4xl font-bold text-text-primary"
                style={{ willChange: "transform, opacity, letter-spacing" }}
              >
                Shaping a Living Art Experience
              </h2>
              <p data-reveal-right className="mt-6 font-body text-lg leading-relaxed text-text-primary/90">
                Built an atomic design system powering fast CMS-driven pages, improved perceived performance with motion
                guidelines, and introduced accessible interactions for keyboard and screen readers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div data-reveal-right className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-text-primary">Performance</h3>
                <p className="mt-2 text-sm text-text-primary/80">
                  Reduced CLS &amp; LCP via media policies and priority hints.
                </p>
              </div>
              <div data-reveal-right className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-text-primary">Motion System</h3>
                <p className="mt-2 text-sm text-text-primary/80">
                  Crafted timing/easing tokens with reduced-motion fallbacks.
                </p>
              </div>
              <div data-reveal-right className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-text-primary">Accessibility</h3>
                <p className="mt-2 text-sm text-text-primary/80">
                  Focus states, semantics, and color contrast adjustments.
                </p>
              </div>
              <div data-reveal-right className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <h3 className="text-base font-semibold text-text-primary">CMS Velocity</h3>
                <p className="mt-2 text-sm text-text-primary/80">
                  Atomic components + presets scaled authoring speed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* الزر */}
        <div className="mt-16 flex w-full justify-center">
          <Link
            href="/vsdesign"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            View more
          </Link>
        </div>
      </div>

      <style jsx>{`
        .will-change-transform {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
}
