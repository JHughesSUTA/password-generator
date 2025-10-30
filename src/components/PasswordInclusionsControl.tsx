import { usePasswordInclusions } from "../hooks/usePasswordInclusions";

const PasswordInclusionsControl = () => {
  const { checkboxes, handleToggle } = usePasswordInclusions();

  return (
    <fieldset className="mt-8 border-0 p-0 m-0">
      <legend className="sr-only">
        Character types to include in password
      </legend>

      {checkboxes.map((checkbox, index) => {
        return (
          <div
            key={checkbox.id}
            className={`flex items-center ${
              index < checkboxes.length - 1 ? "mb-4" : ""
            }`}
          >
            <input
              type="checkbox"
              className="custom-checkbox mr-4 md:mr-6"
              id={checkbox.id}
              checked={checkbox.checked}
              onChange={() =>
                handleToggle(checkbox.toggleFunction, checkbox.checked)
              }
              aria-describedby="selection-status minimum-selection-rule"
              aria-required="true"
            />
            <label
              htmlFor={checkbox.id}
              className="text-gray-200 text-preset-4 capitalize md:text-preset-3 cursor-pointer"
            >
              {checkbox.label}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default PasswordInclusionsControl;
