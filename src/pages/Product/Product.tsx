import { Link, useParams } from "react-router-dom";
import TopBar from "./components/TopBar";
import useProducts from "../../hooks/useProducts";
import StarIcon from "../../assets/svgs/StarIcon";
import { useEffect, useState } from "react";
import PlusCircleIcon from "../../assets/svgs/PlusCircleIcon";
import MinusCircleIcon from "../../assets/svgs/MinusCircleIcon";
import { toast } from "sonner";
import { getLocalStorageItems } from "../../utils/LocalStorage";
import Header from "../../components/Header";

type LocalCartItem = { id: string; quantity: string };

export default function Product() {
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);

  const product = useProducts({ id: productId });

  useEffect(() => {
    const localCart = getLocalStorageItems("cart");

    const cartItem = localCart.find(
      (item: LocalCartItem) => item.id === productId
    );

    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAddtoCart() {
    const localCart = getLocalStorageItems("cart");

    const existingCartItemIndex = localCart.findIndex(
      (item: LocalCartItem) => item.id === productId
    );

    if (existingCartItemIndex !== -1) {
      if (quantity === 0) {
        localCart.splice(existingCartItemIndex, 1);
      } else {
        localCart[existingCartItemIndex].quantity = quantity;
      }
    } else {
      localCart.push({
        id: productId,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(localCart));

    if (quantity === 0) {
      toast.success("Item removed from cart successfully");
    } else {
      toast.success("Item added to cart successfully");
    }
  }

  if (!product || product.length <= 0) {
    return (
      <main className="h-screen bg-brand-background grid place-content-center">
        <div className="font-poppins">
          <h2 className=" text-3xl text-brand-text-primary">
            Invalid Product Id
          </h2>
          <div className="w-full flex justify-center items-center">
            <Link
              to={"/"}
              className="mt-6 inline-block rounded-[3.125rem] bg-brand-orange-primary px-5 py-3 text-sm font-medium text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const [productItem] = product;

  function increase() {
    if (quantity >= 100) {
      setQuantity(100);
      toast.error("Sorry, the maximum quantity you can order is 100");
      return;
    }
    setQuantity((quantity) => quantity + 1);
  }

  function decrease() {
    if (quantity <= 0) {
      setQuantity(0);
      return;
    }
    setQuantity((quantity) => quantity - 1);
  }

  return (
    <main className="font-poppins bg-brand-background min-h-screen">
      <Header />
      <div className="max-w-screen-xl mx-auto lg:px-8">
        <div className="bg-brand-white-primary rounded-b-[3.125rem] shadow-sm pb-5 lg:pb-8">
          <TopBar productId={String(productItem.id)} />
          <div className="px-8 space-y-3">
            <h2 className="text-3xl font-medium">{productItem.title}</h2>
            <p className="text-brand-text-muted">{`By ${productItem.restaurant}`}</p>
            <div className="flex gap-2">
              <StarIcon />
              {productItem.rating}
            </div>
          </div>
          <div className="relative flex overflow-clip">
            <div className="flex-[0.25] flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <button onClick={increase}>
                  <PlusCircleIcon />
                </button>
                <span className="text-xl font-medium">{quantity}</span>
                <button onClick={decrease}>
                  <MinusCircleIcon />
                </button>
              </div>
            </div>
            <div className="py-52 lg:py-72 flex-[0.75]">
              <div className="rounded-full w-full lg:w-2/3 overflow-clip absolute top-0 right-0 translate-x-1/4 flex justify-center">
                <img
                  src={productItem.image}
                  className="object-cover"
                  alt="Product"
                />
              </div>
            </div>
          </div>
          <div className="px-8">
            <h3 className="text-lg lg:text-2xl font-semibold">Description</h3>
            <p className="text-brand-text-muted  lg:text-lg">
              {productItem.description}
            </p>
          </div>
        </div>
        <div className="p-8 flex justify-between">
          <div className="font-inter flex flex-col">
            <span>Price</span>
            <p className="text-3xl">
              {(Number(productItem.price) * quantity).toFixed(2)}
              <span className="text-brand-orange-primary">$</span>
            </p>
          </div>
          <button
            onClick={handleAddtoCart}
            className=" inline-block rounded-[3.125rem] bg-brand-orange-primary px-5 py-3 text-xl text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
