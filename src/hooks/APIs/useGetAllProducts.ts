import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../../API";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
};
