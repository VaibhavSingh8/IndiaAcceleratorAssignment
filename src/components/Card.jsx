// eslint-disable-next-line react/prop-types
function Card({ children, className, height }) {
  return (
    <div
      className={`flex w-full border border-[#00002F26] rounded-2xl shadow-md p-4 mt-3 ${className} mx-auto`}
      style={{ height }}
    >
      {children}
    </div>
  );
}

export default Card;
