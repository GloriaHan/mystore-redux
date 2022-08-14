import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import App from "../components/App";

describe("Render Test", function () {
  it("case: expect rendering correct", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
