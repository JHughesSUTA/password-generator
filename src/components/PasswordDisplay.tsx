import CopyIcon from "./icons/CopyIcon";
import { usePasswordStore } from "../store";
import { useDisplayedPassword } from "../hooks/useDisplayedPassword";
import { useClipboard } from "../hooks/useClipboard";

const PasswordDisplay = () => {
  const password = usePasswordStore((state) => state.password);
  const { copied, handleCopy } = useClipboard(password);
  const displayedPassword = useDisplayedPassword(password, copied);

  return (
    <div className="bg-gray-800 p-4 flex justify-between relative md:py-[19px] md:px-8">
      <span
        className={`text-preset-2 md:text-preset-1 ${
          password ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {displayedPassword}
      </span>
      <button
        onClick={handleCopy}
        disabled={!password}
        className={`group transition-opacity ${
          !password ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        title={copied ? "Copied!" : "Copy password"}
      >
        <CopyIcon passwordActive={password !== ""} />
      </button>
      {copied && (
        <span className="text-preset-4 uppercase text-green bg-gray-800 absolute right-[45px] top-1/2 -translate-y-1/2 md:text-preset-3 md:right-[68px]">
          Copied
        </span>
      )}
    </div>
  );
};

export default PasswordDisplay;
