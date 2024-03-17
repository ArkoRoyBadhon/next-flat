import MainBody from "@/components/home/MainBody";
import Sidebar from "@/components/shared/Sidebar";

const HomeView = () => {
  return (
    <main>
      <div className="flex container">
        <Sidebar />
        <MainBody />
      </div>
    </main>
  );
};

export default HomeView;
