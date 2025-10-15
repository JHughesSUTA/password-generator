const CharacterLengthControl = () => {
  return (
    <div>
      <div className="flex justify-between">
        <label className="text-preset-4 text-gray-200" htmlFor="">
          Character Length
        </label>
        <span className="text-preset-2 text-green">10</span>
      </div>
      <input
        id="character-length-slider"
        name="character-length"
        type="range"
        role="slider"
        autoComplete="off"
        min="1"
        max="20"
        step="1"
      />
    </div>
  );
};

export default CharacterLengthControl;
