import EyeCloseIcon from "@/utils/icons/eyeCloseIcon";
import FileIcon from "@/utils/icons/fileIcon";
import ShareIcon from "@/utils/icons/shareIcon";
import WishIcon from "@/utils/icons/wishIcon";
import { flatData } from "@/utils/mock";
import Image from "next/image";
import Link from "next/link";

const MainBody = () => {
  return (
    <section>
      <div className="flex h-[90vh] w-full gap-[15px]  pr-[23.44px]">
        <div className="h-[80vh] w-[549px] overflow-hidden flex-shrink-0">
          <Image src="/images/Map.png" alt="" height={872} width={539} />
        </div>
        <div className="flex flex-col gap-[8px] flex-grow">
          {flatData &&
            flatData?.map((item) => {
              return (
                <div className="w-[571.167px] h-[195px] flex-shrink-0 bg-[#D9D9D9] p-2 rounded-md flex gap-[7px]">
                  <div className="w-[50%]">
                    <Image
                      src={item?.img}
                      alt=""
                      height={570}
                      width={252.874}
                    />
                  </div>
                  <div className="w-[60%]">
                    <div className="w-full flex justify-between">
                      <div className="">
                        <h4 className="text-[24px] font-semibold">
                          {item?.title}
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
                      <div className="custom-card-info flex flex-col gap-[5.91]">
                        <p className="">{item?.room} Room</p>
                        <p className="">{item?.bedRoom} Bedroom</p>
                        <p className="">{item?.room} Room</p>
                      </div>
                      <div className="h-[52px] w-[157px] text-[24px] font-bold text-center">
                        {item?.price} €
                      </div>
                    </div>

                    <div className="flex gap-[3.36px] pt-[10.66px] pb-[12px]">
                      <Link href="/" className="flex text-[12px] font-light items-center gap-[5.04px]">
                        <FileIcon />
                        <span className="w-[44px]">Link 1</span>
                      </Link>
                      <Link href="/" className="flex text-[12px] font-light items-center gap-[5.04px]">
                        <FileIcon />
                        <span className="w-[44px]">Link 1</span>
                      </Link>
                      <Link href="/" className="flex text-[12px] font-light items-center gap-[5.04px]">
                        <FileIcon />
                        <span className="w-[44px]">Link 1</span>
                      </Link>

                      <button className="w-[93px] h-[40px] bg-white rounded-lg">
                        apply
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MainBody;
