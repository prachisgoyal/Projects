import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";

describe("Testing react navigation", () => {
  test("page contains the header", async () => {
    const component = <Home />;

    const { findByText } = render(component);

    const header = findByText("Welcome");

    expect(header).toBeTruthy();
  });

  test("clicking on Profile takes you to the Profile screen", async () => {
    const navigate = jest.fn();
    const component = <Home navigation={{ navigate }} />;

    const { getByText } = render(component);
    const toClick = getByText("Profile");

    fireEvent.press(toClick);
    //expect(mockedDispatch).toHaveBeenCalledTimes(1);
    // const newHeader = findByText("Profile");
    // const newBody = findByText("Gender");

    // expect(newHeader).toBeTruthy();
    // expect(newBody).toBeTruthy();
    expect(navigate).toHaveBeenCalledWith("Profile");
  });
});
