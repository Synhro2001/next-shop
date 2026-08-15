import { Product } from "../products/product.types";

export type GoogleMapProduct = Product & {
  latitude: number;
  longitude: number;
};