import CloseIcon from "@/utils/icons/closeIcon";
import FlagIcon from "@/utils/icons/flagIcon";
import MoveIcon from "@/utils/icons/moveIcon";
import ShareIcon from "@/utils/icons/shareIcon";
import WishIcon from "@/utils/icons/wishIcon";
import React from "react";

const FlatHeader = () => {
  return (
    <div className="flex justify-between">
      <p className="">Flat</p>
      <div className="flex gap-[15.64px]">
        <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
          <FlagIcon />
        </button>
        <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
          <MoveIcon />
        </button>
        <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
          <ShareIcon />
        </button>
        <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
          <WishIcon />
        </button>
        <button className="h-[32px] w-[32px] rounded-full bg-[#E2E8F0] custom-center">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default FlatHeader;
