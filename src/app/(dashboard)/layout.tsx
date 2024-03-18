import Navbar from "@/components/shared/Navbar";
import HomeView from "@/views/home";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomeView />
    </>
  );
};

export default MainLayout;