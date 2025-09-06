import Image from "next/image";
import Link from "next/link";

const VSDesignProject = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-20 lg:py-32">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/g9myZ5LYkLrqoUvLuvjgiEYoqwQ-14.jpg"
          alt="Blurred background of an art gallery"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10 mx-auto w-full max-w-[1200px] px-4">
        {/* Content Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-8 text-foreground">
            <div>
              <h4 className="font-body text-sm font-medium uppercase tracking-[0.1em] text-text-secondary">
                Web Design | CMS Art Gallery
              </h4>
              <h2 className="mt-4 font-display text-4xl font-bold text-text-primary">
                VSDesign x Penn Museum Online Art Gallery
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-text-primary/90">
                A responsive online art gallery for the Penn Museum's exhibition. Led UX and Motion design while managing the CMS and atomic design system.
              </p>
            </div>

            {/* Details Section */}
            <div className="flex flex-col gap-8 pt-4 md:flex-row md:gap-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">Role</h3>
                <p className="mt-2 text-base text-text-primary">UX Design, Motion Design</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">Duration</h3>
                <p className="mt-2 text-base text-text-primary">Aug 2024 - Dec 2024</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-secondary">Team</h3>
                <div className="mt-2 space-y-1 text-base text-text-primary">
                  <p>Stakeholder + PM</p>
                  <p>UX Designer</p>
                  <p>Brand Designer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* GIF */}
          <div className="flex items-center justify-center lg:justify-end">
             <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6f846471-1b19-4396-a2f6-0cf57bc3aa2e-tingtingluo-work/assets/images/RiX8nP7CqPH5fXRbSA2G2MHFQ.gif"
              alt="Animated GIF of the VSDesign x Penn Museum online art gallery"
              width={512}
              height={512}
              className="w-full max-w-md rounded-2xl object-contain lg:max-w-full"
              unoptimized
            />
          </div>

        </div>

        {/* 'View more' Button */}
        <div className="mt-16 flex w-full justify-center">
          <Link 
            href="/vsdesign" 
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VSDesignProject;