import { About, Hero } from "@/components";
import { MainLayout } from "@/layouts";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  );
};

export default HomePage;
