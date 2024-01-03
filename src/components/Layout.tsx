import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomBar from "./BottomBar";

export default function Layout() {
  return (
    <main className="font-poppins bg-brand-background min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto px-8">
        <Outlet />
      </div>
      <div className="fixed bottom-0 shadow-lg z-40 border-t border-gray-200 w-full bg-brand-background">
        <BottomBar />
      </div>
    </main>
  );
}
