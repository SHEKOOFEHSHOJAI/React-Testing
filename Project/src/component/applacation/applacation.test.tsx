import Application from "../applacation/aplacation";
import { render, screen } from "@testing-library/react";
describe("applcation", () => {
  test("render corectly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      name: "section 1",
      //   level:1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      name: "job applacation",
      //   level:2
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameEle = screen.getByRole("checkbox");
    expect(nameEle).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsEle = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(termsEle).toBeInTheDocument();

    const bioEle = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEle).toBeInTheDocument();

    const submit = screen.getByRole("button");
    expect(submit).toBeInTheDocument();

    const nameLbelText = screen.getByLabelText("Name");
    expect(nameLbelText).toBeInTheDocument();

    const nameElemetn2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElemetn2).toBeInTheDocument();

    const nameEle3 = screen.getByPlaceholderText("fullName");
    expect(nameEle3).toBeInTheDocument();

    // getByText
    const pragraphText = screen.getByText("All field nad mandetory");
    expect(pragraphText).toBeInTheDocument();

    // getByDisplayText
    const nameEle4 = screen.getByDisplayValue("vishwas");
    expect(nameEle4).toBeInTheDocument();

    // getByAltText

    const imageElement = screen.getByAltText("laptop");
    expect(imageElement).toBeInTheDocument();

    // getByTitle
    const titleElement = screen.getByTitle("close");
    expect(titleElement).toBeInTheDocument();

    // getByTestId
    const spanIdElement = screen.getByTestId("testMe");
    expect(spanIdElement).toBeInTheDocument();
  });
});
