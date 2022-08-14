import React from "react";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { InputContext, CartContext } from "../components/App";
import Content from "../components/Content";

const productsInCart = [];

describe("Render Test", function () {
  it("case: expect rendering correct", () => {
    const { container } = render(
      <InputContext.Provider value={{}}>
        <CartContext.Provider value={{ productsInCart }}>
          <BrowserRouter>
            <Content />
          </BrowserRouter>
        </CartContext.Provider>
      </InputContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
