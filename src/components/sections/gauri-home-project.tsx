import Image from "next/image";
import Link from "next/link";

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

const GauriHomeProject = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/wfgAwl14AWAgGFhgE64IMIUBoKA-12.jpg"
          alt="Abstract textured brown background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-20 md:py-28">
        <div className="flex flex-col items-center gap-16">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="flex flex-col gap-10 lg:w-1/2">
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-medium uppercase tracking-[0.8px] text-white">
                  Web Design | E-commerce
                </h4>
                <h2 className="text-[40px] font-bold text-white leading-tight">
                  Gauri Home
                </h2>
                <p className="text-lg text-white/90 leading-relaxed max-w-md">
                  A responsive e-commerce website. Achieved a 95% task success
                  rate and saving 16% in project time by optimizing code effort
                  with engineers.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <InfoBlock title="Role" details={["UX Design Intern"]} />
                <InfoBlock
                  title="Duration"
                  details={["Nov 2023 - Jun 2024"]}
                />
                <InfoBlock
                  title="Team"
                  details={[
                    "Stakeholder + PM",
                    "UX Researcher",
                    "Software Engineer",
                  ]}
                />
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/4r4Yjcx141kflQKumMzKHujtGj8-13.png"
                width={596}
                height={402}
                alt="GAURI brand visual with abstract orange, cream, and green shapes over a tan background with the word GAURI in white."
                className="w-full max-w-lg h-auto"
              />
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
    </section>
  );
};

export default GauriHomeProject;