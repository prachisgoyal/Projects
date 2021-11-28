import React from "react";
import { render, waitFor } from "@testing-library/react-native";

import App from "../../../App";

// ...

describe("App", () => {
  it("renders home screen first on app launch", async () => {
    const { getByText } = render(<App />);
    await waitFor(() => getByText("Welcome"));
  });
});
