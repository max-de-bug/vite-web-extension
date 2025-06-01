import { Folder } from "lucide-react";

const FolderMenu = () => {
  return (
    <div className="flex-1 h-full flex items-center justify-center">
      <div className="text-white">
        <h2 className="text-xl font-semibold mb-4">Folder View</h2>
        <div className="flex items-center gap-2">
          <Folder className="w-6 h-6" />
          <span>Folder Content</span>
        </div>
      </div>
    </div>
  );
};

export default FolderMenu;
