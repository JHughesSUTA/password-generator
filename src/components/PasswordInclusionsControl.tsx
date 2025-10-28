import { usePasswordStore } from "../store";

const PasswordInclusionsControl = () => {
  const options = usePasswordStore((state) => state.options);
  const toggleUppercase = usePasswordStore((state) => state.toggleUppercase);
  const toggleLowercase = usePasswordStore((state) => state.toggleLowercase);
  const toggleNumbers = usePasswordStore((state) => state.toggleNumbers);
  const toggleSymbols = usePasswordStore((state) => state.toggleSymbols);

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="uppercase"
          checked={options.includeUppercase}
          className="custom-checkbox mr-4"
          onChange={toggleUppercase}
        />
        <label
          htmlFor="uppercase"
          className="text-gray-200 text-preset-4 capitalize md:text-preset-3"
        >
          Include uppercase letters
        </label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="lowercase"
          checked={options.includeLowercase}
          onChange={toggleLowercase}
          className="custom-checkbox mr-4"
        />
        <label
          htmlFor="lowercase"
          className="text-gray-200 text-preset-4 capitalize md:text-preset-3"
        >
          Include lowercase letters
        </label>
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="numbers"
          checked={options.includeNumbers}
          onChange={toggleNumbers}
          className="custom-checkbox mr-4"
        />
        <label
          htmlFor="numbers"
          className="text-gray-200 text-preset-4 capitalize md:text-preset-3"
        >
          Include numbers
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="symbols"
          checked={options.includeSymbols}
          onChange={toggleSymbols}
          className="custom-checkbox mr-4"
        />
        <label
          htmlFor="symbols"
          className="text-gray-200 text-preset-4 capitalize md:text-preset-3"
        >
          Include symbols
        </label>
      </div>
    </div>
  );
};

export default PasswordInclusionsControl;
