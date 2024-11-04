import ProductsPage from "./components/ProductsPage";
import { useGetAllProducts } from "./hooks/APIs/useGetAllProducts";

function App() {
  const { data } = useGetAllProducts();

  return (
    <div className="min-w-[320px]">
      <ProductsPage data={data} />
    </div>
  );
}

export default App;
