import Navbar from "@/components/shared/Navbar";

const CreateAdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="h-screen w-screen mx-auto flex flex-col">
          {children}
        </div>
      </main>
    </>
  );
};


export default CreateAdLayout;
