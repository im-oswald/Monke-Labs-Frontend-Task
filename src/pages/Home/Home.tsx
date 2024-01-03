import TopBar from "./components/TopBar";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";
import BottomBar from "../../components/BottomBar";
import Header from "../../components/Header";

export default function Home() {
  return (
    <main className="bg-brand-background min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 mx-auto pb-32 max-w-screen-xl justify-center lg:space-y-3">
        <TopBar />
        <Categories />
        <Recommended />
      </div>
      <div className="fixed bottom-0 shadow-lg z-40 border-t border-gray-200 w-full bg-brand-background">
        <BottomBar />
      </div>
    </main>
  );
}
