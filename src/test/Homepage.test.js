import React from "react";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { InputContext, CartContext } from "../components/App";
import Homepage from "../components/Homepage";

const productsInCart = [];

describe("Render Test", function () {
  it("case: expect rendering correct", () => {
    const { container } = render(
      <InputContext.Provider value={{}}>
        <CartContext.Provider value={{ productsInCart }}>
          <BrowserRouter>
            <Homepage />
          </BrowserRouter>
        </CartContext.Provider>
      </InputContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
