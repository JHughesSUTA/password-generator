import { useState } from "react";
import { shuffle, getRandom } from "../utilities";

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const allChars = lowerCaseChars + upperCaseChars + numberChars + symbolChars;

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState<string>("");

  const generatePassword = (passwordLength: number = 10) => {
    let passwordBuild = "";
    const requiredChars = [];

    requiredChars.push(getRandom(lowerCaseChars));
    requiredChars.push(getRandom(upperCaseChars));
    requiredChars.push(getRandom(numberChars));
    requiredChars.push(getRandom(symbolChars));

    for (const char of requiredChars) {
      passwordBuild += char;
    }

    const remainingLength = passwordLength - passwordBuild.length;

    for (let i = 0; i < remainingLength; i++) {
      passwordBuild += getRandom(allChars);
    }

    passwordBuild = shuffle(passwordBuild);
    setPassword(passwordBuild);
  };

  return { password, generatePassword };
};
