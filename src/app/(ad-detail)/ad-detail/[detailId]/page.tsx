import LeftSide from "@/components/detail/LeftSide";
import RightSide from "@/components/detail/RightSide";

const AddDetail = ({ params }: { params: { id: string } }) => {
  const slides: string[] = [
    "/images/pexels-andrei-i-17867773.jpg",
    "/images/pexels-ibrahgraphy-deer.jpg",
    "/images/pexels-magda-ehlers-5958376.jpg",
  ];

  return (
    <div className="flex flex-col xl:flex-row w-screen">
      {/* left side  */}
      <LeftSide />
      {/* right side  */}
      <RightSide />
    </div>
  );
};

export default AddDetail;
