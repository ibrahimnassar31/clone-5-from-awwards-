"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StoryvilleProject = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      if (!root) return;

      const visual = root.querySelector(".storyville-visual");
      const textCol = root.querySelector(".storyville-text");

      if (prefersReduced) {
        gsap.set(visual, { opacity: 1, yPercent: 0, scale: 1 });
        gsap.set(textCol, { opacity: 1, y: 0, filter: "none" });
        return;
      }

      // دخول النص بسلاسة عند ظهور السكشن
      gsap.fromTo(
        textCol,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            once: true,
          },
        }
      );

      // الصورة: تبدأ خارج أسفل الشاشة، تدخل لمكانها ثم تواصل الصعود (بارالاكس)
      // نستخدم scrub لربط الحركة بالتمرير عبر كامل السكشن
      gsap.fromTo(
        visual,
        { opacity: 0, yPercent: 35, scale: 0.98, rotateX: 3 }, // بداية خارج الشاشة لأسفل
        {
          opacity: 1,
          yPercent: -10, // تستمر بالصعود قليلًا بعد مكانها الطبيعي (إحساس forward/parallax)
          scale: 1.04,   // تكبير بسيط كإحساس "forward"
          rotateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom", // يبدأ التحريك حين يصل أعلى السكشن أسفل الشاشة
            end: "bottom top",   // ينتهي حين يخرج السكشن من أعلى
            scrub: true,         // ربط مباشر بحركة التمرير
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="storyville"
      className="flex w-full flex-col items-center gap-10 py-[100px]"
      style={{ backgroundColor: "rgb(74, 54, 43)" }}
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-16 px-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Text content */}
        <div className="storyville-text flex flex-1 flex-col items-start gap-10 max-w-full lg:max-w-[480px]">
          <div className="flex w-full flex-col items-start gap-4">
            <h4 className="text-base font-medium text-text-primary">Tablet Design | Education</h4>
            <h2 className="text-5xl font-bold text-text-primary">Storyville</h2>
            <p className="text-lg leading-[1.6] text-text-primary">
              An efficient book-discovery solution for a children's education tablet app, achieving a 92% NPS through exploring a range of design approaches.
            </p>
          </div>
          <div className="flex w-full flex-col gap-5">
            <div className="w-full">
              <div className="flex flex-col gap-2 border-b border-white/20 pb-5">
                <h3 className="text-xl font-medium text-text-primary">Role</h3>
                <p className="text-base text-text-secondary">UI/UX Design, UX Research</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2 border-b border-white/20 pb-5">
                <h3 className="text-xl font-medium text-text-primary">Duration</h3>
                <p className="text-base text-text-secondary">6 Weeks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mockup image */}
        <div
          className="relative w-full flex-1 max-w-[550px] lg:max-w-none"
          style={{ perspective: 1000 }}
        >
          <div
            className="storyville-visual will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/VgjTmvzXp5bWePmrWUqcFi3I9Y-7.png"
              alt="Storyville project mockup"
              width={2616}
              height={2163}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <a
        href="./Storyville"
        className="flex items-center justify-center rounded-3xl bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        View case study
      </a>

      <style jsx>{`
        .storyville-visual,
        .storyville-text {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
};

export default StoryvilleProject;
