// eslint-disable-next-line react/prop-types
function Input({ value, onChange, placeholder, className }) {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border border-[#00002F26] rounded-xl h-11 ${className} pl-2`}
      />
    </div>
  );
}

export default Input;
