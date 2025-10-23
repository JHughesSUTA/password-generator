import type { PasswordOptions } from "./types";

export function shuffle(string: string) {
  const arr = string.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

export function getRandom(options: string) {
  return options[Math.floor(Math.random() * options.length)];
}

export const calculatePasswordStrength = (options: PasswordOptions): number => {
  // Get amount of selected options
  const optionVarietyCount = [
    options.includeLowercase,
    options.includeUppercase,
    options.includeNumbers,
    options.includeSymbols,
  ].filter((option) => option).length;

  let lengthScore = 1;
  if (options.length >= 15) lengthScore = 3;
  else if (options.length >= 11) lengthScore = 2;

  const totalScore = lengthScore + optionVarietyCount;

  let strength;
  if (totalScore <= 3) strength = 1;
  else if (totalScore <= 5) strength = 2;
  else if (totalScore === 6) strength = 3;
  else strength = 4;

  return strength;
};
