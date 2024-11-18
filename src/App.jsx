import AddCredits from "./components/AddCredits";
import AvailableCredits from "./components/AvailableCredits";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen overflow-auto">
      <Header />
      <div className="flex flex-col items-center">
        <UserProfile className="mt-4" />
        <AvailableCredits />
        <AddCredits />
      </div>
    </div>
  );
}

export default App;
