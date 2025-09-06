"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoItem = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <div className="flex flex-col gap-1.5">
      <h3 className="text-base font-bold text-white">{label}</h3>
      <div className="text-base text-text-secondary">{children}</div>
    </div>
    <div className="mt-4 h-px bg-border" />
  </div>
);

const MemoverseProject = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const mediaCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      const bg = bgRef.current;
      const textCol = textColRef.current;
      const mediaCard = mediaCardRef.current;
      if (!root || !bg || !textCol || !mediaCard) return;

      if (prefersReduced) {
        gsap.set([bg, textCol, mediaCard], { clearProps: "all", opacity: 1, x: 0, y: 0, rotate: 0, skewX: 0, skewY: 0, scale: 1, filter: "none" });
        return;
      }

      // 1) الخلفية: بارالاكس لأعلى (خفيف) مع التمرير
      gsap.fromTo(
        bg,
        { yPercent: 0 },
        {
          yPercent: -12,
          ease: "none",
          duration: 2,
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // 2) النص: دخول من أعلى-يسار + تمويه بسيط
      gsap.fromTo(
        textCol,
        { opacity: 0, x: -28, y: -24, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 85%", once: true },
        }
      );

      // 3) كارد الصورة: دخول مائل من أسفل-يمين (+ skew + rotate) ثم ارتداد وعودة لموضعه
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: root, start: "top 85%", once: true },
      });

      tl.fromTo(
        mediaCard,
        {
          opacity: 0,
          x: 60,
          y: 70,
          skewY: 6,
          rotate: -3,
          scale: 0.97,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          skewY: 0,
          rotate: 0,
          scale: 1.02,
          filter: "blur(0px)",
          duration: 2,
          ease: "power4.out",
        }
      )
        // دفشة خفيفة للأمام (forward) ثم ارتداد
        .to(mediaCard, { y: -18, duration: 0.22, ease: "power2.out" }, "-=0.45")
        .to(mediaCard, { y: 0, scale: 1, duration: 0.28, ease: "power3.out" });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="memoverse-project"
      className="relative bg-background text-foreground overflow-hidden"
    >
      {/* الخلفية + غطاء */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/s9M7cluoWKoIuGw7e0tQCnXA50-10.png"
          alt="Outdoor scene with ruins, background for Memoverse project"
          fill
          className="object-cover z-0"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 items-center">

          {/* عمود النص */}
          <div ref={textColRef} className="flex flex-col will-change-transform">
            <h4 className="text-base font-medium text-white mb-4">Web AR Design | XR</h4>
            <div className="mb-6">
              <h2 className="text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">Memoverse</h2>
              <h3 className="text-xl lg:text-2xl font-normal text-text-secondary mt-2">
                (2025 MIT Reality Hack Winner)
              </h3>
            </div>
            <p className="text-lg text-white max-w-md leading-relaxed">
              A web AR solution that lets users revisit 3D scans of sites lost in the 2025 LA fire and share personal memories.
            </p>
            <div className="mt-10 space-y-6">
              <InfoItem label="Role">
                <p>UX Design, 3D Design</p>
              </InfoItem>
              <InfoItem label="Duration">
                <p>Jan 23-27, 2025</p>
              </InfoItem>
              <InfoItem label="Team">
                <p>UX + 3D Designer</p>
                <p>XR Engineer</p>
              </InfoItem>
            </div>
          </div>

          {/* كارد الصورة */}
          <div className="w-full" style={{ perspective: 1200 }}>
            <div
              ref={mediaCardRef}
              className="rounded-3xl overflow-hidden border border-border will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/I3G6eiOxHZOlwn7k8yLCIa8TOXg-11.jpg"
                alt="Memoverse AR project interface showing a historic fountain"
                width={1722}
                height={1058}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-20 lg:mt-24">
          <a
            href="./memoverse"
            className="inline-block bg-primary text-primary-foreground rounded-full py-3 px-8 text-base font-medium transition-colors hover:bg-primary/90"
          >
            View more
          </a>
        </div>
      </div>

      <style jsx>{`
        .will-change-transform {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
};

export default MemoverseProject;
