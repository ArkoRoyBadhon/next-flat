import BasicInformation from "@/components/create-ad/BasicInformation";
import Localization from "@/components/create-ad/Localization";
import React from "react";

const CreateAddPage = () => {
  return (
    <div className="custom-container">
      <h2 className="text-[32px] font-medium leading-normal  text-center">
        Create a new ads
      </h2>
      <p className="text-center text-[16px] font-normal leading-normal">
        Welcome to our form where you add as much information as need about your
        property
      </p>
      <div className="flex gap-[58px] pt-[52px] items-center">
        <div className="relative border py-1 px-1 w-[368px] h-[55px] flex justify-start">
          <label
            htmlFor=""
            className="absolute top-[-10px] left-2 text-[14px] bg-white px-1 text-gray-400"
          >
            Email Address
          </label>
          <input
            type="text"
            className="focus:outline-none text-[16px] w-full px-2"
          />
        </div>
        <div className="relative">
          <label
            htmlFor=""
            className="absolute top-[-20px] text-[14px]"
          >
            Phone Number
          </label>
          <div className="border py-1 px-1 w-[368px] h-[55px] flex justify-start">
            <input
              type="text"
              placeholder="Please enter your phone number"
              className="focus:outline-none text-[16px] w-full px-2"
            />
          </div>
        </div>
        <p className="text-[16px] font-normal line-clamp-1">
          Please enter your email address and phone number to not lose your
          progress
        </p>
      </div>
      <Localization />
      <BasicInformation />
    </div>
  );
};

export default CreateAddPage;
