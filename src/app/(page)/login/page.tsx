import EmailIcon from "@/utils/icons/emailIcon";
import FbIcon from "@/utils/icons/fbIcon";
import GoogleIcon from "@/utils/icons/googleIcon";
import LinkedInIcon from "@/utils/icons/linkedIn";
import PasswordIcon from "@/utils/icons/passwordIcon";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className=" bg-blue-400">
      <div className="px-[144px] py-[96px] flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="bg-white w-[350px] md:w-[528px] flex flex-col rounded-[24px] py-[40px] px-[20px] lg:px-[72px]">
          <h2 className="text-center w-full leading-[120%] font-bold text-[40px] ">
            Login
          </h2>
          <div className="flex w-full justify-center gap-[8px] pt-[32px]">
            <button className="w-[48px] h-[48px] flex justify-center items-center rounded-[8px] bg-[#FAFAFA]">
              <LinkedInIcon />
            </button>
            <button className="w-[48px] h-[48px] flex justify-center items-center rounded-[8px] bg-[#FAFAFA]">
              <FbIcon />
            </button>
            <button className="w-[48px] h-[48px] flex justify-center items-center rounded-[8px] bg-[#FAFAFA]">
              <GoogleIcon />
            </button>
          </div>
          <p className="text-[14px] leading-[22px] text-center font-normal pt-[32px]">
            or
          </p>
          <form className="mt-[12px]" action="">
            <div className="flex gap-[14px] border border-[#1C1C1E7A] px-[8px] pt-[13px] pb-[11px] rounded-[8px]">
              <div className="p-[6px]">
                <EmailIcon />
              </div>
              <input
                className="w-full focus:outline-none"
                type="text"
                placeholder="email address"
              />
            </div>
            <div className="flex gap-[14px] border border-[#1C1C1E7A] px-[8px] pt-[13px] pb-[11px] rounded-[8px] mt-[16px]">
              <div className="p-[6px]">
                <PasswordIcon />
              </div>
              <input
                className="w-full focus:outline-none"
                type="text"
                placeholder="email address"
              />
            </div>
            <div className="flex mt-[16px] py-[6px] justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" className="m-[9px]" />
                <p className="text-[16px] leading-[24px] font-normal">
                  Remember Me
                </p>
              </div>
              <div className="leading-[28px] capitalize text-[18px] font-semibold text-[#0049FC]">
                Forget Password?
              </div>
            </div>

            <button className="mt-[24px] w-full text-[18px] leading-[28px] capitalize font-semibold rounded-[8px] flex justify-center items-center bg-[#0049FC] text-white py-[10px] ">
              Login
            </button>

            <div className="mt-[32px] flex gap-[12px] justify-center">
                <p className="text-[16px] leading-[24px] font-normal">New Job Seeker?</p>
                <Link href="/signup" className="text-[16px] leading-[24px] capitalize font-semibold text-[#0049FC]">Signup</Link>
            </div>
          </form>
        </div>
        <div className="w-[350px] md:w-[624.275px] h-[655.61px] pt-[40px] lg:pt-0">
          <Image
            src="/images/woman.png"
            alt=""
            height={655.61}
            width={623.275}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
