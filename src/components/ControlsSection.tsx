import CharacterLengthControl from "./CharacterLengthControl";
import PasswordInclusionsControl from "./PasswordInclusionsControl";
import PasswordStrengthDisplay from "./PasswordStrengthDisplay";
import GenerateButton from "./GenerateButton";

const ControlsSection = () => {
  return (
    <section className="px-8 pt-6 pb-[41px] bg-gray-800 mt-4">
      <CharacterLengthControl />
      <PasswordInclusionsControl />
      <PasswordStrengthDisplay />
      <GenerateButton />
    </section>
  );
};

export default ControlsSection;
