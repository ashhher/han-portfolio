import { Hero, AboutSection, SkillsSection } from "@/components";
import { MainLayout } from "@/layouts";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <SkillsSection />
    </MainLayout>
  );
};

export default HomePage;
