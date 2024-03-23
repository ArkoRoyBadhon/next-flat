import EmailIcon from "@/utils/icons/emailIcon";
import FbIcon from "@/utils/icons/fbIcon";
import GoogleIcon from "@/utils/icons/googleIcon";
import LinkedInIcon from "@/utils/icons/linkedIn";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className=" bg-blue-400">
      <div className="px-[144px] py-[96px] flex flex-col lg:flex-row-reverse justify-between items-center">
        <div className="bg-white w-[350px] md:w-[528px] flex flex-col rounded-[24px] py-[40px] px-[20px] md:px-[72px]">
          <h2 className="text-center w-full leading-[120%] font-bold text-[40px] ">
            Signup
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
            <div className="flex items-center mt-[16px] py-[6px]">
              <input type="checkbox" className="m-[9px]" />
              <p className="text-[16px] leading-[24px] font-normal">
                I'm agree with the{" "}
                <span className="leading-[24px] capitalize text-[16px] font-normal text-[#0049FC]">
                  Terms & Conditions
                </span>
              </p>
            </div>

            <button className="mt-[24px] w-full text-[18px] leading-[28px] capitalize rounded-[8px] flex justify-center items-center bg-[#0049FC] text-white py-[10px] font-semibold">
              Signup
            </button>

            <div className="mt-[32px] flex gap-[12px] justify-center">
              <p className="text-[16px] leading-[24px] font-normal">
                Already have account?
              </p>
              <Link
                href="/login"
                className="text-[16px] leading-[24px] capitalize font-semibold text-[#0049FC]"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className="w-[350px] md:w-[624.275px] h-[655.61px] pt-[40px] lg:pt-0">
          <Image src="/images/man.png" alt="" height={655.61} width={623.275} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
