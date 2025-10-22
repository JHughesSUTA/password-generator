import { usePasswordGenerator } from "../hooks/usePasswordGenerator";
import ArrowIcon from "./icons/ArrowIcon";

const GenerateButton = () => {
  const { generatePassword } = usePasswordGenerator();

  return (
    <button
      onClick={() => generatePassword()}
      className="bg-green w-full mt-8 py-[18px] text-gray-800 text-preset-4 uppercase font-bold cursor-pointer"
    >
      Generate
      <span className="inline-block">
        <ArrowIcon />
      </span>
    </button>
  );
};

export default GenerateButton;
