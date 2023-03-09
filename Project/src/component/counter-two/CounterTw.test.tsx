import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./counterTwo";

// mock function
test("renders correctly", () => {
  render(<CounterTwo count={0} />);
  const textElement = screen.getByText("Counter Two");
  expect(textElement).toBeInTheDocument();
});
test("handlers are called", async () => {
  user.setup();
  //   create mock fanction
  const incrementHandler = jest.fn();
  const decrementHandler = jest.fn();
  render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler} />);
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });
  await user.click(incrementButton);
  await user.click(decrementButton);
  expect(incrementHandler).toHaveBeenCalledTimes(1);
  expect(decrementHandler).toHaveBeenCalledTimes(1);
});

// mockin http request
