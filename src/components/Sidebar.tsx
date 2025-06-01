import { Home, Folder } from "lucide-react";
import { useNavigation } from "./Providers/navigationProvider";
const Sidebar = () => {
  const { currentView, navigateTo } = useNavigation();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <button
        onClick={() => navigateTo("home")}
        className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
          currentView === "home"
            ? "bg-gray-600"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        <Home className="text-white" />
      </button>

      <button
        onClick={() => navigateTo("folder")}
        className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
          currentView === "folder"
            ? "bg-gray-600"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        <Folder className="text-white" />
      </button>
    </div>
  );
};

export default Sidebar;
