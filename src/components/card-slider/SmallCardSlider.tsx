import EyeIcon from "@/utils/icons/eyeIcon";
import Slider from "../shared/Slider";
import ShareIcon from "@/utils/icons/shareIcon";
import WishIcon from "@/utils/icons/wishIcon";
import EyeCloseIcon from "@/utils/icons/eyeCloseIcon";
import Link from "next/link";
import FileIcon from "@/utils/icons/fileIcon";
import ArrowdownIcon from "@/utils/icons/arrowdownIcon";

const SmallCardSlider = ({index=1, item, slides}:{index?: string | number;
    item: any;
    slides: string[]}) => {
    return (
        <div
                key={index}
                className="w-[100%] h-fit md:h-[200px] lg:h-[195px] flex-shrink-0 bg-[#D9D9D9] p-2 rounded-md flex flex-col md:flex-row gap-[7px]"
              >
                <div className="lg:w-[60%] relative custom-transition h-full">
                  <div className="absolute flex gap-[19px] top-[8.81px] left-[6.81px] z-10">
                    <div className="flex gap-[5px] text-white bg-[#0000007F] w-[56px] h-[30px] rounded-[5px] custom-center">
                      <EyeIcon />
                      <p className="font-black leading-[200%] text-[10px]">
                        65
                      </p>
                    </div>
                    <div className="flex gap-[5px] text-white bg-[#0000007F] w-[56px] h-[30px] rounded-[5px] custom-center">
                      <p className="font-black leading-[200%] text-[10px]">
                        1995
                      </p>
                    </div>
                  </div>
                  <div className="h-full">
                    <Slider slides={slides} heightProp={50} />
                  </div>
                </div>
                <div className="w-full md:w-[50%]">
                  <div className="w-full flex justify-between">
                    <div className="">
                      <h4 className="text-[20px] font-semibold">
                        {item?.title?.slice(0, 5)}
                      </h4>
                    </div>
                    <div className="flex gap-[9.64px]">
                      <div className="w-[31.364px] h-[32.3px] custom-center bg-white rounded-full">
                        <ShareIcon />{" "}
                      </div>
                      <div className="w-[31.364px] h-[32.3px] custom-center bg-white rounded-full">
                        <WishIcon />{" "}
                      </div>
                      <div className="w-[31.364px] h-[32.3px] custom-center bg-white rounded-full">
                        <EyeCloseIcon />{" "}
                      </div>
                    </div>
                  </div>
                  <p className="text-[16px] font-light italic">
                    {item?.location}
                  </p>

                  <div className="flex justify-between items-start pt-[16.91px] w-full">
                    <div className="custom-card-info flex flex-col gap-[5.91] text-[14px]">
                      <p className="">{item?.room} Room</p>
                      <p className="">{item?.bedRoom} Bedroom</p>
                      <p className="">{item?.room} Room</p>
                    </div>
                    <div className="h-[52px] w-[120px] text-[20px] font-bold text-center">
                      {item?.price} €
                    </div>
                  </div>

                  <div className="flex gap-[3.36px] pt-[0px] pb-[12px]">
                    <Link
                      href="/"
                      className="flex text-[12px] font-light items-center gap-[5.04px]"
                    >
                      <FileIcon />
                      <span className="w-[44px]">Link 1</span>
                    </Link>

                    <Link
                      href="ad-detail/id"
                      className="w-[93px] h-[30px] bg-white rounded-lg text-[12px] font-normal custom-center gap-[10px]"
                    >
                      apply
                      <div className="transfrom -rotate-90">
                        <ArrowdownIcon />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
    );
};

export default SmallCardSlider;