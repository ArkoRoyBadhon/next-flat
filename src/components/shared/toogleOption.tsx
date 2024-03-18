'use client'
import SunIcon from "@/utils/icons/sunIcon";
import { useState } from "react"

const ToogleOption: React.FC = () => {
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