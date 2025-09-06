"use client";

import React, { useEffect, useRef } from "react";
import { Mail, FileText, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactFooter = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = footerRef.current;
      if (!root) return;

      // عناصر نفعّل عليها الـ stagger
      const heading = root.querySelector("[data-heading]");
      const items = root.querySelectorAll<HTMLElement>("[data-stagger]");
      const copyright = root.querySelector("[data-copy]");

      if (prefersReduced) {
        gsap.set([root, heading, items, copyright], { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      // ظهور القسم كله من أسفل مع overshoot بسيط
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true, // شغّل مرة واحدة (يمكنك إزالته لو حابب يعيد الأنيميشن)
        },
      });

      tl.from(root, { opacity: 0, y: 100, duration: 0.8 })
        .to(root, { y: -8, duration: 0.18, ease: "power2.out" })
        .to(root, { y: 0, duration: 0.22, ease: "power3.out" });

      // عنوان رئيسي
      if (heading) {
        tl.from(
          heading,
          { opacity: 0, y: 24, filter: "blur(6px)", duration: 0.7 },
          "-=0.3"
        );
      }

      // العناصر (الإيميل، السيرة، مجموعة السوشيال) مع stagger
      if (items.length) {
        tl.from(
          items,
          {
            opacity: 0,
            y: 22,
            filter: "blur(6px)",
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.15"
        );
      }

      // الكوبيرايت
      if (copyright) {
        tl.from(copyright, { opacity: 0, y: 12, duration: 0.45 }, "-=0.15");
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-card text-card-foreground py-20 px-4 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center gap-10 will-change-transform">
        <h3
          data-heading
          className="text-[2.25rem] leading-[1.3] font-bold text-text-primary"
          style={{ willChange: "transform, opacity, filter" }}
        >
          Thanks for stopping by, let&apos;s chat!
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-base text-text-secondary">
          <a
            data-stagger
            href="mailto:tingtingluo.ux@gmail.com"
            className="flex items-center gap-2.5 transition-colors hover:text-text-primary hover:underline will-change-transform"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>tingtingluo.ux@gmail.com</span>
          </a>

          <a
            data-stagger
            href="https://drive.google.com/file/d/1tcaYx7AKCvV2_ijayDLl0jxvXJcs-gx7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-colors hover:text-text-primary hover:underline will-change-transform"
          >
            <FileText className="w-5 h-5 flex-shrink-0" />
            <span>Resume</span>
          </a>

          <div data-stagger className="flex items-center gap-2.5 will-change-transform">
            <Users className="w-5 h-5 flex-shrink-0" />
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/tingting-luo-uiux/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-primary hover:underline"
              >
                Linkedin
              </a>
              <span className="select-none text-muted-foreground">|</span>
              <a
                href="https://www.instagram.com/afloater.art/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-primary hover:underline"
              >
                Instagram
              </a>
              <span className="select-none text-muted-foreground">|</span>
              <a
                href="https://www.youtube.com/@TingtingLuo-UX"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-text-primary hover:underline"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>

        <p data-copy className="text-sm text-text-secondary will-change-transform">
          ©All rights reserved - Tingting Luo 2025
        </p>
      </div>

      <style jsx>{`
        .will-change-transform {
          will-change: transform, opacity, filter;
        }
      `}</style>
    </footer>
  );
};

export default ContactFooter;
