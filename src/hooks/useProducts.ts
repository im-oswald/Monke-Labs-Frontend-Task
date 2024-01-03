import ProductsList from "../data/Products.json";

export default function useProducts({ id }: { id?: string }) {
  const products = ProductsList.products;

  if (id) {
    const selectedProduct = products.find(
      (product) => product.id.toString() === id
    );
    return selectedProduct ? [selectedProduct] : [];
  }

  return products;
}
