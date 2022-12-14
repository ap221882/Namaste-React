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
  const colorButton = screen.getByRole("button", { name: "Change to blue" }); // name here is label of checkbox
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
 * * *******************BUTTON WITH CHECKBOX FUNCTIONALITY**********
 * * ***************************************************************
 */

test("initial conditions are correct of button and checkbox", () => {
  render(<App />);
  //button is enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  // checkbox is not checked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox functionality - disables button on true", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("disabled button turns gray", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });
  // RED BUTTON
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  // BLUE BUTTON
  fireEvent.click(colorButton);
  const blueColorButton = screen.getByRole("button", { name: "Change to red" });
  fireEvent.click(checkbox);
  expect(blueColorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(blueColorButton).toHaveStyle({ backgroundColor: "blue" });
});
