function CategoryItem({
  name,
  image,
  bgColor,
}: {
  name: string;
  image: string;
  bgColor: string;
}) {
  return (
    <div
      className={`focus:outline-none focus:ring focus:ring-blue-500 flex justify-start items-start rounded-xl w-36 lg:w-52 overflow-hidden relative ${bgColor}`}
    >
      <div className="flex-[0.5] p-3">{name}</div>
      <div className="flex-[0.5] py-9 lg:py-12">
        <img
          className="w-36 object-contain absolute top-0 -left-3 translate-x-1/2"
          src={image}
          alt="Category Item"
        />
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="font-medium lg:text-2xl">Categories</h3>
        <span className="text-brand-orange-primary font-medium lg:text-lg">
          See all
        </span>
      </div>
      <div className="flex gap-4 py-5">
        <CategoryItem
          bgColor="bg-brand-teal-primary"
          name="Salad"
          image="/images/salad.png"
        />
        <CategoryItem
          bgColor="bg-brand-pink-primary"
          name="Steak"
          image="/images/steak.png"
        />
      </div>
    </>
  );
}
