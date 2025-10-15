import CopyIcon from './icons/CopyIcon';

const PasswordDisplay = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between">
      <span className="text-preset-2 text-gray-700">P4$5W0rD!</span>
      <button className="cursor-pointer">
        <CopyIcon />
      </button>
    </div>
  );
}

export default PasswordDisplay