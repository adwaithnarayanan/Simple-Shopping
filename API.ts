import { ProductType } from "./types";

import { apiClient } from "./src/httpClient/httpClient";
export const getAllProducts = async () => {
  return (await apiClient.get<ProductType[]>("/")).data;
};
