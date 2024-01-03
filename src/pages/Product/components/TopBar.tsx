import { useState } from "react";
import HeartIcon from "../../../assets/svgs/HeartIcon";
import LeftArrowIcon from "../../../assets/svgs/LeftArrowIcon";
import { Link } from "react-router-dom";
import useFavourites from "../../../hooks/useFavourites";

export default function TopBar({ productId }: { productId: string }) {
  const { toggleFavourite, favourites } = useFavourites();

  const [isFavorite, setIsFavorite] = useState(() =>
    favourites.includes(productId)
  );

  function handleClick() {
    setIsFavorite(!isFavorite);
    toggleFavourite(productId);
  }

  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-8 font-poppins">
        <Link to={"/"}>
          <LeftArrowIcon />
        </Link>
        <div>
          <button onClick={handleClick}>
            <HeartIcon
              className={
                isFavorite
                  ? "favorite-stroke text-red-500 stroke-none"
                  : "favorite-filled text-transparent stroke-black"
              }
              width={30}
              height={30}
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
