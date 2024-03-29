import { Header, GridBackground, BackToTop } from "@/components";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <GridBackground />
      <div className="container mx-auto flex-1 lg:px-28">{children}</div>
      <BackToTop />
    </div>
  );
};

export default MainLayout;
