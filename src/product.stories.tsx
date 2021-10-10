import React from "react";
import { Product } from "./product";
import { aProduct } from "../__generated.dev__/generated-mocks";

export default {
  title: "Product",
};

export const product = () => <Product {...aProduct()} />;
