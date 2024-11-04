import { CartType, ProductType } from "../../types";
import Button from "./Button";

type ProductSectionPropsType = {
  products: ProductType[] | undefined;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddToCart: (product: CartType) => void;
};

const ProductSection = ({
  products,
  setOpenCart,
  handleAddToCart,
}: ProductSectionPropsType) => {
  if (products?.length === 0) {
    return <div className="mt-[72px]">No products</div>;
  }
  return (
    <div className=" w-full mt-[72px]" onClick={() => setOpenCart(false)}>
      <h1 className="mt-3 mx-3 text-xl font-bold  text-primary md:text-2xl">
        Products
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="p-6 m-4 flex flex-col items-center shadow-md justify-between sm:mx-14 md:m-4 md:hover:shadow-xl md:hover:scale-[1.01] "
          >
            <div className="flex-1 justify-between flex flex-col">
              <div className="flex items-center justify-center h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className=" w-[60%] sm:w-[70%] max-h-[320px]"
                />
              </div>
              <h2 className="text-center my-3 font-medium">{product.title}</h2>
            </div>

            <div className="flex flex-col w-full">
              <span className="text-end text-lg mr-2 font-semibold mb-2">
                £ {product.price}
              </span>

              <Button
                btnType="addToCart"
                type="button"
                handleClick={() => handleAddToCart({ ...product, quantity: 1 })}
              >
                Add to cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
