import { usePasswordStore } from "../store";

export const usePasswordInclusions = () => {
  const options = usePasswordStore((state) => state.options);
  const toggleUppercase = usePasswordStore((state) => state.toggleUppercase);
  const toggleLowercase = usePasswordStore((state) => state.toggleLowercase);
  const toggleNumbers = usePasswordStore((state) => state.toggleNumbers);
  const toggleSymbols = usePasswordStore((state) => state.toggleSymbols);

  const checkboxes = [
    {
      id: "uppercase",
      label: "Include uppercase letters",
      checked: options.includeUppercase,
      toggleFunction: toggleUppercase,
    },
    {
      id: "lowercase",
      label: "Include lowercase letters",
      checked: options.includeLowercase,
      toggleFunction: toggleLowercase,
    },
    {
      id: "numbers",
      label: "Include numbers",
      checked: options.includeNumbers,
      toggleFunction: toggleNumbers,
    },
    {
      id: "symbols",
      label: "Include symbols",
      checked: options.includeSymbols,
      toggleFunction: toggleSymbols,
    },
  ];

  const selectedCount = checkboxes.filter(
    (checkbox) => checkbox.checked
  ).length;

  const handleToggle = (
    toggleFunction: () => void,
    isCurrentlyChecked: boolean
  ) => {
    if (!isCurrentlyChecked || selectedCount > 1) {
      toggleFunction();
    }
  };

  return { checkboxes, handleToggle };
};
