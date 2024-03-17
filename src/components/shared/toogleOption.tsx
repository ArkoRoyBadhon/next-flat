'use client'
import SunIcon from "@/utils/icons/sunIcon";
import { useState } from "react"

const ToogleOption: React.FC = () => {
    const boxShadow = {
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px -1px 1px 0px rgba(0, 0, 0, 0.10) inset, 0px 2px 2px 0px #FFF inset"
    }

    const [isOn, setIsOn] = useState<boolean>(false)

    const handleToggle = () => {
        setIsOn(!isOn)
    }

    return (
        <div className="w-[52.93px] h-[29.62px] bg-[#E2E8F0] rounded-full relative p-[3px] " onClick={handleToggle}>
            <div className={`h-[24px] w-[24px] rounded-full bg-white  absolute ${isOn ? "right-[2px]" : "left-[2px]"} center duration-[0.3s] cursor-pointer custom-shadow custom-center`}>
                <SunIcon />
            </div>
        </div>
    );
};

export default ToogleOption;