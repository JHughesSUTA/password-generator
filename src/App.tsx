import PasswordDisplay from "./components/PasswordDisplay";
import ControlsSection from "./components/ControlsSection";

function App() {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <main className="w-[343px] md:w-[540px]">
        <h1 className="text-preset-4 text-gray-600 text-center mb-8 md:text-preset-2">
          Password Generator
        </h1>
        <PasswordDisplay />
        <ControlsSection />
      </main>
    </div>
  );
}

export default App;
