import { About, Hero, Skills } from "@/components";
import { MainLayout } from "@/layouts";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
    </MainLayout>
  );
};

export default HomePage;
