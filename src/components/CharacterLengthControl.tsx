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
