import React from "react";
import { shallow, mount } from "enzyme";
import Product from "./Product";

test("should render Product correctly", () => {
  const wrapper = shallow(<Product />);
  expect(wrapper).toMatchSnapshot();
});

test("check title", () => {
  const props = {
      title: "New Product"
    },
    ProductComponent = mount(<Product {...props} />);
  expect(ProductComponent.prop("title")).toEqual("New Product");
});

test("should render title and price", () => {
  const wrapper = shallow(<Product title="Test Product" price="10" />);
  expect(wrapper.text()).toBe(" Test Product  10 €   Add to cart");
});

test("should render title, price, and quantity", () => {
  const wrapper = shallow(
    <Product title="Test Product" price="10" quantity="6" />
  );
  expect(wrapper.text()).toBe(" Test Product  10 €  6 Add to cart");
});
