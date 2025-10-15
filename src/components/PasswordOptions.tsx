const PasswordOptions = () => {
  return (
    <div>
      <div className="mb-4">
        <input type="checkbox" id="uppercase" className="mr-4" />
        <label
          htmlFor="uppercase"
          className="text-gray-200 text-preset-4 capitalize mb-4"
        >
          Include uppercase letters
        </label>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="lowercase" className="mr-4" />
        <label
          htmlFor="lowercase"
          className="text-gray-200 text-preset-4 capitalize mb-4"
        >
          Include lowercase letters
        </label>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="numbers" className="mr-4" />
        <label
          htmlFor="numbers"
          className="text-gray-200 text-preset-4 capitalize mb-4"
        >
          Include numbers
        </label>
      </div>
      <div className="">
        <input type="checkbox" id="symbols" className="mr-4" />
        <label
          htmlFor="symbols"
          className="text-gray-200 text-preset-4 capitalize mb-4"
        >
          Include symbols
        </label>
      </div>
    </div>
  );
};

export default PasswordOptions;
