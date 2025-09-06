import React from 'react';
import Image from 'next/image';

const FloatMindProject = () => {
  return (
    <section id="float-mind" className="relative overflow-hidden py-24 sm:py-32 bg-[#101010]">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/ayBfuWLteiSY8r8PHn0JF30JM-2.png"
          alt="Abstract background with dark blue and purple hues"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 max-w-xl">
            <h4 className="text-base font-normal text-text-primary tracking-wide">
              AR+VR Design | XR
            </h4>
            <div className="flex flex-col gap-1">
              <h2 className="text-4xl md:text-[36px] font-bold text-text-primary leading-tight">
                Float Mind
              </h2>
              <h3 className="text-[24px] font-normal text-text-secondary leading-normal">
                (The Global XR Challenge Finalist)
              </h3>
            </div>
            <p className="text-lg text-text-secondary leading-relaxed">
              An AI-powered, gamified meditation tool using AR/VR for effective emotional processing in just 10 minutes a day.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-x-12 gap-y-8">
              <div>
                <h3 className="text-base font-medium text-text-secondary">Role</h3>
                <p className="mt-2 text-base text-text-primary">UX Design, 3D Design</p>
                <div className="mt-4 border-b border-border/50 w-full"></div>
              </div>
              <div>
                <h3 className="text-base font-medium text-text-secondary">Duration</h3>
                <p className="mt-2 text-base text-text-primary">Dec 2024 - Jan 2025</p>
                <div className="mt-4 border-b border-border/50 w-full"></div>
              </div>
              <div>
                <h3 className="text-base font-medium text-text-secondary">Team</h3>
                <div className="mt-2 text-base text-text-primary space-y-1">
                  <p>UX + 3D Designer</p>
                  <p>AI + XR Engineer</p>
                </div>
                <div className="mt-4 border-b border-border/50 w-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Image/Video Grid */}
          <div className="relative aspect-square max-w-xl mx-auto lg:max-w-none">
            <div className="absolute top-0 left-0 w-[57.06%] h-full rounded-xl overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/PHywONEyWA5H7IvQwgOExyb84fM-3.png"
                alt="AR meditation interface with fish swimming"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 w-[40%] h-[49.37%] rounded-xl overflow-hidden">
              <video
                src="https://framerusercontent.com/assets/uJXhjAxuKGtaTwOztrC8LoEFiVU.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[40%] h-[49.37%] rounded-xl overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/dys64xPQuXaUxOvsZqlWcJviQ-5.png"
                alt="A glowing portal in a digital landscape"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="./floatmind"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full text-base transition-colors hover:bg-white/90"
          >
            View case study
          </a>
        </div>
      </div>
    </section>
  );
};

export default FloatMindProject;