import Card from "./Card";
import CreditsIcon from "../assets/icon.svg";
import Button from "../ui/Button";

function AvailableCredits() {
  return (
    <Card className="mt-2 bg-[#F1F0F2] p-4 flex flex-col h-full">
      <div>
        <h3 className="text-xl font-semibold">Available Credits</h3>
      </div>
      <div className="flex items-start mt-2">
        <img src={CreditsIcon} alt="Credits Icon" className="w-8 h-8 mr-2" />
        <h2 className="text-3xl">0</h2>
      </div>
      <h3 className="text-[#110024DF] text-[12px]">
        Credits can be used for all bookings, food orders, events.
      </h3>
      <div className="w-full h-[2px] bg-gray-200 my-2" />

      <Button className="w-1/2 mt-2 bg-[#725690] h-9 text-white">
        What are credits?
      </Button>
    </Card>
  );
}

export default AvailableCredits;
