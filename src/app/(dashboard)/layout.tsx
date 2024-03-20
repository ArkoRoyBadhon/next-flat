import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="section-height w-screen mx-auto flex flex-col">
          <div className="flex gap-1 w-full h-[88vh] md:h-[93vh] lg:h-full relative md:pl-0">
            <div
              className="w-[64px] lg:hidden"
              style={{ visibility: "hidden" }}
            ></div>
            <Sidebar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
