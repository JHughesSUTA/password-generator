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
        aria-readonly="true"
        aria-label={password ? "Generated password" : "Password placeholder"}
        aria-describedby="password-description"
      >
        {displayedPassword}
      </span>

      {/* Screen reader description */}
      <div id="password-description" className="sr-only">
        {password
          ? `password generated with ${password.length} characters`
          : "No password generated. Click generate to create a password."}
      </div>

      <button
        onClick={handleCopy}
        disabled={!password}
        className={`group transition-opacity ${
          !password ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        aria-label={
          !password
            ? "Copy password to clipboard - disabled, no password generated"
            : copied
            ? "Password copied to clipboard"
            : "Copy password to clipboard"
        }
        aria-describedby={copied ? "copy-success" : undefined}
        type="button"
      >
        <CopyIcon passwordActive={password !== ""} />
      </button>

      {/* 'copied' display */}
      {copied && (
        <>
          <span
            className="text-preset-4 uppercase text-green bg-gray-800 absolute right-[45px] top-1/2 -translate-y-1/2 md:text-preset-3 md:right-[68px]"
            aria-hidden="true"
          >
            Copied
          </span>
          <div
            id="copy-success"
            className="sr-only"
            role="status"
            aria-live="polite"
          >
            Password successfully copied to clipboard
          </div>
        </>
      )}
    </div>
  );
};

export default PasswordDisplay;
