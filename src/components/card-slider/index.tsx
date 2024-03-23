import ArrowdownIcon from "@/utils/icons/arrowdownIcon";
import FileIcon from "@/utils/icons/fileIcon";
import Link from "next/link";
import Slider from "../shared/Slider";
import EyeIcon from "@/utils/icons/eyeIcon";
import ShareIcon from "@/utils/icons/shareIcon";
import WishIcon from "@/utils/icons/wishIcon";
import EyeCloseIcon from "@/utils/icons/eyeCloseIcon";


const SliderCard= ({index=1, item, slides}:{index?: string | number;
    item: any;
    slides: string[]}) => {
    return (
        <div
                key={index}
                className="w-[100%] lg:w-[571.167px] h-fit md:h-[195px] lg:h-fit flex-shrink-0 bg-[#D9D9D9] p-2 rounded-md flex flex-col md:flex-row gap-[7px]"
              >
                <div className="lg:w-[50%] relative custom-transition h-full">
                  <div className="absolute flex gap-[19px] top-[8.81px] left-[6.81px]">
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
                <div className="w-full md:w-[60%]">
                  <div className="w-full flex justify-between">
                    <div className="">
                      <Link href="/select-ad" className="text-[24px] font-semibold">
                        {item?.title}
                      </Link>
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
                    <div className="custom-card-info flex flex-col gap-[5.91]">
                      <p className="">{item?.room} Room</p>
                      <p className="">{item?.bedRoom} Bedroom</p>
                      <p className="">{item?.room} Room</p>
                    </div>
                    <div className="h-[52px] w-[157px] text-[24px] font-bold text-center">
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
                      href="/"
                      className="flex text-[12px] font-light items-center gap-[5.04px]"
                    >
                      <FileIcon />
                      <span className="w-[44px]">Link 1</span>
                    </Link>
                    <Link
                      href="/"
                      className="flex text-[12px] font-light items-center gap-[5.04px]"
                    >
                      <FileIcon />
                      <span className="w-[44px]">Link 1</span>
                    </Link>

                    <Link
                      href="ad-detail/id"
                      className="w-[93px] h-[40px] bg-white rounded-lg text-[14px] font-normal custom-center gap-[5px] md:gap-[10px]"
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

export default SliderCard;