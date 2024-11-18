import { useState } from "react";
import Input from "../ui/Input";
import Card from "./Card";
import Button from "../ui/Button";
import CreditsIcon from "../assets/icon.svg";

function AddCredits() {
  const [inputText, setInputText] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);

  const handleChange = (event) => {
    setInputText(event.target.value);
    handleDisable();
  };

  const handleDisable = () => {
    if (inputText) {
      setDisabledButton(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = parseFloat(inputText);
    if (isNaN(amount) || amount <= 0) {
      console.error("Please enter a valid amount.");
      return;
    }
    console.log("Submitted amount:", amount);
  };

  return (
    <Card className="flex flex-col h-full bg-[#F1F0F2]">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All credits to your wallet</h2>
          <h2 className="bg-purple-300 rounded-lg px-2.5">1 Credit = 1</h2>
        </div>
        <div>
          <h3 className="text-base font-light text-[#1C2024]">
            Choose from our most purchased options
          </h3>
        </div>
        <Card>
          <div className="flex items-start mt-2">
            <img
              src={CreditsIcon}
              alt="Credits Icon"
              className="w-5 h-5 mr-2"
            />
            <div className="flex justify-end">
              <h2 className="text-lg font-semibold -mt-1">
                15000 <span className="text-base font-light">Credits</span>
              </h2>
            </div>
          </div>
        </Card>
      </div>
      <h2 className="mt-4">or</h2>
      <div>
        <div className="mt-3">
          <h2 className="text-xl font-semibold">Enter amount Manually</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter here"
            onChange={handleChange}
            value={inputText}
            className="mt-3"
          />

          <Button
            type="submit"
            className={` text-[#FFFFFF] mt-8 ${
              disabledButton ? "bg-[#FFFFFF00]" : "bg-[#725690]"
            }`}
            disabled={disabledButton}
          >
            Proceed to Pay
          </Button>
        </form>
      </div>
    </Card>
  );
}

export default AddCredits;
