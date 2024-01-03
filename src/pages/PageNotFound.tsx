import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="grid h-screen place-content-center bg-brand-background px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-brand-text-muted">404</h1>

        <p className="text-2xl font-bold tracking-tight text-brand-text-primary sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-brand-text-secondary">
          We can't find that page.
        </p>

        <Link
          to={"/"}
          className="mt-6 inline-block rounded-[3.125rem] bg-brand-orange-primary px-5 py-3 text-sm font-medium text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
