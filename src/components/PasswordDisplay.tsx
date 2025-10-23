import CopyIcon from "./icons/CopyIcon";
import { usePasswordStore } from "../store";
import { useClipboard } from "../hooks/useClipboard";

const PasswordDisplay = () => {
  const password = usePasswordStore((state) => state.password);
  const { copied, handleCopy } = useClipboard(password);

  return (
    <div className="bg-gray-800 p-4 flex justify-between">
      <span
        className={`text-preset-2 ${
          password ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {password || "P4$5W0rD!"}
      </span>
      <button
        onClick={handleCopy}
        disabled={!password}
        className={`cursor-pointer transition-opacity ${
          !password ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
        }`}
        title={copied ? "Copied!" : "Copy password"}
      >
        <CopyIcon />
        {copied && <span className="ml-2 text-xs text-green-400">Copied!</span>}
      </button>
    </div>
  );
};

export default PasswordDisplay;
