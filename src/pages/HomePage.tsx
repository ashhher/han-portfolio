import {
  Hero,
  AboutSection,
  SkillsSection,
  ContactSection,
} from "@/components";
import { MainLayout } from "@/layouts";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </MainLayout>
  );
};

export default HomePage;
