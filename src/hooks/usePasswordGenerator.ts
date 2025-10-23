import { shuffle, getRandom, calculatePasswordStrength } from "../utilities";
import { usePasswordStore } from "../store";
import { useCallback } from "react";

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export const usePasswordGenerator = () => {
  const options = usePasswordStore((state) => state.options);
  const setPassword = usePasswordStore((state) => state.setPassword);
  const setStrength = usePasswordStore((state) => state.setStrength);

  const generatePassword = useCallback(() => {
    let passwordBuild = "";
    const requiredChars = [];
    let allSelectedChars = "";

    if (options.includeLowercase) {
      requiredChars.push(getRandom(lowerCaseChars));
      allSelectedChars += lowerCaseChars;
    }
    if (options.includeUppercase) {
      requiredChars.push(getRandom(upperCaseChars));
      allSelectedChars += upperCaseChars;
    }
    if (options.includeNumbers) {
      requiredChars.push(getRandom(numberChars));
      allSelectedChars += numberChars;
    }
    if (options.includeSymbols) {
      requiredChars.push(getRandom(symbolChars));
      allSelectedChars += symbolChars;
    }

    // Fallback if no character types are selected
    // if (allSelectedChars === "") {
    //   allSelectedChars = lowerCaseChars;
    //   requiredChars.push(getRandom(lowerCaseChars));
    // }

    for (const char of requiredChars) {
      passwordBuild += char;
    }

    const remainingLength = options.length - passwordBuild.length;

    for (let i = 0; i < remainingLength; i++) {
      passwordBuild += getRandom(allSelectedChars);
    }

    passwordBuild = shuffle(passwordBuild);
    setPassword(passwordBuild);

    setStrength(calculatePasswordStrength(options));
  }, [options, setPassword, setStrength]);

  return { generatePassword };
};
