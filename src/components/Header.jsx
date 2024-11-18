import BackButton from "../assets/arrow.svg";

function Header() {
  return (
    <header className="w-full h-[90px] relative bg-white shadow-md flex items-center">
      <div className="flex items-center justify-between px-4 relative w-full">
        <button className="absolute left-4 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white">
          <img src={BackButton} />
        </button>
        <h1 className="text-xl font-semibold text-gray-900 mx-auto">
          My Wallet
        </h1>
      </div>
      <div className="absolute bottom-0 w-full h-[1px] bg-gray-200" />
    </header>
  );
}

export default Header;
