import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productService";
import { setProducts } from "./productSlice";

export default function ProductScreen() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    dispatch(setProducts(data));
  };

  return (
    <View>
      {products.map(p => (
        <Text key={p.id}>{p.name}</Text>
      ))}
    </View>
  );
}