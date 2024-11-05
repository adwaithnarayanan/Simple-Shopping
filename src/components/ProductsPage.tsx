import { createContext, useEffect, useState } from "react";
import Header from "./Header";
import ProductSection from "./ProductSection";
import { CartContextType, CartType, ProductType } from "../../types";
import Cart from "./Cart";

export const CartContext = createContext({} as CartContextType);

type ProductsPagePropsType = {
  data: ProductType[] | undefined;
};

const ProductsPage = ({ data }: ProductsPagePropsType) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchText, setSearchText] = useState("");
  const [cartItems, setCartItems] = useState<CartType[]>([]);
  const [openCart, setOpenCart] = useState(false);

  const handleAddToCart = (product: CartType) => {
    const isPresent = cartItems.find((cartItem) => cartItem.id === product.id);

    if (!isPresent) setCartItems((prev) => [...prev, { ...product }]);
  };

  useEffect(() => {
    if (searchText.trim())
      setProducts(
        data!.filter((product) =>
          product.title
            .toLowerCase()
            .split(" ")
            .find((search) => search.slice(0, searchText.length) === searchText)
        )
      );
    else if (data) {
      setProducts([...data]);
    }
  }, [searchText]);

  useEffect(() => {
    if (data) setProducts([...data]);
  }, [data]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <div className="relative">
        {openCart && (
          <div className="">
            <Cart setOpenCart={setOpenCart} cartItems={cartItems} />
          </div>
        )}
        <div>
          <Header
            searchText={searchText}
            setSearchText={setSearchText}
            setOpenCart={setOpenCart}
          />
          <ProductSection
            products={products}
            setOpenCart={setOpenCart}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </CartContext.Provider>
  );
};

export default ProductsPage;
