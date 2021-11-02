import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";
import More from "../More";

test("should render Home component", () => {
  //expect(true).toBe(true);
  const homeElement = screen.findAllByTestId("Profile");
  expect(homeElement).toBeInTheDocument();
});
