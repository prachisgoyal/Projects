import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";

describe("Testing react navigation", () => {
  test("clicking on Profile takes you to the Profile screen", async () => {
    const navigate = jest.fn();
    const component = <Home navigation={{ navigate }} />;
    const { getByText } = render(component);
    const toClick = getByText("Profile");

    fireEvent.press(toClick);
    expect(navigate).toHaveBeenCalledWith("Profile");
  });
  test("clicking on Lists takes you to the Lists screen", async () => {
    const navigate = jest.fn();
    const component = <Home navigation={{ navigate }} />;
    const { getByText } = render(component);
    const toClick = getByText("Lists");

    fireEvent.press(toClick);
    expect(navigate).toHaveBeenCalledWith("Lists");
  });
  test("clicking on Documents takes you to the Documents screen", async () => {
    const navigate = jest.fn();
    const component = <Home navigation={{ navigate }} />;
    const { getByText } = render(component);
    const toClick = getByText("Documents");

    fireEvent.press(toClick);
    expect(navigate).toHaveBeenCalledWith("Documents");
  });
  test("clicking on Appointment takes you to the Appointment screen", async () => {
    const navigate = jest.fn();
    const component = <Home navigation={{ navigate }} />;
    const { getByText } = render(component);
    const toClick = getByText("Appointment");

    fireEvent.press(toClick);
    expect(navigate).toHaveBeenCalledWith("Appointment");
  });
  test("clicking on Accounting takes you to the Accounting screen", async () => {
    const navigate = jest.fn();
    const component = <Home navigation={{ navigate }} />;
    const { getByText } = render(component);
    const toClick = getByText("Accounting");

    fireEvent.press(toClick);
    expect(navigate).toHaveBeenCalledWith("Accounting");
  });
  test("clicking on Accounting takes you to the Accounting screen", async () => {
    const navigate = jest.fn();
    const component = <Home navigation={{ navigate }} />;
    const { getByText } = render(component);
    const toClick = getByText("Accounting");

    fireEvent.press(toClick);
    expect(navigate).toHaveBeenCalledWith("Accounting");
  });
});
