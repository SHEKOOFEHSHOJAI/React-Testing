import { render, screen, logRoles } from "@testing-library/react";
import Skils from "./skils";

describe("skils", () => {
  const skils = ["javascript", "react", "jest"];

  // this is has bug
  test("render corcctly", () => {
    render(<Skils skils={skils} />);
    const listElem = screen.getByRole("list");
    expect(listElem).toBeInTheDocument();
  });

  test("renders list of skils", () => {
    render(<Skils skils={skils} />);
    const listAllElem = screen.getAllByRole("listitem");
    expect(listAllElem).toHaveLength(skils.length);
  });

  test("renders log in button", () => {
    render(<Skils skils={skils} />);
    const logginButton = screen.getByRole("button", {
      name: "log in",
    });
    expect(logginButton).toBeInTheDocument();
  });

  // when not ele in dom
  test("renders learning button", () => {
    render(<Skils skils={skils} />);
    const StartButton = screen.queryByRole("button", {
      name: "start learning",
    });
    expect(StartButton).not.toBeInTheDocument();
  });

  // for time find ele with settimeout
  test("renders log in button", async () => {
    const view = render(<Skils skils={skils} />);
    //  for debug component
    logRoles(view.container);
    // screen.debug();
    const startButton = await screen.findByRole(
      "button",
      {
        name: "start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startButton).toBeInTheDocument();
  });
});
// find best query in react testing
// testing playground extation
