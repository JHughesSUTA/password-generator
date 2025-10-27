import { usePasswordStore } from "../store";

const strengthAttributes = {
  1: { styles: "bg-red border-red", label: "too weak!" },
  2: { styles: "bg-orange border-orange", label: "weak" },
  3: { styles: "bg-yellow border-yellow", label: "medium" },
  4: { styles: "bg-green border-green", label: "strong" },
};

const PasswordStrengthDisplay = () => {
  const passwordStrength = usePasswordStore((state) => state.strength);
  const currentAttributes =
    strengthAttributes[passwordStrength as keyof typeof strengthAttributes];

  return (
    <div className="p-4 bg-gray-850 mt-8 flex justify-between items-center">
      <span className="uppercase text-preset-4 text-gray-600">strength</span>
      <div className="flex items-center">
        <span className="uppercase text-gray-200">
          {currentAttributes?.label}
        </span>
        {!passwordStrength ? (
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className={`h-[28px] w-[10px] border-[2px] inline-block border-gray-200`}
              ></span>
            ))}
          </div>
        ) : (
          <div className="flex ml-2 gap-1">
            {[1, 2, 3, 4].map((barIndex) => (
              <span
                key={barIndex}
                className={`h-[28px] w-[10px] border-[2px] inline-block transition-colors duration-200 ${
                  passwordStrength >= barIndex
                    ? currentAttributes.styles
                    : "border-gray-200"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordStrengthDisplay;
