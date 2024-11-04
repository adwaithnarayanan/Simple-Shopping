import Button from "./Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

type HeaderPropsType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({
  searchText,
  setSearchText,
  setOpenCart,
}: HeaderPropsType) => {
  return (
    <header className="flex flex-col min-[435px]:flex-row justify-between px-4 py-3 bg-secondary text-white fixed top-0 left-0 w-full z-30">
      <h2 className="text-xl font-bold uppercase">Shopify</h2>
      <div className="mr-3 flex">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for product.. "
          className="bg-[rgba(0,0,0,0.2)] px-2 py-1 text-white focus:outline-0 focus:outline-four rounded-sm mx-4"
        />

        <Button
          btnType="cartBtn"
          type="button"
          handleClick={() => setOpenCart(true)}
        >
          <ShoppingCartOutlinedIcon />
        </Button>
      </div>
    </header>
  );
};

export default Header;
