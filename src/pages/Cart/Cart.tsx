import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/svgs/LeftArrowIcon";
import { useEffect, useState } from "react";
import { getLocalStorageItems } from "../../utils/LocalStorage";
import useProducts from "../../hooks/useProducts";
import { Product } from "../../types/Product.type";

function CartItem({
  image,
  price,
  title,
  quantity,
}: {
  image: string;
  price: string;
  title: string;
  quantity: string;
}) {
  const currentPrice = (Number(price) * Number(quantity)).toFixed(2);

  return (
    <div className="bg-brand-white-primary rounded-xl shadow-sm p-3 grid grid-cols-4 gap-20 items-center">
      <div className="w-24 h-24 rounded-xl overflow-clip">
        <img src={image} className="w-full object-cover aspect-square" />
      </div>
      <div className="col-span-3 grid grid-rows-2 items-end px-5">
        <span className="self-center font-medium">{title}</span>
        <div className="flex justify-between">
          <span>Quantity {quantity}</span>
          <p className="space-x-1">
            <span>{currentPrice}</span>
            <span className="text-brand-orange-primary">$</span>
          </p>
        </div>
      </div>
    </div>
  );
}

type CartProduct = Product & {
  quantity: string;
};

function getCartProducts() {
  const localCart = getLocalStorageItems("cart");
  const cartProducts: CartProduct[] = localCart.map(
    (item: { id: string; quantity: string }) => {
      const [product] = useProducts({ id: item.id });

      const cartProduct: CartProduct = {
        ...product,
        quantity: item.quantity,
      };

      return cartProduct;
    }
  );
  return cartProducts;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState("0");

  function calculateTotalPrice(cartItems: CartProduct[]) {
    return cartItems
      .reduce((total, item) => {
        const itemPrice = Number(item.price);

        if (!isNaN(itemPrice)) {
          return total + itemPrice;
        } else {
          console.error(`Invalid price for item with id ${item.id}`);
          return total;
        }
      }, 0)
      .toFixed(2);
  }

  useEffect(() => {
    const productList = getCartProducts();
    setCartItems(productList);
    setTotalPrice(() => calculateTotalPrice(productList));
  }, []);

  return (
    <>
      <div>
        <nav className="flex justify-start items-center pt-8 font-poppins relative">
          <Link to={"/"}>
            <LeftArrowIcon />
          </Link>

          <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold">
            Bucket
          </h1>
        </nav>
      </div>
      <div className="flex flex-col gap-4 py-4">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            image={item.image}
            price={item.price}
            title={item.title}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="py-8 flex justify-between">
        <div className="font-inter flex flex-col">
          <span>Price</span>
          <p className="text-3xl">
            {totalPrice}
            <span className="text-brand-orange-primary">$</span>
          </p>
        </div>
        <Link
          to={"/checkout"}
          className="inline-flex justify-center items-center rounded-[3.125rem] bg-brand-orange-primary px-5 py-3 text-xl text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
        >
          Pay Now
        </Link>
      </div>
    </>
  );
}
