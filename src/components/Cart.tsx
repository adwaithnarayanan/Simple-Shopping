import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { CartType } from "../../types";
import ProductInCart from "./ProductInCart";
import Button from "./Button";

type CartPropsType = {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartType[];
};

const Cart = ({ setOpenCart, cartItems }: CartPropsType) => {
  return (
    <div className="absolute min-h-screen  top-[-70px] right-0 max-w-[350px] w-[80%] shadow-xl rounded-lg z-40 md:max-w-[40%] lg:max-w-[30%] ">
      <div className="fixed bg-white right-0 max-w-[350px] w-[80%] shadow-xl rounded-lg z-40 md:max-w-[40%] lg:max-w-[30%] h-screen">
        <div className="overflow-y-scroll h-screen scroll-m-0">
          <header className="flex justify-between items-center">
            <h2 className="text-xl font-semibold py-3 px-4 uppercase">Cart</h2>
            {/* <button
              className="mr-3 focus:ring-1 focus:ring-primary h-fit hover:bg-[rgba(0,0,0,0.05)] p-2"
              onClick={() => setOpenCart(false)}
            >
              <CloseOutlinedIcon />
            </button> */}
            <Button
              btnType="closeCart"
              type="button"
              handleClick={() => setOpenCart(false)}
            >
              <CloseOutlinedIcon />
            </Button>
          </header>
          <section className="mx-3">
            {cartItems ? (
              cartItems.map((cartItem) => (
                <ProductInCart key={cartItem.id} product={cartItem} />
              ))
            ) : (
              <span>No products to display</span>
            )}

            {cartItems.length > 0 ? (
              <>
                <div className="font-bold">
                  Total:{" "}
                  {cartItems
                    .reduce(
                      (acc, cartItem) =>
                        acc + cartItem.quantity * cartItem.price,
                      0
                    )
                    .toFixed(2)}
                </div>
                <Button btnType="checkout" type="button">
                  Checkout
                </Button>
              </>
            ) : (
              <span>No items in cart</span>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
