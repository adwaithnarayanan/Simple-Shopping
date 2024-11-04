import React from "react";

type ButtonPropsType = {
  type: "submit" | "button";
  btnType: "cartBtn" | "addToCart" | "closeCart" | "checkout" | "cartQuantity";
  children: React.ReactNode;
  handleClick?: () => void;
};

const Button = ({ btnType, children, type, handleClick }: ButtonPropsType) => {
  let btnStyle = "";
  if (btnType === "checkout")
    btnStyle =
      "w-full my-3 bg-primary text-white text-lg font-bold py-1.5 rounded-md";
  else if (btnType === "cartQuantity")
    btnStyle =
      "px-6 py-2 bg-bg-three flex items-center justify-center focus:outline-2 focus:outline-primary focus:ring-4 focus:ring-secondary  rounded-md";
  else if (btnType === "addToCart")
    btnStyle =
      "w-full bg-primary text-four py-2 px-3 rounded-md hover:bg-[#32174a]";

  return (
    <button type={type} onClick={handleClick} className={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
