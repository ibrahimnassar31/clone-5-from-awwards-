"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LivingProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const visual = visualRef.current;
      if (!section || !visual) return;

      if (prefersReduced) {
        gsap.set(visual, { opacity: 1, yPercent: 0, y: 0, filter: "none", scale: 1 });
        return;
      }

      // دخول الصورة من أسفل (خارج المشهد) + ارتداد -20px ثم رجوع لموضعها
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        visual,
        // بداية تحت الشاشة قليلًا، مع تمويه خفيف
        { opacity: 0, yPercent: 35, filter: "blur(8px)", scale: 0.98 },
        // وصول للموضع الطبيعي
        { opacity: 1, yPercent: 0, filter: "blur(0px)", scale: 1.02, duration: 0.9, ease: "power4.out" }
      )
        // ارتداد للأعلى -20px
        .to(visual, { y: -20, duration: 0.22, ease: "power2.out" }, "-=0.45")
        // رجوع لموضعه النهائي (y: 0)
        .to(visual, { y: 0, duration: 0.28, ease: "power3.out" });

      // (اختياري) ظهور النص بسلاسة
      gsap.fromTo(
        section.querySelectorAll("[data-sr]"),
        { opacity: 0, y: 24, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 88%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="living"
      className="relative flex flex-col gap-14 overflow-hidden rounded-3xl px-5 py-10 md:p-14 lg:p-20"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/qd36BQQva5gd6ljg1Fnsd8DCr9Q-8.jpg"
        alt="Living project background gradient"
        fill
        className="object-cover z-[-2]"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-project-overlay/60 z-[-1]" />

      <div className="relative z-10 flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
        <div className="flex w-full flex-col gap-10 lg:w-auto" data-sr>
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium text-text-primary">Mobile Design | Travel Memory</h4>
            <h2 className="text-5xl font-bold text-text-primary">Living</h2>
            <p className="max-w-md text-lg text-text-secondary">
              0 to 1 travel memory app design. Analyzed over 150 data points. Improved task success rates
              from 57% to 95.5% with 3 usability test rounds.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-10">
            <div className="flex flex-col gap-3" data-sr>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-text-primary">Role</h3>
                <p className="text-base text-text-secondary">UI/UX Design, UX Research</p>
              </div>
              <div className="h-px w-full bg-white/20" />
            </div>
            <div className="flex flex-col gap-3" data-sr>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-text-primary">Duration</h3>
                <p className="text-base text-text-secondary">12 Weeks</p>
              </div>
              <div className="h-px w-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* حاوية الصورة التي سنحركها */}
        <div
          ref={visualRef}
          className="relative w-full flex-shrink-0 self-center lg:w-[48%] lg:self-end will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/gMNpYhNQqOYZMZRVbHqJUw2hCLg-9.png"
            width={2941}
            height={2054}
            alt="Living app mockups on mobile phones"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex justify-center" data-sr>
        <Link
          href="/Living"
          className="rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View case study
        </Link>
      </div>

      <style jsx>{`
        .will-change-transform {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
}
