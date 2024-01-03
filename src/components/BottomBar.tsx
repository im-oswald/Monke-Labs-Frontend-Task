import { NavLink } from "react-router-dom";
import AvatarIcon from "../assets/svgs/AvatarIcon";
import HeartIcon from "../assets/svgs/HeartIcon";
import HomeIcon from "../assets/svgs/HomeIcon";
import LineChartIcon from "../assets/svgs/LineChartIcon";
import ShoppingBagIcon from "../assets/svgs/ShoppingBagIcon";

export default function BottomBar() {
  return (
    <div className="block lg:hidden">
      <nav className="px-8 py-5 font-poppins">
        <ul className="flex gap-4 justify-between items-center">
          <li>
            <NavLink to={"/"}>
              {({ isActive }) => (
                <HomeIcon
                  fill={isActive ? "#EA5323" : "none"}
                  stroke={isActive ? "none" : "#A1A1A1"}
                />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favourites"}>
              {({ isActive }) => (
                <HeartIcon
                  fill={isActive ? "#EA5323" : "none"}
                  stroke={isActive ? "none" : "#A1A1A1"}
                  width="30"
                  height="28"
                />
              )}
            </NavLink>
          </li>
          <NavLink to={"/cart"}>
            <li className="bg-black rounded-full p-3">
              <ShoppingBagIcon />
            </li>
          </NavLink>
          <li>
            <LineChartIcon />
          </li>
          <li>
            <AvatarIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
}
