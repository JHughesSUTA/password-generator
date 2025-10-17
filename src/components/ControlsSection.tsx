import CharacterLengthControl from "./CharacterLengthControl";
import PasswordOptions from "./PasswordOptions";
import PasswordStrengthDisplay from "./PasswordStrengthDisplay";
import GenerateButton from "./GenerateButton";

type ControlSectionProps = {
  generatePassword: (passwordLength: number) => void;
};

const ControlsSection = ({ generatePassword }: ControlSectionProps) => {
  return (
    <section className="px-8 pt-6 pb-[41px] bg-gray-800 mt-4">
      <CharacterLengthControl />
      <PasswordOptions />
      <PasswordStrengthDisplay />
      <GenerateButton generatePassword={generatePassword} />
    </section>
  );
};

export default ControlsSection;
