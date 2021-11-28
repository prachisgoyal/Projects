import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";
import More from "../More";

//Test Header Rendering
test("page contains the header", async () => {
  const component = <Home />;

  const { findByText } = render(component);

  const header = findByText("Welcome");

  expect(header).toBeTruthy();
});

//Test DOM Rendering
test("should render Profile touchable in Home Screen", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("Profile");
  expect(homeElement).toBeInTheDocument();
});

//Test DOM Rendering
test("should render Lists touchable in Home Screen", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("Lists");
  expect(homeElement).toBeInTheDocument();
});

//Test DOM Rendering
test("should render Documents touchable in Home Screen", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("Documents");
  expect(homeElement).toBeInTheDocument();
});

//Test DOM Rendering
test("should render Appointment touchable in Home Screen", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("Appointment");
  expect(homeElement).toBeInTheDocument();
});

//Test DOM Rendering
test("should render Accounting touchable in Home Screen", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("Accounting");
  expect(homeElement).toBeInTheDocument();
});

//Test DOM Rendering
test("should render Reports touchable in Home Screen", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("Reports");
  expect(homeElement).toBeInTheDocument();
});
