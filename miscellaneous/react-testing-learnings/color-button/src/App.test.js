import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

/**
 * * BUTTON TESTS
 * * ***************************************************************
 * * ***************************************************************
 */

// REFERENCES - https://github.com/testing-library/jest-dom
test("button has correct initial color and updates when clicked", () => {
  render(<App />);
  // find element with role button and text "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // Expecting red color
  expect(colorButton).toHaveStyle({
    backgroundColor: "red",
  });

  // click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});

/**
 * * ***************************************************************
 * * ***************************************************************
 */
