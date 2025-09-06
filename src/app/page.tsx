import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import SelectedWorks from "@/components/sections/selected-works";
import FloatMindProject from "@/components/sections/float-mind-project";
import StoryvilleProject from "@/components/sections/storyville-project";
import LivingProject from "@/components/sections/living-project";
import MemoverseProject from "@/components/sections/memoverse-project";
import GauriHomeProject from "@/components/sections/gauri-home-project";
import VSDesignProject from "@/components/sections/vsdesign-project";
import ContactFooter from "@/components/sections/contact-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        <HeroSection />
        
        <SelectedWorks />
        
        <div className="space-y-0">
          <FloatMindProject />
          <StoryvilleProject />
          <div className="px-4 lg:px-8">
            <LivingProject />
          </div>
          <MemoverseProject />
          <GauriHomeProject />
          <VSDesignProject />
        </div>
        
        <ContactFooter />
      </div>
    </main>
  );
}