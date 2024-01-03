import HandWaveIcon from "../../../assets/svgs/HandWaveIcon";
import SearchIcon from "../../../assets/svgs/SearchIcon";

const User = "Danyal";

function getTimeOfDayMessage() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return "It's lunch time!";
  } else {
    return "It's dinner time!";
  }
}

export default function TopBar() {
  const message = getTimeOfDayMessage();

  return (
    <div>
      <nav className="flex justify-between items-center py-10 font-poppins">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold flex gap-3">
            Hey {User} <HandWaveIcon />
          </h2>
          <p className="text-sm lg:text-lg">{message}</p>
        </div>
        <div>
          <SearchIcon />
        </div>
      </nav>
    </div>
  );
}
