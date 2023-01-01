import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("initial condition of checkbox", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole("button", { name: /confirm order/i });

  // initial condition
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  // click on checkbox
  await user.click(checkbox);

  expect(checkbox).toBeChecked();

  expect(button).toBeEnabled();

  // second click
  await user.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
  // shows when checkbox mouseover
  // ref -- https://testing-library.com/docs/user-event/convenience
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await userEvent.hover(termsAndConditions);
  const popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).toBeInTheDocument();

  // hides when checkbox mouseout
  await user.unhover(termsAndConditions);
  expect(nullPopover).not.toBeInTheDocument();
});
