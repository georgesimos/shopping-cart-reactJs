import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";

const initialState = {
  products: [
    { id: 1, title: "Product 1", price: 15 },
    { id: 2, title: "Product 2", price: 21 },
    { id: 3, title: "Product 3", price: 20 }
  ],
  cart: {
    addedIds: [],
    quantityById: {}
  }
};

test("should render Cart correctly", () => {
  const wrapper = shallow(
    <Cart cart={initialState.cart} products={initialState.products} />
  );
  expect(wrapper).toMatchSnapshot();
});
