import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/svgs/LeftArrowIcon";
import { useEffect, useState } from "react";
import { getLocalStorageItems } from "../../utils/LocalStorage";
import useProducts from "../../hooks/useProducts";
import BottomBar from "../../components/BottomBar";
import { Product } from "../../types/Product.type";
import Header from "../../components/Header";

function FavouriteItem({ product }: { product: Product }) {
  const { image, title, restaurant, price } = product;

  return (
    <div className="bg-brand-white-primary rounded-xl shadow-sm p-3 grid grid-cols-4 gap-20 items-center">
      <div className="w-24 h-24 rounded-xl overflow-clip">
        <img src={image} className="w-full object-cover aspect-square" />
      </div>
      <div className="col-span-3 grid grid-rows-2 items-end px-5">
        <span className="self-center font-medium">{title}</span>
        <div className="flex justify-between">
          <span className="text-brand-text-muted">By {restaurant}</span>
          <p className="space-x-1">
            <span>{price}</span>
            <span className="text-brand-orange-primary">$</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function getFavouriteProducts() {
  const localFavourite = getLocalStorageItems("favourites");
  const Products: Product[] = localFavourite.map((id: string) => {
    const [product] = useProducts({ id });
    return product;
  });
  return Products;
}

export default function Favourites() {
  const [FavouriteItems, setFavouriteItems] = useState<Product[]>([]);

  useEffect(() => {
    const productList = getFavouriteProducts();
    setFavouriteItems(productList);
  }, []);

  return (
    <>
      <main className="font-poppins bg-brand-background min-h-screen">
        <Header />
        <div className="max-w-screen-xl mx-auto">
          <div className="flex-1 pb-32 px-8">
            <div>
              <nav className="flex justify-start items-center pt-8 font-poppins relative">
                <Link to={"/"}>
                  <LeftArrowIcon />
                </Link>

                <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold">
                  Favourites
                </h1>
              </nav>
            </div>
            <div className="flex flex-col gap-4 py-4">
              {FavouriteItems.map((item, index) => (
                <FavouriteItem key={index} product={item} />
              ))}
            </div>
          </div>

          <div className="fixed bottom-0 shadow-lg z-40 border-t border-gray-200 w-full bg-brand-background">
            <BottomBar />
          </div>
        </div>
      </main>
    </>
  );
}
