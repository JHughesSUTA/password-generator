import type { ChangeEvent } from "react";
import type { PasswordOptions } from "../types";

type CharacterLengthControlProps = {
  options: PasswordOptions;
  setOptions: (options: PasswordOptions) => void;
};

const CharacterLengthControl = ({
  options,
  setOptions,
}: CharacterLengthControlProps) => {
  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOptions({ ...options, length: Number(e.target.value) });
  };

  return (
    <div>
      <div className="flex justify-between">
        <label className="text-preset-4 text-gray-200" htmlFor="">
          Character Length
        </label>
        <span className="text-preset-2 text-green">{options.length}</span>
      </div>
      <input
        id="character-length-slider"
        name="character-length"
        type="range"
        role="slider"
        autoComplete="off"
        min="4"
        max="20"
        step="1"
        value={options.length}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default CharacterLengthControl;
