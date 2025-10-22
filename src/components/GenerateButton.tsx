import ArrowIcon from "./icons/ArrowIcon";

type GenerateButtonProps = {
  generatePassword: () => void;
};

const GenerateButton = ({ generatePassword }: GenerateButtonProps) => {
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
