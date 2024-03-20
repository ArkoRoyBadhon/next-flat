import StarIcon from "@/utils/icons/StarIcon";
import QuestionIcon from "@/utils/icons/questionIcon";
import { RatingData } from "@/utils/mock";

const RatingCom = () => {
  return (
    <div className="pt-[26px] gap-[10px] w-full flex flex-col md:flex-row pb-[20px]">
      <div className="md:w-[50%]">
        <div className="flex gap-1 items-center">
          <h5 className="text-[14px] font-semibold">
            Overall Apartment Rating (23)
          </h5>{" "}
          <QuestionIcon />
        </div>
        <div className="flex">
          <div className="flex gap-2 items-center pt-2">
            <div className="flex">
              <StarIcon width={18} height={18} />
              <StarIcon width={18} height={18} />
              <StarIcon width={18} height={18} />
              <StarIcon width={18} height={18} />
              <StarIcon width={18} height={18} />
            </div>
            <p className="font-medium">
              <span className="font-bold">5</span> Stars
            </p>
          </div>
        </div>

        <p className="w-full text-[14px] line-clamp-2 pt-2">
          The Number in parenthesis is the number of customers who have rated
        </p>
      </div>
      <div className="md:w-[50%]">
        {RatingData &&
          RatingData.map((item, i) => {
            return (
              <div key={i} className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start">
                  <p className="text-[12px] font-semibold">{item?.title}</p>
                  <QuestionIcon />
                </div>
                <div className="flex">
                  {Math.floor(item?.rating) >= 0 &&
                    Math.floor(item?.rating) < 2 && (
                      <div className="flex">
                        <StarIcon width={12} height={12} />
                      </div>
                    )}
                  {Math.floor(item?.rating) >= 2 &&
                    Math.floor(item?.rating) < 3 && (
                      <div className="flex">
                        <StarIcon width={12} height={12} />
                        <StarIcon width={12} height={12} />
                      </div>
                    )}
                  {Math.floor(item?.rating) >= 3 &&
                    Math.floor(item?.rating) < 4 && (
                      <div className="flex">
                        <StarIcon width={12} height={12} />
                        <StarIcon width={12} height={12} />
                        <StarIcon width={12} height={12} />
                      </div>
                    )}
                  {Math.floor(item?.rating) >= 4 &&
                    Math.floor(item?.rating) < 5 && (
                      <div className="flex">
                        <StarIcon width={12} height={12} />
                        <StarIcon width={12} height={12} />
                        <StarIcon width={12} height={12} />
                        <StarIcon width={12} height={12} />
                      </div>
                    )}
                  {Math.floor(item?.rating) == 5 && (
                    <div className="flex">
                      <StarIcon width={12} height={12} />
                      <StarIcon width={12} height={12} />
                      <StarIcon width={12} height={12} />
                      <StarIcon width={12} height={12} />
                      <StarIcon width={12} height={12} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RatingCom;
