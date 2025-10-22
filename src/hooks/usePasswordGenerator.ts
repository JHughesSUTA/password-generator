import { useState } from "react";
import { shuffle, getRandom } from "../utilities";
import type { PasswordOptions } from "../types";

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState<string>("");
  const [options, setOptions] = useState<PasswordOptions>({
    includeUppercase: false,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
    length: 8,
  });

  const generatePassword = () => {
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

    for (const char of requiredChars) {
      passwordBuild += char;
    }

    const remainingLength = options.length - passwordBuild.length;

    for (let i = 0; i < remainingLength; i++) {
      passwordBuild += getRandom(allSelectedChars);
    }

    passwordBuild = shuffle(passwordBuild);
    setPassword(passwordBuild);
  };

  return { password, generatePassword, options, setOptions };
};
