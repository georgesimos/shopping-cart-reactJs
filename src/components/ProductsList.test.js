import React from "react";
import { shallow } from "enzyme";
import ProductsList from "./ProductsList";

const products = [
  { id: 1, title: "Product 1", price: 15 },
  { id: 2, title: "Product 2", price: 21 },
  { id: 3, title: "Product 3", price: 20 }
];

test("should render ProductList correctly", () => {
  const wrapper = shallow(<ProductsList products={products} />);
  expect(wrapper).toMatchSnapshot();
});
