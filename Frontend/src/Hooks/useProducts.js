import { useContext } from "react";
import { ProductContext } from "../Context/product.context";

export const useProducts = () => useContext(ProductContext);
