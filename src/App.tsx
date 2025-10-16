import { useState } from "react";
import PasswordDisplay from "./components/PasswordDisplay";
import ControlsSection from "./components/ControlsSection";
import { shuffle, getRandom } from "./utilities";

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const allChars = lowerCaseChars + upperCaseChars + numberChars + symbolChars;

function App() {
  const [password, setPassword] = useState<string>("");

  const generatePassword = (n: number = 10) => {
    let passwordBuild = "";
    const requiredChars = [];

    requiredChars.push(getRandom(lowerCaseChars));
    requiredChars.push(getRandom(upperCaseChars));
    requiredChars.push(getRandom(numberChars));
    requiredChars.push(getRandom(symbolChars));

    for (const char of requiredChars) {
      passwordBuild += char;
    }

    const remainingLength = n - passwordBuild.length;

    for (let i = 0; i < remainingLength; i++) {
      passwordBuild += getRandom(allChars);
    }

    passwordBuild = shuffle(passwordBuild);

    setPassword(passwordBuild);
  };
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <div className="w-[343px]">
        <h1 className="text-preset-4 text-gray-600 text-center mb-8">
          Password Generator
        </h1>
        <PasswordDisplay password={password} />
        <ControlsSection generatePassword={generatePassword} />
      </div>
    </div>
  );
}

export default App;
