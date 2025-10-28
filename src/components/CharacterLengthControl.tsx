import type { ChangeEvent } from "react";
import { usePasswordStore } from "../store";

const CharacterLengthControl = () => {
  const options = usePasswordStore((state) => state.options);
  const setLength = usePasswordStore((state) => state.setLength);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label
          className="text-preset-4 text-gray-200 md:text-preset-3"
          htmlFor=""
        >
          Character Length
        </label>
        <span className="text-preset-2 text-green md:text-preset-1">{options.length}</span>
      </div>
      <input
        id="character-length-slider"
        className="w-full h-2 bg-gray-850 appearance-none cursor-pointer slider focus:outline-none"
        name="character-length"
        type="range"
        role="slider"
        autoComplete="off"
        min="4"
        max="20"
        step="1"
        value={options.length}
        onChange={handleRangeChange}
        style={{
          background: `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${
            ((options.length - 4) / 16) * 100
          }%, #18171f ${((options.length - 4) / 16) * 100}%, #18171f 100%)`,
        }}
      />
    </div>
  );
};

export default CharacterLengthControl;
