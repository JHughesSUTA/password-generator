import CharacterLengthControl from "./CharacterLengthControl";
import PasswordInclusionsControl from "./PasswordInclusionsControl";
import PasswordStrengthDisplay from "./PasswordStrengthDisplay";
import GenerateButton from "./GenerateButton";

const ControlsSection = () => {
  return (
    <section className="p-4 bg-gray-800 mt-4 md:mt-6 md:px-8 md:pt-6 md:pb-[41px]">
      <CharacterLengthControl />
      <PasswordInclusionsControl />
      <PasswordStrengthDisplay />
      <GenerateButton />
    </section>
  );
};

export default ControlsSection;
