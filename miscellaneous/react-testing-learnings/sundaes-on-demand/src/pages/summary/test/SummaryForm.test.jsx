import SummaryForm from "../SummaryForm";
import { render, screen, fireEvent } from "@testing-library/react";

test("initial condition of checkbox", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  // initial condition
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  // click on checkbox
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  expect(button).toBeEnabled();

  // second click
  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});
