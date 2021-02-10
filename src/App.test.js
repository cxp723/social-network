import React from "react";
import { render } from "@testing-library/react";
import SocialNetwork from "./App";

test("renders preloader while app initializing", () => {
  const { getByTestId } = render(<SocialNetwork />);
  const preloader = getByTestId("preloader");
  expect(preloader).toBeInTheDocument();
});
