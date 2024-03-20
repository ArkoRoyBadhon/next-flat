import DocumntIcon from "@/utils/detailPageIcon/documntIcon";

const ViewApplyCard = ({ hSize = 22, pSize = 14 }) => {
  return (
    <div className="flex gap-[11px] pt-[14px] justify-center ">
      <div className={`flex items-center gap-[12px] px-[20px] py-[16px] box-shadow custom-border flex-1  h-[81px]`}>
        <DocumntIcon />
        <div className="">
          <p
            className={`text-[${hSize}px] font-semibold leading-[136.364%] space-x-[0.22px] `}
          >
            2 174
          </p>
          <p
            className={`text-[${pSize}px] font-medium leading-5 -space-x-[0.1px] line-clamp-1`}
          >
            total Viewing
          </p>
        </div>
      </div>
      <div className={`flex items-center gap-[12px] px-[20px] py-[16px] box-shadow custom-border flex-1  h-[81px]`}>
        <DocumntIcon />
        <div className="">
          <p
            className={`text-[${hSize}px] font-semibold leading-[136.364%] space-x-[0.22px] `}
          >
            15
          </p>
          <p
            className={`text-[${pSize}px] font-medium leading-5 -space-x-[0.1px]`}
          >
            total Applies
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewApplyCard;
