import { flatData, slidesImg } from "@/utils/mock";
import FilterOptions from "../shared/FilterOptions";
import SmallCardSlider from "../card-slider/SmallCardSlider";

const MiddleSideSelect = () => {
  return (
    <>
      <FilterOptions />
      <div className="flex flex-col gap-[6px]">
        {flatData &&
          flatData.map((item, index) => (
            <SmallCardSlider index={index} item={item} slides={slidesImg} />
          ))}
      </div>
    </>
  );
};

export default MiddleSideSelect;
