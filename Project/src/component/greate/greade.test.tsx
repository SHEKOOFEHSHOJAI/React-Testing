import { render, screen } from "@testing-library/react";
import Grate from "./grate";

// group test
describe("Grade", () => {
  // Test Driven Development
  test(" render corecctly", () => {
    render(<Grate />);
    // screen is query global object for react testing
    const textElem = screen.getByText(/Grade/);
    expect(textElem).toBeInTheDocument();
  });
  // .skip
  // .only
});
