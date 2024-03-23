import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
