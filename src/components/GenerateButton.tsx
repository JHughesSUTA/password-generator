import { usePasswordGenerator } from "../hooks/usePasswordGenerator";
import ArrowIcon from "./icons/ArrowIcon";

const GenerateButton = () => {
  const { generatePassword } = usePasswordGenerator();

  return (
    <button
      onClick={() => generatePassword()}
      className="group border-2 border-transparent transition bg-green w-full mt-8 py-[18px] text-gray-800 text-preset-4 uppercase font-bold cursor-pointer hover:text-green hover:bg-gray-800 hover:border-green md:text-preset-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
      type="button"
    >
      Generate
      <span className="inline-block ml-6" aria-hidden="true">
        <ArrowIcon />
      </span>
    </button>
  );
};

export default GenerateButton;
