import { usePasswordGenerator } from "../hooks/usePasswordGenerator";
import ArrowIcon from "./icons/ArrowIcon";

const GenerateButton = () => {
  const { generatePassword } = usePasswordGenerator();

  return (
    <button
      onClick={() => generatePassword()}
      className="group border-2 border-transparent transition bg-green w-full mt-8 py-[18px] text-gray-800 text-preset-4 uppercase font-bold cursor-pointer hover:text-green hover:bg-gray-800 hover:border-green"
    >
      Generate
      <span className="inline-block ml-6">
        <ArrowIcon />
      </span>
    </button>
  );
};

export default GenerateButton;
