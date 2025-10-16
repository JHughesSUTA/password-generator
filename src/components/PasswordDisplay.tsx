import CopyIcon from './icons/CopyIcon';

const PasswordDisplay = ({password}) => {
  return (
    <div className="bg-gray-800 p-4 flex justify-between">
      <span className="text-preset-2 text-gray-700">{password}</span>
      <button className="cursor-pointer">
        <CopyIcon />
      </button>
    </div>
  );
}

export default PasswordDisplay