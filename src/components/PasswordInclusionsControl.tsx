import { usePasswordInclusions } from "../hooks/usePasswordInclusions";

const PasswordInclusionsControl = () => {
  const { checkboxes, handleToggle } = usePasswordInclusions();

  return (
    <div className="mt-8">
      {checkboxes.map((checkbox) => {
        return (
          <div key={checkbox.id} className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="custom-checkbox mr-4 md:mr-6"
              id={checkbox.id}
              checked={checkbox.checked}
              onChange={() =>
                handleToggle(checkbox.toggleFunction, checkbox.checked)
              }
            />
            <label
              htmlFor={checkbox.id}
              className="text-gray-200 text-preset-4 capitalize md:text-preset-3"
            >
              {checkbox.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default PasswordInclusionsControl;
