// import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import { UsersType } from "./App";

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

test("it calls onUserAdd when the form is submitted", async () => {
  //? Not the best implementation
  const argList: UsersType[] = [];
  const callback = (args: UsersType) => {
    console.log(args);
    argList.push(args);
  };
  // const mockOnUserAdd = jest.fn();

  //! Try to render the component

  render(<UserForm onUserAdd={callback} />);
  // render(<UserForm onUserAdd={mockOnUserAdd} />);

  //!  Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  //! Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("Tom");
  //  await user.type(nameInput, "Tom");

  //! Simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("tom@gmail.com");
  // await user.type(emailInput, "tom@gmail.com");

  //! Find the button
  const buttons = screen.getByRole("button");

  //! Stimulate clicking the button
  await user.click(buttons);

  //! Assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0]).toEqual({ name: "Tom", email: "tom@gmail.com" });
  // expect(mockOnUserAdd).toHaveBeenCalledTimes(1);
  // expect(mockOnUserAdd).toHaveBeenCalledWith({
  //   name: "Tom",
  //   email: "tom@gmail.com",
  // });
});
