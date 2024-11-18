// eslint-disable-next-line react/prop-types
function Button({ children, className, onClick, type, disabled }) {
  return (
    <button
      className={`w-full border border-[#00002F26] rounded-2xl h-11 ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
