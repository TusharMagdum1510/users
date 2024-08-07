import { FormEvent, useState } from "react";
import { UsersType } from "./App";

type PropType = {
  onUserAdd: (user: UsersType) => void;
};

function UserForm({ onUserAdd }: PropType) {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.email);

    onUserAdd({ name, email });
    console.log({ name, email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          type="text"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          type="email"
          id="email"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
