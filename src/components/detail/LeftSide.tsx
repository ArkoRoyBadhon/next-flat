import Slider from "../shared/Slider";

const LeftSide = () => {
    const slides: string[] = [
        "/images/pexels-andrei-i-17867773.jpg",
        "/images/pexels-ibrahgraphy-deer.jpg",
        "/images/pexels-magda-ehlers-5958376.jpg",
      ];

    return (
        <div className="w-[617px] h-full">
            <Slider slides={slides} />
        </div>
    );
};

export default LeftSide;