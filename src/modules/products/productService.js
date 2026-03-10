import apiClient from "../../services/apiClient";

export const fetchProducts = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};