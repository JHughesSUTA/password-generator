import CopyIcon from "./icons/CopyIcon";
import { usePasswordStore } from "../store";

const PasswordDisplay = () => {
  const password = usePasswordStore((state) => state.password);
  return (
    <div className="bg-gray-800 p-4 flex justify-between">
      <span
        className={`text-preset-2 ${
          password ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {password || "P4$5W0rD!"}
      </span>
      <button className="cursor-pointer">
        <CopyIcon />
      </button>
    </div>
  );
};

export default PasswordDisplay;
