import React from "react";
import { shallow } from "enzyme";
import StorePage from "./StorePage";

test("should render StorePage correctly", () => {
  const wrapper = shallow(<StorePage />);
  expect(wrapper).toMatchSnapshot();
});
