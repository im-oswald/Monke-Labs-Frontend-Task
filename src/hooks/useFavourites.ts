import { useState } from "react";
import { getLocalStorageItems } from "../utils/LocalStorage";

export default function useFavourites() {
  const [favourites, setFavourites] = useState<string[]>(() =>
    getLocalStorageItems("favourites")
  );

  const toggleFavourite = (productId: string) => {
    setFavourites((prev) => {
      const isFavouriteId = prev.includes(productId);
      const newFavourites = isFavouriteId
        ? prev.filter((id: string) => id !== productId)
        : [...prev, productId];

      localStorage.setItem("favourites", JSON.stringify(newFavourites));

      return newFavourites;
    });
  };

  return {
    favourites,
    toggleFavourite,
  };
}
