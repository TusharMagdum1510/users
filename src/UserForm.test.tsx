// import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
// import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // Create a mock function for onUserAdd
  const mockOnUserAdd = jest.fn();

  //! render the component
  render(<UserForm onUserAdd={mockOnUserAdd} />);

  //! Manipulate the component or find an element in it
  const input = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //! Assertion - make sure the component is doing what we expect it to do
  expect(input).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
