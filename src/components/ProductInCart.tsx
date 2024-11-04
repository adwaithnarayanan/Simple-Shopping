import { useContext } from "react";
import { CartType } from "../../types";
import { CartContext } from "./ProductsPage";
import Button from "./Button";

type ProductInCartType = {
  product: CartType;
};

const ProductInCart = ({ product }: ProductInCartType) => {
  const { setCartItems } = useContext(CartContext);

  function handleDecreaseQuantity() {
    if (product.quantity > 1) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : { ...cartItem }
        )
      );
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== product.id)
      );
    }
  }

  function handleIncreaseQuantity() {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : { ...cartItem }
      )
    );
  }

  return (
    <div className="grid grid-cols-1 m3 shadow-md my-4 mx-2 p-2 hover:shadow-xl">
      <div className="flex flex-col">
        <div className="flex">
          <img
            src={product.image}
            alt={product.title}
            className="w-auto max-h-32"
          />
          <div className="ml-3">
            <h3 className="">{product.title}</h3>
            <span className="font-medium mt-3 ">
              £ {product.price.toFixed(2)}{" "}
            </span>
          </div>
        </div>
        <div className="flex my-2">
          <Button
            type="button"
            btnType="cartQuantity"
            handleClick={handleDecreaseQuantity}
          >
            -
          </Button>

          <div className="h-full flex items-center justify-center px-7">
            {product.quantity}
          </div>
          <Button
            type="button"
            btnType="cartQuantity"
            handleClick={handleIncreaseQuantity}
          >
            +
          </Button>
        </div>
        <div className="w-full text-end text-lg font-medium">
          Total : {(product.price * product.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
