import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Home from "../Home";
import More from "../More";

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

//Test onClick Event
// test("Test onClick Event in Home Screen", () => {
//   render(<Home />);
//   const touchable = screen.getByText("Profile");
//   fireEvent.click(touchable);
//   expect(screen.getByText("Profile")).not.toBeInTheDocument();
// });
