"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoBlock = ({
  title,
  details,
}: {
  title: string;
  details: string[];
}) => (
  <div className="border-b border-white/30 pb-4">
    <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
    <div className="flex flex-col">
      {details.map((detail, index) => (
        <p key={index} className="text-base text-white">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

export default function GauriHomeProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const mediaWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      const bg = bgRef.current;
      const textCol = textColRef.current;
      const media = mediaWrapRef.current;
      if (!root || !bg || !textCol || !media) return;

      if (prefersReduced) {
        gsap.set([bg, textCol, media], { clearProps: "all", opacity: 1, x: 0, y: 0, rotate: 0, skewX: 0, skewY: 0, scale: 1, filter: "none" });
        return;
      }

      // الخلفية: بارالاكس (يتفاعل مع التمرير لأعلى/أسفل)
      gsap.fromTo(
        bg,
        { yPercent: 8 },
        {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // النص: دخول “aggressive” من أعلى-يسار + تمويه بسيط ثم يتثبت
      gsap.fromTo(
        textCol,
        { opacity: 0, x: -60, y: -30, skewX: -5, rotate: 2, filter: "blur(8px)" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          skewX: 0,
          rotate: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // الصورة: دخول من أسفل-يمين + skew + ارتداد، وبعدين تتحرك بشكل تفاعلي مع التمرير (scrub)
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      intro
        .fromTo(
          media,
          { opacity: 0, x: 80, y: 70, skewY: 8, rotate: -4, scale: 0.96, filter: "blur(8px)" },
          { opacity: 1, x: 0, y: 0, skewY: 0, rotate: 0, scale: 1.04, filter: "blur(0px)", duration: 1.0, ease: "power4.out" }
        )
        .to(media, { y: -24, duration: 0.22, ease: "power2.out" }, "-=0.5")
        .to(media, { y: 0, scale: 1.0, duration: 0.28, ease: "power3.out" });

      // حركة تفاعلية مستمرة للصورة أثناء التمرير عبر السكشن كاملًا (يعكس اتجاه التمرير)
      gsap.fromTo(
        media,
        { y: 30 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* الخلفية + طبقة تعتيم */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/wfgAwl14AWAgGFhgE64IMIUBoKA-12.jpg"
          alt="Abstract textured brown background"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-20 md:py-28">
        <div className="flex flex-col items-center gap-16">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* عمود النص */}
            <div ref={textColRef} className="flex flex-col gap-10 lg:w-1/2 will-change-transform">
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-medium uppercase tracking-[0.8px] text-white">Web Design | E-commerce</h4>
                <h2 className="text-[40px] font-bold text-white leading-tight">Gauri Home</h2>
                <p className="text-lg text-white/90 leading-relaxed max-w-md">
                  A responsive e-commerce website. Achieved a 95% task success
                  rate and saving 16% in project time by optimizing code effort
                  with engineers.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <InfoBlock title="Role" details={["UX Design Intern"]} />
                <InfoBlock title="Duration" details={["Nov 2023 - Jun 2024"]} />
                <InfoBlock title="Team" details={["Stakeholder + PM", "UX Researcher", "Software Engineer"]} />
              </div>
            </div>

            {/* الصورة */}
            <div className="lg:w-1/2 flex justify-center" style={{ perspective: 1000 }}>
              <div ref={mediaWrapRef} className="will-change-transform" style={{ transformStyle: "preserve-3d" }}>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/4r4Yjcx141kflQKumMzKHujtGj8-13.png"
                  width={596}
                  height={402}
                  alt="GAURI brand visual with abstract orange, cream, and green shapes over a tan background with the word GAURI in white."
                  className="w-full max-w-lg h-auto"
                />
              </div>
            </div>
          </div>

          <Link
            href="/GauriHome"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-[52px] px-8 bg-primary text-primary-foreground hover:bg-primary/90"
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
