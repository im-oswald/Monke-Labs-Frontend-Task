import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/svgs/LeftArrowIcon";

export default function OrderComplete() {
  return (
    <>
      <div>
        <nav className="flex justify-start items-center pt-8">
          <Link to={"/checkout"}>
            <LeftArrowIcon />
          </Link>
        </nav>
      </div>
      <div className="grid place-content-center py-12 lg:py-5">
        <div className="text-center flex flex-col gap-16">
          <h1 className="text-2xl md:text-3xl font-semibold text-brand-text-primary">
            "Congratulations! Your Order Has Been Placed!"
          </h1>

          <div className="w-full flex justify-center">
            <img
              src="/images/rider.png"
              alt="Delivery Rider"
              className="md:w-2/4 lg:w-2/5"
            />
          </div>

          <p className="mt-4 md:text-xl text-brand-text-muted">
            Thank you for choosing our services! Your order has been
            successfully placed and is now being processed. We appreciate your
            trust in us and look forward to serving you.
          </p>

          <div>
            <Link
              to={"/"}
              className="mt-6 rounded-[3.125rem] bg-brand-orange-primary px-5 py-3 text-2xl font-normal text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
