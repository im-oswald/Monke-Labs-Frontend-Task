import TopBar from "./components/TopBar";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";

export default function Home() {
  return (
    <div className="flex-1 pb-32 justify-center lg:space-y-3">
      <TopBar />
      <Categories />
      <Recommended />
    </div>
  );
}
