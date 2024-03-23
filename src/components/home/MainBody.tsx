"use client";
import { useMyContext } from "@/provider/MyContextProvider";
import { flatData, slidesImg } from "@/utils/mock";
import SliderCard from "../card-slider";
import FilterOptions from "../shared/FilterOptions";

const MainBody = () => {
  const { menuOpen } = useMyContext();
  

  return (
    <div className=" flex w-screen flex-col lg:flex-row overflow-hidden gap-[16px] lg:pr-[23.44px] pt-[10px] lg:pt-[0px]">
      <div
        className={`md:w-[97%] lg:flex-1 h-[250px] lg:h-full  overflow-hidden flex-shrink-0 custom-transition `}
      >
        <iframe
          className="h-full w-full"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.173876283906!2d-122.08374978474199!3d37.422476979834715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc93cf893933%3A0x4b192a2115e131e9!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1615794627853!5m2!1sen!2sus"
          // allowfullscreen
        ></iframe>
      </div>
      <div className="h-full w-[100%] lg:w-[571px]">
        <FilterOptions />
        <div className="h-full md:h-[calc(100vh-33vh)] lg:h-[calc(100vh-118px)] flex flex-col gap-[10px] lg:gap-[8px] overflow-y-scroll overflow-x-hidden px-2 lg:px-0">
          {flatData &&
            flatData.map((item, index) => (
              <SliderCard index={index} item={item} slides={slidesImg} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainBody;
