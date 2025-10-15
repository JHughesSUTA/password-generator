import CopyIcon from "./components/icons/copyIcon";
import ArrowIcon from "./components/icons/ArrowIcon";

function App() {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <div className="w-[343px]">
        <h1 className="text-preset-4 text-gray-600 text-center mb-8">
          Password Generator
        </h1>
        <div className="bg-gray-800 p-4 flex justify-between">
          <span className="text-preset-2 text-gray-700">P4$5W0rD!</span>
          <button className="cursor-pointer">
            <CopyIcon />
          </button>
        </div>
        <div className="px-8 pt-6 pb-[41px] bg-gray-800 mt-4">
          <div className="flex justify-between">
            <label className="text-preset-4 text-gray-200" htmlFor="">
              Character Length
            </label>
            <span className="text-preset-2 text-green">10</span>
          </div>
          <input
            id="character-length-slider"
            name="character-length"
            type="range"
            role="slider"
            autoComplete="off"
            min="1"
            max="20"
            step="1"
          />
          <div>
            <div className="mb-4">
              <input type="checkbox" id="uppercase" className="mr-4" />
              <label
                htmlFor="uppercase"
                className="text-gray-200 text-preset-4 capitalize mb-4"
              >
                Include uppercase letters
              </label>
            </div>
            <div className="mb-4">
              <input type="checkbox" id="lowercase" className="mr-4" />
              <label
                htmlFor="lowercase"
                className="text-gray-200 text-preset-4 capitalize mb-4"
              >
                Include lowercase letters
              </label>
            </div>
            <div className="mb-4">
              <input type="checkbox" id="numbers" className="mr-4" />
              <label
                htmlFor="numbers"
                className="text-gray-200 text-preset-4 capitalize mb-4"
              >
                Include numbers
              </label>
            </div>
            <div className="">
              <input type="checkbox" id="symbols" className="mr-4" />
              <label
                htmlFor="symbols"
                className="text-gray-200 text-preset-4 capitalize mb-4"
              >
                Include symbols
              </label>
            </div>
          </div>
          <div className="p-4 bg-gray-850 mt-8 flex justify-between items-center">
            <span className="uppercase text-preset-4 text-gray-600">
              Strength
            </span>
            <div>
              <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200 mr-2"></span>
              <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200 mr-2"></span>
              <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200 mr-2"></span>
              <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200"></span>
            </div>
          </div>

          <button className="bg-green w-full mt-8 py-[18px] text-gray-800 text-preset-4 uppercase font-bold cursor-pointer">
            Generate{" "}
            <span className="inline-block">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
