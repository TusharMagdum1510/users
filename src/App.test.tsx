import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import UserForm from "./UserForm";

test("can receive a new user and show it on a list", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("tom");

  await user.click(emailInput);
  await user.keyboard("tom@gmail.com");

  await user.click(button);

  //   screen.debug();

  const name = screen.getByRole("cell", { name: "tom" });
  const email = screen.getByRole("cell", { name: "tom@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

test("empties the two inputs when form is submitted", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("tom");
  await user.click(emailInput);
  await user.keyboard("tom@gmail.com");

  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
