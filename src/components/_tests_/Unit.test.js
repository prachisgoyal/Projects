import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "../Profile";

//Test Profile
test("Profile screen should render Gender", () => {
  const component = <Profile />;

  const { findByText } = render(component);

  const field = findByText("Who");
  expect(field).toBeTruthy();
});

//Test Profile
test("Profile screen should render Sex", () => {
  const component = <Profile />;

  const { findByText } = render(component);

  const field = findByText("Sex");
  expect(field).toBeTruthy();
});
//Test Profile
test("Profile screen should render DOB", () => {
  const component = <Profile />;

  const { findByText } = render(component);

  const field = findByText("DOB");
  expect(field).toBeTruthy();
});
//Test Profile
test("Profile screen should render Contact", () => {
  const component = <Profile />;

  const { findByText } = render(component);

  const field = findByText("Contact");
  expect(field).toBeTruthy();
});
//Test Profile
test("Profile screen should render Choices", () => {
  const component = <Profile />;

  const { findByText } = render(component);

  const field = findByText("Choices");
  expect(field).toBeTruthy();
});
//Test Profile
test("Profile screen should render Provider", () => {
  const component = <Profile />;

  const { findByText } = render(component);

  const field = findByText("Provider");
  expect(field).toBeTruthy();
});
