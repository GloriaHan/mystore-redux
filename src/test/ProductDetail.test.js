import React from "react";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import { InputContext, CartContext } from "../components/App";
import ProdectDetail from "../components/ProductDetail";

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
            <ProdectDetail />
          </BrowserRouter>
        </CartContext.Provider>
      </InputContext.Provider>
    );
    expect(container).toMatchSnapshot();
  });

  it("case: change select to trigger setQty", async () => {
    const setQty = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");

    useStateSpy.mockImplementation((qty) => [qty, setQty]);

    const mockProduct = {
      id: 1,
      title: "title",
      price: "price",
      category: "category",
      description: "description",
      image: "http://test.com",
      rating: {
        count: 6,
        rate: 3,
      },
    };

    const mRes = { json: jest.fn().mockResolvedValueOnce(mockProduct) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;

    render(
      <InputContext.Provider value={{}}>
        <CartContext.Provider value={{ productsInCart }}>
          <ProdectDetail />
        </CartContext.Provider>
      </InputContext.Provider>
    );

    await waitFor(() => screen.findByTestId("demo-select-small"));

    const selectNode = within(screen.getByTestId("demo-select-small"));
    const selectButton = selectNode.getByRole("button");

    fireEvent.mouseDown(selectButton);

    const listbox = within(screen.getByRole("listbox"));

    fireEvent.click(listbox.getByText(/2/i));

    expect(setQty).toHaveBeenCalledTimes(1);
  });
});
