import React from "react";
import Sidebar from "@src/components/Sidebar";
import Header from "@src/components/Header";
import FolderMenu from "@src/components/menu/folder";
import {
  NavigationProvider,
  useNavigation,
} from "@src/components/Providers/navigationProvider";

const PopupContent = () => {
  const { currentView } = useNavigation();

  return (
    <main className="fixed inset-y-0 right-0 w-full max-w-md bg-gray-800 p-2">
      <div className="flex h-full items-center justify-between gap-4 text-white">
        <Sidebar />
        {currentView === "home" ? <Header /> : <FolderMenu />}
      </div>
    </main>
  );
};

export default function Popup() {
  return (
    <NavigationProvider>
      <PopupContent />
    </NavigationProvider>
  );
}
