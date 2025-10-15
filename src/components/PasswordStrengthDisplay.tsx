const PasswordStrengthDisplay = () => {
  return (
    <div className="p-4 bg-gray-850 mt-8 flex justify-between items-center">
      <span className="uppercase text-preset-4 text-gray-600">Strength</span>
      <div>
        <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200 mr-2"></span>
        <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200 mr-2"></span>
        <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200 mr-2"></span>
        <span className="h-[28px] w-[10px] border-[2px] inline-block border-gray-200"></span>
      </div>
    </div>
  );
}

export default PasswordStrengthDisplay