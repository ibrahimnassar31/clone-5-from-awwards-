import Image from 'next/image';

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
  return (
    <section
      id="memoverse-project"
      className="relative bg-background text-foreground overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/s9M7cluoWKoIuGw7e0tQCnXA50-10.png"
          alt="Outdoor scene with ruins, background for Memoverse project"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
          
          <div className="flex flex-col">
            <h4 className="text-base font-medium text-white mb-4">
              Web AR Design | XR
            </h4>
            <div className="mb-6">
              <h2 className="text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
                Memoverse
              </h2>
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

          <div className="w-full">
            <div className="rounded-3xl overflow-hidden border border-border">
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
    </section>
  );
};

export default MemoverseProject;