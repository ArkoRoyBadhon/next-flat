
const InputField = ({label}: {label:string}) => {
  return (
    <div className="relative border border-[#868686] py-1 px-1 w-full md:w-[193px] h-[55px] flex justify-start rounded-md">
      <label
        htmlFor=""
        className="absolute top-[-10px] left-2 text-[14px] bg-white px-1 text-gray-400"
      >
        {label}
      </label>
      <input
        type="text"
        className="focus:outline-none text-[16px] w-full px-2"
      />
    </div>
  );
};

export default InputField;
