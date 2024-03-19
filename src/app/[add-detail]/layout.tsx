import MainBody from "@/components/home/MainBody";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="h-screen w-screen mx-auto flex flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
