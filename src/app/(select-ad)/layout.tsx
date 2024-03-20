import Navbar from "@/components/shared/Navbar";

const SelectAdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="w-screen mx-auto flex flex-col">
          {children}
        </div>
      </main>
    </>
  );
};

export default SelectAdLayout;
