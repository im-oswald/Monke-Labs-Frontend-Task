import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/svgs/LeftArrowIcon";
import Header from "../../components/Header";

export default function Checkout() {
  return (
    <>
      <main className="font-poppins bg-brand-background min-h-screen">
        <Header />
        <div className="max-w-screen-xl mx-auto px-8">
          <div>
            <nav className="flex justify-start items-center pt-8 font-poppins relative">
              <Link to={"/cart"}>
                <LeftArrowIcon />
              </Link>

              <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold">
                Checkout
              </h1>
            </nav>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h2 className="text-2xl font-semibold">Payment</h2>
            <div className="bg-brand-white-primary rounded-2xl shadow-sm pb-5 py-8 flex flex-col gap-5 px-6">
              <label className="flex gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14">
                    <img src="/images/mastercard logo.png" alt="Mastercard" />
                  </div>
                  <span className="font-medium">Debit/Credit card</span>
                </div>
                <div className="flex pr-2">
                  <input
                    type="radio"
                    className="focus:ring-black  focus:outline-black text-black z-10"
                    name="Payment"
                    id="Paypal"
                  />
                </div>
              </label>

              <hr className="my-1 h-px border-t-0 bg-[#D9D9D98F] " />
              <label className="flex gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14">
                    <img src="/images/paypal logo.png" alt="Paypal" />
                  </div>
                  <span className="font-medium">Paypal</span>
                </div>
                <div className="flex pr-2">
                  <input
                    type="radio"
                    className="focus:ring-black  focus:outline-black text-black z-10"
                    name="Payment"
                    id="Paypal"
                  />
                </div>
              </label>
              <hr className="my-1 h-px border-t-0 bg-[#D9D9D98F] " />
              <label className="flex gap-4 items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14">
                    <img src="/images/payoneer logo.png" alt="Payoneer" />
                  </div>
                  <span className="font-medium">Payoneer</span>
                </div>
                <div className="flex pr-2">
                  <input
                    type="radio"
                    className="focus:ring-black  focus:outline-black text-black z-10"
                    name="Payment"
                    id="Payoneer"
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="py-5 space-y-3">
            <h2 className="text-2xl font-semibold">Delivery details</h2>
            <p className="text-brand-text-muted">{`
            789 Maple Street, Los Angeles,
            CA 90001
            (888) 987-6543`}</p>
          </div>
          <div className="py-5 space-y-3">
            <h2 className="text-2xl font-semibold">Order details</h2>
            <div className="text-brand-text-muted grid grid-cols-2">
              <p>1x Green salad</p>
              <p>1x fresh vegetable</p>
              <p>1x Mixed salad</p>
              <p>3x Grilled steak</p>
              <p>1x vegan cake</p>
            </div>
          </div>
          <div className="py-8 flex justify-between">
            <div className="font-inter flex flex-col">
              <span>Price</span>
              <p className="text-3xl">
                {`133.03`}
                <span className="text-brand-orange-primary">$</span>
              </p>
            </div>
            <Link
              to={"/order-complete"}
              className="inline-flex justify-center items-center rounded-[3.125rem] bg-brand-orange-primary px-5 py-3 text-xl text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
            >
              Pay Now
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
