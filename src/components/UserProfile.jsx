import Card from "./Card";
import Checkmark from "../assets/checkmark.svg";

function UserProfile() {
  return (
    <Card className="p-4">
      <div className="rounded-full border border-[#00002F26] p-3 text-center">
        Profile
      </div>
      <div className="mt-3">
        <div className="flex mx-4 -mt-2">
          <div className="text-2xl font-semibold">Alex Smith</div>
          <div className="flex ml-12 items-center gap-1 bg-[#CDBFDD] rounded-2xl px-2">
            <img src={Checkmark} />
            <h4 className="text-sm">Verified</h4>
          </div>
        </div>
        <div className="mt-2 mx-4">
          <h4 className="text-gray-600">+91 8930-188-923</h4>
        </div>
      </div>
    </Card>
  );
}

export default UserProfile;
