import React from "react";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { InputContext, CartContext } from "../components/App";
import Welcome from "../components/Welcome";

const productsInCart = [];

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Render Test", function () {
  it("case: expect rendering correct", () => {
    const { container } = render(
      <InputContext.Provider value={{}}>
        <CartContext.Provider value={{ productsInCart }}>
          <BrowserRouter>
            <Welcome />
          </BrowserRouter>
        </CartContext.Provider>
      </InputContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("case: click button to trigger useNavigate", () => {
    render(
      <InputContext.Provider value={{}}>
        <CartContext.Provider value={{ productsInCart }}>
          <BrowserRouter>
            <Welcome />
          </BrowserRouter>
        </CartContext.Provider>
      </InputContext.Provider>
    );

    fireEvent.click(screen.getByText("Shopping Now"));
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
