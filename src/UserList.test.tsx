import { render, screen, within } from "@testing-library/react";
// import { render, screen } from "@testing-library/react";
// import { render } from "@testing-library/react";

import UserList from "./UserList";
import { UsersType } from "./App";

import "@testing-library/jest-dom";

//todo GETTING HELP WITH QUERY FUNCTIONS

/*
test("render one row per user", async () => {
  const user: UsersType[] = [
    { name: "tom", email: "tom@gmail.com" },
    { name: "tommy", email: "tommy@gmail.com" },
    { name: "tommerson", email: "tommerson@gmail.com" },
  ];

  //! Render the component
  render(<UserList users={user} />);

  //! Find all the rows in the table
  // screen.logTestingPlaygroundURL(); //* KEEP THIS LINE ON AND RUN THE TEST THAT WILL GIVE YOU A LINK WHICH THEN YOU CAN USE TO GO TO PLAYGROUND WHICH WILL HELP YOU CHOOSE THE PROPER QUERY FUNCTION

  const rows = screen.getAllByRole("row");

  //! Assertion: correct number of rows in the table
  // expect(rows).toHaveLength(3);
  expect(rows).toHaveLength(4);
});

test("render the email and name of each user", async () => {});
*/

// todo QUERY FUNCTION ESCAPE HATCHES

/*
test("render one row per user", async () => {
  const user: UsersType[] = [
    { name: "tom", email: "tom@gmail.com" },
    { name: "tommy", email: "tommy@gmail.com" },
    { name: "tommerson", email: "tommerson@gmail.com" },
  ];

  //! Render the component
  render(<UserList users={user} />);

  //! Find all the rows in the table
  // screen.logTestingPlaygroundURL(); //* KEEP THIS LINE ON AND RUN THE TEST THAT WILL GIVE YOU A LINK WHICH THEN YOU CAN USE TO GO TO PLAYGROUND WHICH WILL HELP YOU CHOOSE THE PROPER QUERY FUNCTION

  const rows = within(screen.getByTestId("users")).getAllByRole('row');

  //! Assertion: correct number of rows in the table
  expect(rows).toHaveLength(3);
});

test("render the email and name of each user", async () => {});
*/

//todo QUERY FUNCTION FALLBACK-2

/*
test("render one row per user", async () => {
  const user: UsersType[] = [
    { name: "tom", email: "tom@gmail.com" },
    { name: "tommy", email: "tommy@gmail.com" },
    { name: "tommerson", email: "tommerson@gmail.com" },
  ];

  //! Render the component
  const { container } = render(<UserList users={user} />);

  //! Find all the rows in the table
  // screen.logTestingPlaygroundURL(); //* KEEP THIS LINE ON AND RUN THE TEST THAT WILL GIVE YOU A LINK WHICH THEN YOU CAN USE TO GO TO PLAYGROUND WHICH WILL HELP YOU CHOOSE THE PROPER QUERY FUNCTION

  // const table = container.querySelector("table");
  // console.log(table);

  const rows = container.querySelectorAll('tbody tr');

   

  //! Assertion: correct number of rows in the table
  expect(rows).toHaveLength(3);
});

test("render the email and name of each user", async () => {});
*/

//todo TESTING TABLE OF CONTENTS

/*
test("render one row per user", async () => {
  const user: UsersType[] = [
    { name: "tom", email: "tom@gmail.com" },
    { name: "tommy", email: "tommy@gmail.com" },
    { name: "tommerson", email: "tommerson@gmail.com" },
  ];

  //! Render the component
  const { container } = render(<UserList users={user} />);

  //! Find all the rows in the table
  // screen.logTestingPlaygroundURL(); //* KEEP THIS LINE ON AND RUN THE TEST THAT WILL GIVE YOU A LINK WHICH THEN YOU CAN USE TO GO TO PLAYGROUND WHICH WILL HELP YOU CHOOSE THE PROPER QUERY FUNCTION

  // const table = container.querySelector("table");
  // console.log(table);

  const rows = container.querySelectorAll("tbody tr");

  //! Assertion: correct number of rows in the table
  expect(rows).toHaveLength(3);
});

test("render the email and name of each user", async () => {
  const users: UsersType[] = [
    { name: "tom", email: "tom@gmail.com" },
    { name: "tommy", email: "tommy@gmail.com" },
    { name: "tommerson", email: "tommerson@gmail.com" },
  ];

  //! Render the component
  render(<UserList users={users} />);

  // screen.logTestingPlaygroundURL();

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
*/

//todo AVODING BeforeEach

function rederComponent() {
  const users: UsersType[] = [
    { name: "tom", email: "tom@gmail.com" },
    { name: "tommy", email: "tommy@gmail.com" },
    { name: "tommerson", email: "tommerson@gmail.com" },
  ];

  //! Render the component
  render(<UserList users={users} />);

  return {
    users,
  };
}

test("render one row per user", async () => {
  rederComponent();
  //! Find all the rows in the table
  // screen.logTestingPlaygroundURL(); //* KEEP THIS LINE ON AND RUN THE TEST THAT WILL GIVE YOU A LINK WHICH THEN YOU CAN USE TO GO TO PLAYGROUND WHICH WILL HELP YOU CHOOSE THE PROPER QUERY FUNCTION

  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //! Assertion: correct number of rows in the table
  expect(rows).toHaveLength(3);
});

beforeEach(()=>{})  //! imp

test("render the email and name of each user", async () => {
  //! Render the component

  const { users } = rederComponent();

  // screen.logTestingPlaygroundURL();

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
