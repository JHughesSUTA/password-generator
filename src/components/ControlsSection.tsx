import CharacterLengthControl from "./CharacterLengthControl";
import PasswordInclusionsControl from "./PasswordInclusionsControl";
import PasswordStrengthDisplay from "./PasswordStrengthDisplay";
import GenerateButton from "./GenerateButton";
import type { PasswordOptions } from "../types";

type ControlSectionProps = {
  generatePassword: () => void;
  options: PasswordOptions;
  setOptions: (options: PasswordOptions) => void;
};

const ControlsSection = ({
  generatePassword,
  options,
  setOptions,
}: ControlSectionProps) => {
  return (
    <section className="px-8 pt-6 pb-[41px] bg-gray-800 mt-4">
      <CharacterLengthControl options={options} setOptions={setOptions} />
      <PasswordInclusionsControl options={options} setOptions={setOptions} />
      <PasswordStrengthDisplay />
      <GenerateButton generatePassword={generatePassword} />
    </section>
  );
};

export default ControlsSection;
