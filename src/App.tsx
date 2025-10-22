import PasswordDisplay from "./components/PasswordDisplay";
import ControlsSection from "./components/ControlsSection";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";

function App() {
  const { password, generatePassword, options, setOptions } =
    usePasswordGenerator();

  return (
    <div className="flex justify-center items-center min-h-dvh">
      <div className="w-[343px]">
        <h1 className="text-preset-4 text-gray-600 text-center mb-8">
          Password Generator
        </h1>
        <PasswordDisplay password={password} />
        <ControlsSection
          generatePassword={generatePassword}
          options={options}
          setOptions={setOptions}
        />
      </div>
    </div>
  );
}

export default App;
