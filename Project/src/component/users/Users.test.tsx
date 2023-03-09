import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
});
// mock server worker or msw => is api mocking laibrary
// yarn add msw --dev

test("renders a list of users", async () => {
  render(<Users />);
  const users = await screen.findAllByRole("listitem");
  expect(users).toHaveLength(3);
});
