"use client";
import MainBody from "@/components/home/MainBody";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { useMyContext } from "@/provider/MyContextProvider";

const HomeView = () => {
  const { menuOpen } = useMyContext();
  return (
    <main>
      <div className="h-screen w-screen mx-auto flex flex-col">
        <Navbar />
        <div className="flex gap-1 w-full h-full relative pl-[64px] md:pl-0">
          <Sidebar />
          <MainBody />
        </div>
      </div>
    </main>
  );
};

export default HomeView;
