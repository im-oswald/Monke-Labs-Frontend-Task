import HeartIcon from "../../../assets/svgs/HeartIcon";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import useFavourites from "../../../hooks/useFavourites";

function RecommendedItem({
  id,
  title,
  price,
  image,
  favourites,
  handleClick,
}: {
  id: string;
  title: string;
  price: string;
  image: string;
  favourites: string[];
  handleClick: (id: string) => void;
}) {
  const isFavourite = favourites.includes(id);

  return (
    <div className="flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md font-poppins">
      <Link to={`/product/${id}`} className="grid">
        <div className="relative overflow-hidden bg-transparent rounded-none shadow-none bg-clip-border">
          <img src={image} alt="food item" className="w-full aspect-square" />
        </div>
      </Link>

      <div className="px-3 pt-2 w-11/12 flex-1">
        <h4 className="block text-sm lg:text-lg antialiased font-medium leading-snug tracking-normal">
          {title}
        </h4>
      </div>
      <div className="flex items-center justify-between px-3 py-2 lg:py-4">
        <div className="flex items-center font-medium">
          <span className="text-brand-orange-primary">$&nbsp;</span>
          <span className="text-sm lg:text-base">{price}</span>
        </div>
        <button onClick={() => handleClick(id)}>
          <HeartIcon
            className={`${
              isFavourite
                ? "favorite-stroke text-red-500 stroke-none"
                : "favorite-filled text-transparent stroke-black"
            } lg:w-6 lg:h-6`}
          />
        </button>
      </div>
    </div>
  );
}

export default function Recommended() {
  const products = useProducts({});

  const { toggleFavourite, favourites } = useFavourites();

  function handleClick(productId: string) {
    toggleFavourite(productId);
  }

  return (
    <>
      <div className="flex justify-between">
        <h3 className="font-medium lg:text-2xl">Recommended Items</h3>
        <span className="text-brand-orange-primary font-medium lg:text-lg">
          Filter
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
        {products.map((product, index) => (
          <RecommendedItem
            key={index}
            id={String(product.id)}
            title={product.title}
            price={product.price}
            image={product.image}
            favourites={favourites}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}
