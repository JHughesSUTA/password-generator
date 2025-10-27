import CopyIcon from "./icons/CopyIcon";
import { usePasswordStore } from "../store";
import { useDisplayedPassword } from "../hooks/useDisplayedPassword";
import { useClipboard } from "../hooks/useClipboard";

const PasswordDisplay = () => {
  const password = usePasswordStore((state) => state.password);
  const { copied, handleCopy } = useClipboard(password);
  const displayedPassword = useDisplayedPassword(password, copied);

  return (
    <div className="bg-gray-800 p-4 flex justify-between relative">
      <span
        className={`text-preset-2 ${
          password ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {displayedPassword}
      </span>
      <button
        onClick={handleCopy}
        disabled={!password}
        className={`group transition-opacity ${
          !password
            ? "opacity-50 cursor-not-allowed"
            : "hover:opacity-80 cursor-pointer"
        }`}
        title={copied ? "Copied!" : "Copy password"}
      >
        <CopyIcon passwordActive={password !== ""} />
        {copied && (
          <span className="text-preset-4 uppercase text-green bg-gray-800 absolute right-[45px] top-1/2 -translate-y-1/2">
            Copied
          </span>
        )}
      </button>
    </div>
  );
};

export default PasswordDisplay;
