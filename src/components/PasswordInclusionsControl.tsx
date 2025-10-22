import type { PasswordOptions } from "../types";

type PasswordInclusionsControlProps = {
  options: PasswordOptions;
  setOptions: (options: PasswordOptions) => void;
};

const PasswordInclusionsControl = ({
  options,
  setOptions,
}: PasswordInclusionsControlProps) => {
  return (
    <div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="uppercase"
          checked={options.includeUppercase}
          className="mr-4"
          onChange={() =>
            setOptions({
              ...options,
              includeUppercase: !options.includeUppercase,
            })
          }
        />
        <label
          htmlFor="uppercase"
          className="text-gray-200 text-preset-4 capitalize mb-4"
        >
          Include uppercase letters
        </label>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="lowercase"
          checked={options.includeLowercase}
          onChange={() =>
            setOptions({
              ...options,
              includeLowercase: !options.includeLowercase,
            })
          }
          className="mr-4"
        />
        <label
          htmlFor="lowercase"
          className="text-gray-200 text-preset-4 capitalize mb-4"
        >
          Include lowercase letters
        </label>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="numbers"
          checked={options.includeNumbers}
          onChange={() =>
            setOptions({ ...options, includeNumbers: !options.includeNumbers })
          }
          className="mr-4"
        />
        <label
          htmlFor="numbers"
          className="text-gray-200 text-preset-4 capitalize mb-4"
        >
          Include numbers
        </label>
      </div>
      <div className="">
        <input
          type="checkbox"
          id="symbols"
          checked={options.includeSymbols}
          onChange={() =>
            setOptions({ ...options, includeSymbols: !options.includeSymbols })
          }
          className="mr-4"
        />
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

export default PasswordInclusionsControl;
