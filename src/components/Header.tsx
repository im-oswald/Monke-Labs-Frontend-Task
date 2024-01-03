import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="hidden lg:flex justify-center">
      <nav className="px-8 py-6 font-poppins w-full max-w-screen-xl flex justify-between items-center">
        <div className="text-xl">Logo</div>
        <ul className="flex gap-8 justify-between items-center text-xl">
          <li>
            <NavLink to={"/"}>
              {({ isActive }) => (
                <span className={isActive ? "text-[#EA5323]" : "text-black"}>
                  Home
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favourites"}>
              {({ isActive }) => (
                <span className={isActive ? "text-[#EA5323]" : "text-black"}>
                  Favourites
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              {({ isActive }) => (
                <span className={isActive ? "text-[#EA5323]" : "text-black"}>
                  Cart
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <span className="text-black">Analytics</span>
          </li>
          <li>
            <span className="text-black">Profile</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
